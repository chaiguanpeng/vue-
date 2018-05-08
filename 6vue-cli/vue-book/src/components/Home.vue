<template>
  <div>
    <MHeader>首页</MHeader>  
    <div class="content">
       <Swiper></Swiper>
    </div>
  </div>
</template>

<script>



// 1.引入组件 2.注册组件 3.使用组件
import MHeader from "../base/MHeader.vue";
import Swiper from "../base/Swiper.vue";

// 请求端口3000
import { getSliders } from '../api';

export default {
  async created () {
    // 给data起别名,对象中的属性名字必须和得到的结果相同
    let {data:sliders}=await getSliders();
    // console.log(sliders);
    this.sliders=sliders;
  },
  data () {
    return {
      sliders:[]
    };
  },

  components: {
    MHeader,
    Swiper
  },

  computed: {},
  methods: {}
}

</script>
<style scoped>
</style>