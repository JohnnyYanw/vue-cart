import Vue from 'vue';
import './assets/less/reset.css';
import App from './App.vue';
import router from './router/router.js';
import Axios from 'axios';

Vue.prototype.$http = Axios;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
