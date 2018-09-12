export default {
  state:{
    num:30
  },
  //取数据
  getters:{
    getNum(state){
      return state.num
    }
  },
  //操作数据 mutations只能放同步代码
  mutations:{
    addNum(state,payload){
      state.num+=payload.num; //调用者传递增加的数量
    }
  },
  //在行为可以存在异步操作，但是最终还是通知mutations
  actions:{
    addNumByServerRate(store,payload){
      //这里有异步操作，可以记录快照
      setTimeout(function () {
        //后台的比例是2
        let rate = 2;
        store.commit('addNum',{num:payload.num *rate})
      },1000)
    }
  }
}
