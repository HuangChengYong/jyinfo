import Vue from 'vue'
import App from './App'
import router from './router'
import 'assets/js/bootstrap.min.js'
import 'assets/css/bootstrap.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import 'lib-flexible/flexible'
import 'assets/utils/rem.js'

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
