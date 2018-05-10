<template>
  <div>
    <MHeader>添加</MHeader>
    <div class="content">
      <ul>
        <li>
          <label for="bookName">书的名称</label>
          <input type="text" v-model="book.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">书的信息</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">书的信息</label>
          <input type="text" v-model.number="book.bookPrice" id="bookPrice">
        </li>
        <li>
          <label for="bookCover">书的封面</label>
          <input type="text" v-model="book.bookCover" id="bookCover">
        </li>
        <li>
          <button @click="add">添加</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from "../base/MHeader.vue";
  import {addBook} from '../api';
export default {
  data () {
    return {
      book:{}
    };
  },

  components: {
    MHeader
  },

  computed: {},

  methods: {
    async add(){
      await addBook(this.book);
      this.$router.push('/list')
    }
  }
}

</script>
<style scoped lang="less">
  ul{
    margin: 50px 20px 0 20px;
    li{
      label{
        display: block;
        font-size: 25px;
      }
      input{
        height: 25px;
        margin: 10px 0;
      }
      button{
        display: block;
        width: 60px;
        height: 30px;
        color: #fff;
        background: orange;
        border: none;
        border-radius: 8px;
        outline: none;
      }
    }
  }
</style>
