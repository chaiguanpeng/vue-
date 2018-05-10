<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Loading v-if="loading">疯狂加载中</Loading>
      <template v-else>
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
      </template>
    </div>
  </div>
</template>

<script>



// 1.引入组件 2.注册组件 3.使用组件
import MHeader from "../base/MHeader.vue";
import Swiper from "../base/Swiper.vue";
import {getAll} from "../api";
import Loading from "../base/Loading.vue";


export default {
   created () {
     this.getData();


   },
  data () {
    return {
      sliders:[],
      hotBooks:[],
      loading:true
    };
  },

  components: {
    MHeader,
    Swiper,
    Loading
  },
  computed: {},
  methods: {

   async getData(){
     let [sliders,hotBooks]= await getAll();
     this.sliders=sliders;
     this.hotBooks=hotBooks;
     //轮播图和热门图书已完成
      this.loading=false;
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
