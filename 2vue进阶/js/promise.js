// let a='';
// function buy(callback) {
//     setTimeout(()=>{
//         let a='蘑菇';
//         callback(a);
//     },2000)
// }
// buy(function cookie(val) {
//     console.log(val);
// });
//回调函数 将后续的处理逻辑传入到当前要做的事，事情做好后调用此函数


// promise 解决回调问题的.promise三个状态:成功态、失败态、等待
/*
    1.resolve代表的是转向成功态
    2.reject代表的是转向失败态   resolve和reject均是函数
    3.promise的实例有一个then方法,then方法中有两个参数
*/
// 例1
// let p = new Promise((resolve,reject)=>{
//     setTimeout(function () {
//         let a="蘑菇";
//         reject(a);
//     })
// });
// p.then((data)=>{
//     console.log(data);},(err)=>{console.log('err')});
// 例2 买不买包
function buyPack() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve('买')
            }else {
                reject('不买')
            }
        },Math.random()*1000)
    })
}
buyPack().then(function (data) {
    console.log(data);
},function (data) {
    console.log(data);
})
