<template>
  <div id="app">
    num数据 {{appShowNum}}
    <button @click="change">改变数据</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    appShowNum(){
      return this.$store.getters.getNum;
    }
  },
  methods:{
    change(){
      //完美套路
      this.$store.dispatch('addNumByServerRate',{num:5})




      //一般写代码都不直接提交，除非明知是同步操作，没有后台请求
      // this.$store.commit('addNum',{num:5})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
