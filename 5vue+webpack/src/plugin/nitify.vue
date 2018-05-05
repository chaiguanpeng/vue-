<template>
  <div>
     <div class="notify">{{val}}</div>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                val:'我太帅拉'
            }
        },
        methods: {
            
        },
        computed:{

        },
        components:{

        }
    }
</script>

<style scoped>
    .notify{
        width: 100px;
        height: 40px;
        background: rgba(0,0,0,.45);
        border-radius: 15px;
        text-align: center;
        line-height: 40px;
        color: red;
    }
</style>
