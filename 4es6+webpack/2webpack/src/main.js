let str = require('./a.js');
import xxx from './b.js';
console.log(str);
console.log(xxx);

let obj = { schllo: 'zfpx' };
let obj1 = { age: '8' };
let newObj = {...obj, ...obj1 }; //es7语法
console.log(newObj)

import "./index.css"; //引入css
import "./style.less"; //引入less

// 在js中引入图片需要import, 或者写一个线上路径(httpXXXX)

import page from './2.jpg';
console.log(page); //page就是打包后图片的路径
let img = new Image();
img.src = page; //写了个字符串 webpack 不会进行查找
document.body.appendChild(img);