
//vuex 平级组件交互,找共同的父级解决,跨组件交互(enentBus混乱,依靠发布订阅)
//vuex主要解决了flux redux,vuex只能在vuex中使用(单独为vue开发)
//vuex为了大型项目，主要是(状态)管理,将数据统一管理

import Vue from 'vue';
import App from './App.vue';

import store from './store/index';
new Vue({
  el:"#app",
  ...App,
  store  //store被注册到实例上 所有组件都会有一个属性 this.$store

});
