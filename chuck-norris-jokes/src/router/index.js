import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLayout from '@/layouts/Main.vue';
import ErrorPagesLayout from '@/layouts/ErrorPages.vue';
import Home from '@/views/Home.vue';
import Favourites from '@/views/Favourites.vue';
import NotFound from '@/views/NotFound.vue';
import NetworkError from '@/views/NetworkError.vue';

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
//to avoid redundant navigation to current location:
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};
const routes = [
	{
		path: '/',
		component: MainLayout,
		children: [
			{
				path: '',
				name: 'Home',
				component: Home,
			},
			{
				path: '/favourites',
				name: 'Favourites',
				component: Favourites,
			},
		],
	},
	{
		path: '',
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
