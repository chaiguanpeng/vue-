// webpack必须采用common.js写法
let path = require('path'); //专门处理路径用的,以当前路径解析出一个绝对路径
console.log(path.resolve('./dist'));

module.exports = {
    entry: {
        main: "./src/main.js",
        main2: "./src/main2.js"
    }, //打包的入口文件,webpack会自动查找相关的依赖打包
    output: {
        filename: "[name].js", //打包后的名字
        path: path.resolve("./dist") //必须是一个绝对路径
    }
};