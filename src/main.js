import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
// import env from './env'

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/'; // 当前是接口代理的方式
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// interceptors 拦击器  接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data; // response.data 才是返回回来的值
  if(res.status == 0){
    return res.data;
  }else if (res.status == 10){
    window.location.href = '/#/login';  // 跳转到登录界面
  }else{
    alert(res.msg);
  }
})

Vue.prototype.axios = axios;//this.$axios使用
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
