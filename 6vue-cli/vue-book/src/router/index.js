import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from "../components/Home.vue";
import Collect from "../components/Collect.vue";
import Add from "../components/Add.vue";
import List from "../components/List.vue";
import Detail from "../components/Detail.vue";
export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home,meta:{keepAlive:true} }, //this.$route.meta.keepAlive
        { path: '/collect', component: Collect },
        { path: '/add', component: Add },
        { path: '/list', component: List },
        //  /detail/1   {bid:1}  路径参数  必须有但是可以随机
        { path: '/detail/:bid', component: Detail,name:'detail' },
        { path: '*', component: Home }
    ]
})
