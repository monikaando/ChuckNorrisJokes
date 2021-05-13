import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tenJokes: [],
		favJokes: [],
	},
	getters: {
		tenJokes: (state) => state.tenJokes,
		favJokes: (state) => state.favJokes,
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
		CLEAR_JOKES(state) {
			state.tenJokes = [];
		},
		ADD_FAVOURITE(state, payload) {
			if (state.favJokes.includes(payload)) {
				console.log('Duplicate!!!!!'); //create alert
			} else if (state.favJokes.length === 10) {
				console.log('You can not add more favourite things (10 is a max)'); //create alert
			} else {
				state.favJokes.push(payload);
			}
		},
		REMOVE_FAVOURITE(state, payload) {
			state.favJokes.splice(payload.index, 1);
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
	},
});
