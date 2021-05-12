import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Favourite from '@/views/Favourite.vue';
import NotFound from '@/views/NotFound.vue';
import NetworkError from '@/views/NetworkError.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/favourite',
		name: 'Favourite',
		component: Favourite,
	},
	{
		path: '/:catchAll(.*)',
		name: '404',
		component: NotFound,
	},
	{
		path: '/network-error',
		name: 'NetworkError',
		component: NetworkError,
	},
];

const router = new VueRouter({
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes,
});

export default router;
