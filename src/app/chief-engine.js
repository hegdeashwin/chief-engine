import Vue from 'vue';
import Router from './router/Router';
import MasterLayout from './views/Layout/Layout';

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  router: Router
}, MasterLayout)).$mount('#app');
