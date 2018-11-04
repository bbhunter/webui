import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login';
import index from '@/components/index';
import ips from '@/components/ips';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: "Netm4ul - Dashboard",
      },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/ips',
      name: 'ips',
      component: ips,
      meta: {
        title: "Netm4ul - IP List",
      },
    },
  ],
});
