<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
       <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="hot in hotBooks">
              <img :src="hot.bookCover" alt="">
              {{hot.bookName}}
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>



// 1.引入组件 2.注册组件 3.使用组件
import MHeader from "../base/MHeader.vue";
import Swiper from "../base/Swiper.vue";

// 请求端口3000
import { getSliders,getHotBook } from '../api';

export default {
   created () {
     this.getSlider(); //获取轮播图
     this.getHot();     //获取图书
   },
  data () {
    return {
      sliders:[],
      hotBooks:[]
    };
  },

  components: {
    MHeader,
    Swiper
  },
  computed: {},
  methods: {
    async getHot(){
      this.hotBooks=await getHotBook();
    },
    async getSlider(){
      this.sliders=await getSliders();
    }

  }
}

</script>
<style scoped lang="less">
  .container{
    width: 90%;
    margin: 0 auto;
    h3{
      color: #999;
      padding: 5px 0;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 10px;
     li{
       width:50%;
       text-align: center;
        img{
          width: 100%;
        }
     }
    }
  }
</style>
