<template>
  <div>
    <MHeader>购物车</MHeader>
    <ul class="content">
      <li v-for="l in cartList">
        <img :src="l.bookCover" alt="">
        <h3>{{l.bookName}}</h3>
        <button>-</button>{{l.bookCount}}<button>+</button><button>删除</button>
        <p>小计: {{l.bookPrice * l.bookCount}}</p>
      </li>
      <li>
        共{{count}}本
      </li>
    </ul>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  // 辅助函数(语法糖)
  import {mapState} from 'vuex';
  import {mapGetters} from 'vuex';
  console.log(mapState(['cartList']));
export default {
  data () {
    return {
    };
  },

  components: {
    MHeader
  },

  computed: {
    ...mapState(['cartList']),
    ...mapGetters(['count'])
    //等价于下面写法
    // cartList(){
    //   // console.log(this.$store.state.cartList);
    //   return this.$store.state.cartList
    // }
  },


  methods: {}
}

</script>
<style scoped>
</style>
