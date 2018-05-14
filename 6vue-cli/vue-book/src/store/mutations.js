import * as Types from './mutations-type';
const mutations = {
  [Types.ADD_CART](state,book){

    //book是添加的一本书,如果有这本书 累加的是数量,如果没有数量为1 放到cartList中
    let product = state.cartList.find(item=>item.bookId===book.bookId);
    if(product){
      product.bookCount+=1; //还要更新掉原数组,否则不会刷新
       state.cartList = [...state.cartList];
    }else {
      book.bookCount=1;
      //将原有数据改变 或者可以替换
      //用新数组替换掉老数组
      state.cartList = [...state.cartList,book] //或者 state.cartList.push(book)
    }
  }
};
export default mutations;
