import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tenJokes: [],
		favJokes: [],
		isActive: false,
		notifications: [],
		backgroundChange: false,
	},
	getters: {
		tenJokes: (state) => state.tenJokes,
		favJokes: (state) => state.favJokes,
		isActive: (state) => state.isActive,
		notifications: (state) => state.notifications,
		backgroundChange: (state) => state.backgroundChange,
	},
	mutations: {
		UPLOAD_ONE_JOKE(state) {
			foo();
			var interval = setInterval(foo, 5000);
			function foo() {
				if (state.favJokes.length >= 10 || state.isActive == false) {
					state.isActive = false;
					clearInterval(interval);
				} else {
					EventService.getOneJoke()
						.then((response) => {
							response.data.value.forEach((element) => {
								state.favJokes.push(element.joke.replace(/&quot;/g, "'").replace('?s', "'s"));
							});
						})
						.catch((error) => {
							if (error.response && error.response.status == 404) {
								this.$router.push({
									name: 'NotFound',
								});
							}
						});
				}
			}
		},
		UPLOAD_TEN_JOKES(state) {
			EventService.getTenJokes()
				.then((response) => {
					response.data.value.forEach((element) => {
						state.tenJokes.push(element.joke.replace(/&quot;/g, "'").replace('?s', "'s"));
					});
				})
				.catch((error) => {
					if (error.response && error.response.status == 404) {
						this.$router.push({
							name: 'NotFound',
						});
					}
				});
		},
		CLEAR_JOKES(state) {
			state.tenJokes = [];
		},
		ADD_FAVOURITE(state, payload) {
			state.favJokes.push(payload);
			localStorage.setItem('favouriteJokes', JSON.stringify(state.favJokes));
		},
		REMOVE_FAVOURITE(state, payload) {
			state.favJokes.splice(payload.index, 1);
			localStorage.setItem('favouriteJokes', JSON.stringify(state.favJokes));
		},
		SAVE_FAVOURITE(state) {
			localStorage.setItem('favouriteJokes', JSON.stringify(state.favJokes));
		},
		LOAD_FAVOURITE(state) {
			const favJokes = JSON.parse(localStorage.getItem('favouriteJokes'));
			const background = JSON.parse(localStorage.getItem('backgroundChange'));
			state.favJokes = favJokes;
			state.backgroundChange = background;
		},
		TOGGLE_TIMER_BUTTON(state) {
			state.isActive = state.isActive ? false : true;
			localStorage.setItem('favouriteJokes', JSON.stringify(state.favJokes));
		},
		PUSH_NOTIFICATION(state, notification) {
			state.notifications.push({
				...notification,
				id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
			});
		},
		REMOVE_NOTIFICATION(state, notificationToRemove) {
			state.notifications = state.notifications.filter((notification) => {
				return notification.id != notificationToRemove.id;
			});
		},
		TOGGLE_BACKGROUND(state) {
			state.backgroundChange = state.backgroundChange ? false : true;
			localStorage.setItem('backgroundChange', JSON.stringify(state.backgroundChange));
		},
	},
	actions: {
		uploadTenJokes: ({ commit }) => {
			commit('UPLOAD_TEN_JOKES');
		},
		clearJokes: ({ commit }) => {
			commit('CLEAR_JOKES');
		},
		addFavourite: ({ state, commit, dispatch }, payload) => {
			if (state.favJokes.length > 0 && state.favJokes.includes(payload)) {
				dispatch('addNotification', {
					type: 'danger',
					message: "You've already added this joke to the list",
				});
			} else if (state.favJokes.length === 10) {
				dispatch('addNotification', {
					type: 'danger',
					message: "You can't add more more than 10 favourite jokes",
				});
			} else {
				commit('ADD_FAVOURITE', payload);
				dispatch('addNotification', {
					type: 'success',
					message: 'Joke was successfully added',
				});
			}
		},
		removeFavourite: ({ commit, dispatch }, payload) => {
			commit('REMOVE_FAVOURITE', payload);
			dispatch('addNotification', {
				type: 'success',
				message: 'Joke was successfully removed',
			});
		},

		saveFavourite: ({ commit }) => {
			commit('SAVE_FAVOURITE');
		},
		toggleTimer: ({ commit }) => {
			commit('TOGGLE_TIMER_BUTTON');
			commit('UPLOAD_ONE_JOKE');
		},
		loadFavourite: ({ commit }) => {
			commit('LOAD_FAVOURITE');
		},
		addNotification: ({ commit }, notification) => {
			commit('PUSH_NOTIFICATION', notification);
		},
		removeNotification: ({ commit }, notification) => {
			commit('REMOVE_NOTIFICATION', notification);
		},
		toggleBackground: ({ commit }) => {
			commit('TOGGLE_BACKGROUND');
		},
	},
});
