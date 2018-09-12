// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import Axios from 'axios';
Vue.prototype.$axios = Axios;




/*
* 1、引入vuex
* 2、创建store
* 3、配置store中的数据
* 4、将store关联vuex
* */
import Vuex from 'vuex'
Vue.use(Vuex);
import numModule from "./modules/numModule"
let store = new Vuex.Store({
  modules:{
    numModule:numModule
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
