<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content">
      <ul>
        <router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" tag="li">
          <img :src="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
      <div @click="more" class="more">加载更多</div>
    </div>
  </div>
</template>

<script>
  import {pagination,removeBook} from '../api';
  import MHeader from "../base/MHeader.vue";

export default {
  data () {
    return {
      //offset代表的是偏移量 hasMore代表是否有更多
      books:[],
      offset:0,
      hasMore:true,
      isLoading:false
    };
  },
  created(){
    this.getData();
  },
  components: {
    MHeader
  },
  computed: {

  },


  methods: {
    more(){
      this.getData();
    },
    async getData(){
      if(this.hasMore && !this.isLoading){ //有更多的时候获取数据
        this.isLoading = true;
        let {hasMore,books} = await pagination(this.offset);
        this.books = [...this.books,...books];   //获取的书放到books属性上
        this.hasMore = hasMore;
        this.offset = this.books.length;
        this.isLoading = false; //加载完毕
      }

    },
    async remove(id){   //删除某一项
      await removeBook(id);

      // 要删除前台数据
      this.books = this.books.filter(item=> item.bookId!==id);
      console.log(id,this.books);
    }
  }
}

</script>
<style scoped>
  .content ul{
    padding: 10px;
  }
  .content ul li{
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
  }
  .content ul li img{
    width: 130px;
    height: 150px;
  }
  .content h4{
    font-size: 20px;
    line-height: 35px;
  }
  .content p{
    color: #2a2a2a;
    line-height: 25px;
  }
  .content b{
    color: red;
  }
  .content button{
    display: block;
    width: 60px;
    height: 30px;
    color: #fff;
    background: orange;
    border: none;
    border-radius: 8px;
    outline: none;
  }
  .more{
    margin: 10px;
    background: #2ffedd;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
  }
</style>
