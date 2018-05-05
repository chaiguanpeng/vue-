/*这样直接引用vue  引用的并不是vue.js,引用的是vue的runtime（只支持render,不知道template）
 *vue = compiler(编译模板) + runtime(运行)
 *compiler 只有6k
 *
 */

import Vue from 'vue';
import App from './App.vue';
import router from "./router"


import notify from "./plugin/notify.js" //使用带有install的对象
Vue.use(notify, {
    delay: 2000
});
new Vue({
    el: '#app',
    router,
    //render函数的作用将虚拟dom渲染成真实的dom  createElement返回的是虚拟dom
    render: h => h(App)







    // render: function(createElement) {
    //最基本用法
    // return createElement('h1', [
    //     'hello',
    //     createElement('span', '一则头条')
    // ])
    // }
})