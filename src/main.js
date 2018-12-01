// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueDarkMode from "vuedarkmode";
import 'normalize.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store';

Vue.use(VueDarkMode);
Vue.config.productionTip = false;

var config = {
  refreshRate: 5000
}

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


setInterval(function(){
  console.log("Refreshing informations")
  store.updateAll()
}, config.refreshRate)