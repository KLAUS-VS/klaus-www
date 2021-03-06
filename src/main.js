import Vue from 'vue';
//import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './Login.vue';
import Klaus from './Klaus.vue';
import Exams from './Exams.vue';


Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Login,
}, {
  path: '/Klaus',
  name: 'klaus',
  component: Klaus,
  children:[{
    path: '/',
    name: 'exams',
    component: Exams,
  }],
}];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  el: '#app',
  //render: h => h(Login),
});
