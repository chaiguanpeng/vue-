import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000";
// 增加默认的请求路径


//获取轮播图数据,返回的是一个promise对象
export let getSliders = () => {
    return axios.get('/sliders')
}