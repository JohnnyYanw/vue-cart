import Vue from 'vue';
import './assets/less/base.css';
import App from './App.vue';
import router from './router/router.js';

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');