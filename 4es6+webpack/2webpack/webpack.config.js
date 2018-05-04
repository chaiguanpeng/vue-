// webpack必须采用commonjs写法
let path = require("path"); // 专门处理路径用的,以当前路径解析出一个绝对路径
console.log(path.resolve("./dist"));
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/main.js", // 打包的入口文件，webpack会自动查找相关的依赖进行打包
    output: {
        filename: "build.js", // 打包后的名字
        path: path.resolve("./dist") //必须是一个绝对路径
    },
    // 模块的解析规则
    // - js 匹配所有的js 用babel-loader转译 排除掉node_modules
    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
            //use时从右往左写
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //配置less     
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //解析图片 转化base64只在8192字节以下转化。其它情况下输出图片
            { test: /\.(jpg|png|gif)$/, use: "url-loader?limit=8192" },
            // 图标字体 svg woff
            { test: /\.(svg|woff|eot)$/, use: "url-loader" }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html" //使用的模板
                // filename: 'login.html' //产出的文件名字
        })
    ]
};