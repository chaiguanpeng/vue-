<template>
 <div class="footer">
    <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span> 首页</span>
    </router-link>
     <router-link to="/list">
        <i class="iconfont icon-liebiaoyemian"></i>
         <span>列表</span>
     </router-link>
     <router-link to="/collect">
        <i class="iconfont icon-collect-active"></i>
        <span> 购物车</span>
    </router-link>
     <router-link to="/add">
        <i class="iconfont icon-add"></i>
        <span>添加</span>
     </router-link>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>
<style scoped lang="less">
    .footer{
        position: fixed;
        left: 0;
        bottom:0;
        width: 100%;
        height: 50px;
        display: flex;
        a{
            display: flex;
            flex-direction: column;
            flex:1;
            align-items: center;
            justify-content: center;
            color: yellowgreen;
        }
        a.router-link-active{
            color: red;
        }
        // router-link-exact-active router-link-active
    }

</style>
