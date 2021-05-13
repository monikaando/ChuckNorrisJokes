import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tenJokes: [],
	},
	getters: {
		tenJokes: (state) => state.tenJokes,
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
	},
	actions: {
		uploadTenJokes: ({ commit }) => {
			commit('UPLOAD_TEN_JOKES');
		},
		clearJokes: ({ commit }) => {
			commit('CLEAR_JOKES');
		},
	},
});
