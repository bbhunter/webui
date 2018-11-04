import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login';
import index from '@/components/index';

import ips from '@/components/ips';
import domains from '@/components/domains';
import ports from '@/components/ports';
import uris from '@/components/uris';

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
    {
      path: '/domains',
      name: 'domains',
      component: domains,
      meta: {
        title: "Netm4ul - IP List",
      },
    },
    {
      path: '/ports',
      name: 'ports',
      component: ports,
      meta: {
        title: "Netm4ul - IP List",
      },
    },
    {
      path: '/uris',
      name: 'uris',
      component: uris,
      meta: {
        title: "Netm4ul - IP List",
      },
    },
  ],
});
