import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: 'cart'
	}, {
		path: '/cart',
		component: resolve => require(['../components/Cart.vue'], resolve)
	}, {
		path: '/cart',
		component: resolve => require(['../components/Address.vue'], resolve)
	}
];

const router = new VueRouter({
	base: __dirname,
	mode: 'history',
	routes
});

export default router;