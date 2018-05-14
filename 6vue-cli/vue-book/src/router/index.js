import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
// 动态加载路由
export default new Router({
    // mode:'history',
    routes: [
        { path: '/',
          redirect: '/home'
        },
        { path: '/home',
          component: ()=>import('../components/Home.vue'),
          meta:{keepAlive:true,title:'首页'}
        }, //this.$route.meta.keepAlive
        { path: '/collect',
          component: ()=>import('../components/Collect.vue'),
          meta:{title:'收藏'}
        },
        { path: '/add',
          component: ()=>import('../components/Add.vue'),
          meta:{title:'添加'}
        },
        { path: '/list',
          component: ()=>import('../components/List.vue'),
          meta:{title:'列表页'}
        },
        //  /detail/1   {bid:1}  路径参数  必须有但是可以随机
        { path: '/detail/:bid',
          component: ()=>import('../components/Detail.vue'),
          name:'detail'
        },
        { path: '*',
          redirect: '/home'
        }
    ]
})
