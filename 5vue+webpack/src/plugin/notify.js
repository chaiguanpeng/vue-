import model from "./nitify.vue";
let notify = {
    // 需要在此对象中拥有一个install方法

};
notify.install = function(Vue, options = { delay: 3000 }) {
    Vue.prototype.$notify = function(message, opt = {}) {
        if (notify.el) return;
        options = {...options, ...opt } //用自己调用插件时传递过来的属性覆盖掉默认设置好的
        let v = Vue.extend(model) //返回的是一个构造函数的子类 ,参数是包含组建选项的对象
        let vm = new v;
        let oDiv = document.createElement('div'); //创建一个div，将实例挂载到元素上
        vm.$mount(oDiv);
        vm.val = message;
        document.body.appendChild(vm.$el);
        notify.el = vm.$el;
        setTimeout(() => {
            document.body.removeChild(vm.$el); //将实例的元素删除掉
            notify.el = null;
        }, options.delay);

    }

};
// 导出这个包含install的对象，如果使用Vue.use就会调用这个install 方法
export default notify