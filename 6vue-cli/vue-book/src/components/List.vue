<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content">
      <ul>
        <li v-for="book in books">
          <img :src="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <button @click="remove(book.bookId)">删除</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getBooks,removeBook} from '../api';
  import MHeader from "../base/MHeader.vue";

export default {
  data () {
    return {
      books:[]
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
    async getData(){
      this.books = await getBooks();
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
</style>
