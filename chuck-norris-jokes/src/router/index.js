import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLayout from '@/layouts/Main.vue';
import ErrorPagesLayout from '@/layouts/ErrorPages.vue';

import Home from '@/views/Home.vue';
import Favourite from '@/views/Favourite.vue';
import NotFound from '@/views/NotFound.vue';
import NetworkError from '@/views/NetworkError.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'MainLayout',
		component: MainLayout,
		children: [
			{
				path: '',
				name: 'Home',
				component: Home,
			},
			{
				path: '/favourite',
				name: 'Favourite',
				component: Favourite,
			},
		],
	},
	{
		path: '/',
		name: 'ErrorPagesLayout',
		component: ErrorPagesLayout,
		children: [
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
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	hash: false,
	scrollBehavior: () => ({ y: 0 }),
	routes,
});

export default router;
