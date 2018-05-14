// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//在进入路由之前 每一次都会执行此方法,全局钩子，拦截功能
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title;
  if(to.path==='/list'){
    // next({path:'/add'});
    next();
  }else {
    next();
  }

});

Vue.config.productionTip = false


// 导入并使用swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);
//图片懒加载
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img5.imgtn.bdimg.com/it/u=3344218317,1026246252&fm=27&gp=0.jpg',
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif',
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
