import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tenJokes: [],
		favJokes: [],
		isActive: false,
	},
	getters: {
		tenJokes: (state) => state.tenJokes,
		favJokes: (state) => state.favJokes,
		isActive: (state) => state.isActive,
	},
	mutations: {
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
							name: '404',
						});
					} else {
						this.$router.push({
							name: 'NetworkError',
						});
					}
				});
		},
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
									name: '404',
								});
							} else {
								this.$router.push({
									name: 'NetworkError',
								});
							}
						});
				}
			}
		},
		CLEAR_JOKES(state) {
			state.tenJokes = [];
		},
		ADD_FAVOURITE(state, payload) {
			if (state.favJokes.length > 0 && state.favJokes.includes(payload)) {
				console.log('Duplicate!!!!!'); //create alert
			} else if (state.favJokes.length === 10) {
				console.log('You can not add more favourite things (10 is a max)'); //create alert
			} else {
				state.favJokes.push(payload);
				localStorage.setItem('favouriteJokes', JSON.stringify(state.favJokes));
			}
		},
		REMOVE_FAVOURITE(state, payload) {
			state.favJokes.splice(payload.index, 1);
			localStorage.setItem('favouriteJokes', JSON.stringify(state.favJokes));
		},
		SAVE_FAVOURITE(state) {
			localStorage.setItem('favouriteJokes', JSON.stringify(state.favJokes));
		},
		TOGGLE_TIMER_BUTTON(state) {
			state.isActive = state.isActive ? false : true;
			localStorage.setItem('favouriteJokes', JSON.stringify(state.favJokes));
		},
		LOAD_FAVOURITE(state) {
			const favJokes = JSON.parse(localStorage.getItem('favouriteJokes'));
			state.favJokes = favJokes;
		},
	},
	actions: {
		uploadTenJokes: ({ commit }) => {
			commit('UPLOAD_TEN_JOKES');
		},
		clearJokes: ({ commit }) => {
			commit('CLEAR_JOKES');
		},
		addFavourite: ({ commit }, payload) => {
			commit('ADD_FAVOURITE', payload);
		},
		removeFavourite: ({ commit }, payload) => {
			commit('REMOVE_FAVOURITE', payload);
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
	},
});
