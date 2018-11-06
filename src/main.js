// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueDarkMode from "vuedarkmode";
import 'normalize.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import axios from "axios";

Vue.use(VueDarkMode);
Vue.config.productionTip = false;

//TOFIX
axios.defaults.headers.common["X-Session-Token"] = "testtoken";

Vue.prototype.$http = axios;
Vue.prototype.$APIProtocol = "http://";
Vue.prototype.$APIIP = "127.0.0.1";
Vue.prototype.$APIPrefix = "/api/v1/";
Vue.prototype.$APIPort = 8000;
Vue.prototype.$APIUrl = Vue.prototype.$APIProtocol + Vue.prototype.$APIIP + ":" + Vue.prototype.$APIPort + Vue.prototype.$APIPrefix;


router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
