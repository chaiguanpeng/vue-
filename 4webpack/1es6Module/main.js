/*如果是第三方模块不需要加./   如果是文件模块需要加./
 *在另一个文件中将内容结构出来即可使用
 *import拥有声明功能,下面不能再声明一样的
 *import放到页面的顶部
 */

//  1、第一种方式(import引入)
import { str1, str2, a } from './a.js';
console.log(str1 + str2);
a();
//  2、第二种方式(import引入)
// import * as b from './a.js';
// console.log(b.str1, b.str2);
// b.a()
// 3、第三种方式(import引入) xxx代表的是default后的结果
// import xxx from './b.js';
// console.log(xxx);