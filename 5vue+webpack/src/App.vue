<template>
  <div>
      {{msg}}
      <button @click="show">notify</button>
      <!-- <router-view></router-view> -->
  </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello world'
            }
        },
        methods: {
            show(){
                this.$notify('我很丑',{delay:100000});
            }
        },
        computed:{

        },
        components:{

        }
    }
</script>

<style scoped>

</style>
