//"use strict"; // 使用严格模式的js语法

import Vue from 'vue'
import axios from 'axios'
// qs 模块就相当于对数据进行序列化操作，如JSON.parse() 一样
import Qs from 'qs'
// import env from './../env'
import { Message } from 'element-ui'

const mock = false;
if(mock){
  // import 是预编译加载，  require是只有执行的时候才会加载
  require('./../mock/api');
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

let config = {
    transformRequest: [function(data) {
        data = Qs.stringify(data);
        return data;  // 将请求的数据有json对象转换成字符串
    }],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

const _axios = axios.create(config) // 创建axios实例

// interceptors 拦击器  接口错误拦截
_axios.interceptors.response.use(function(response){
  let res = response.data; // response.data 才是返回回来的值
  if(res.status == 0){
    return res.data;
  }else if (res.status == 10){
    window.location.href = '/#/login';  // 跳转到登录界面
  }else{
    Message.error(res.msg);
  }
})
// 这段代码就是运用了vue中的install方法将 _axios 添加成为vue 的全局实例方法
Plugin.install = function (Vue){
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get(){
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        }
    })
}

Vue.use(Plugin)

export default Plugin;


