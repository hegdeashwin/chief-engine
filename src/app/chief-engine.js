import Vue from 'vue';
import VueRouter from 'vue-router';

import MasterLayout from './views/Layout/Layout';
import Dashboard from './views/Dashboard/Dashboard';
import Settings from './views/Settings/Settings';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard },
    { path: '/settings', component: Settings }
  ]
});

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  router
}, MasterLayout)).$mount('#app');
