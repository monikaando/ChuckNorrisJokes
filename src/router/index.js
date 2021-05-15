import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLayout from '@/layouts/Main.vue';
import Home from '@/views/Home.vue';
import Favourites from '@/views/Favourites.vue';
import NotFound from '@/views/NotFound.vue';

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
		path: '*',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = new VueRouter({
	mode: 'history',
	hash: false,
	scrollBehavior: () => ({ y: 0 }),
	routes,
});

export default router;
