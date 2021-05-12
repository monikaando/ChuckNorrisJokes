import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'http://api.icndb.com/jokes/random',
	withCredentials: false,
	headers: {
		Accept: 'application.json',
		'Content-Type': 'application/json',
	},
});
export default {
	getTenJokes() {
		return apiClient.get('/10');
	},
	getOneJoke() {
		return apiClient.get('/1');
	},
};
