// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueDarkMode from "vuedarkmode";
import 'normalize.css';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(VueDarkMode);
Vue.config.productionTip = false;
Vue.prototype.$APIPrefix = '/api/v1/';

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

var store = {
  debug: true,
  state: {
    nodes: []
  },
  setNodes(newValue) {
    if (this.debug) console.log('setNodes triggered with', newValue)
    this.state.nodes = newValue
  },
  getNodes(nid) {
    if (this.debug) console.log('getNodes triggered with', nid)
    return this.state.nodes[nid]
  },
  clearNodes() {
    if (this.debug) console.log('clearNodes triggered')
    this.state.nodes = ''
  }
}

export default store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
