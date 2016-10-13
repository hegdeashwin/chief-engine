import Vue from 'vue';
import VueRouter from 'vue-router';

import MasterLayout from './views/Layout/Layout';
import Dashboard from './views/Dashboard/Dashboard';
import Settings from './views/Settings/Settings';
import ErrorPage from './views/ErrorPage/ErrorPage';

Vue.use(VueRouter);

const Router = new VueRouter({
  //mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard },
    { path: '/settings', component: Settings },
    { path: "*", component: ErrorPage }
  ]
});

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  Router
}, MasterLayout)).$mount('#app');
