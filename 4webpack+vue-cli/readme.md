## 模块
- node模块的规范commonjs
- cmd(sea.js) amd(require.js) 一种库
- umd 为了做兼容处理
- esmodule(es6)
    - 如何定义模块  (一个js就是一个模块)
    - 如何导出模块  (export) 
    - 如何使用模块  (import)
## 先下载webpack
```
    npm init -y
    npm install webpack --sav-dev
```
> 安装webpack或者less最好不要安装全局，否则可能导致webpack的版本差异
- 在package.json中配置一个脚本,这个脚本用的命令是webpack.会去当前的node_modules下找bin对应的webpack名字让其执行,执行的就是webpack/bin/webpack.js，需要在当前目录下有个名字叫webpack.config.js的文件
。我们通过npm run dev执行的目录是当前文件目录,所以会去当前目录下查找