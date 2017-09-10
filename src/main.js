import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'vue-material/dist/vue-material.css';
import './MainCSS.scss';

import Klaus from './Klaus.vue';
import Login from './Login.vue';
import Search from './Search.vue';
import Navigation from './Navigation.vue';
import Footer from './Footer.vue';

Vue.use(BootstrapVue);
Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.component('navigation', Navigation);
Vue.component('footer-bar', Footer);

const routes = [{
  path: '/',
  component: Login,
}, {
  path: '/Klaus',
  name: 'klaus',
  component: Klaus,
  children:[{
    path: '/',
    name: 'search',
    component: Search,
  }],
}];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  el: '#app',
});
