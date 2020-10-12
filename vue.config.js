module.exports = {
  lintOnSave: false,
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{ // 通过这个就可以吧/api在真实请求中去掉
          '/api':''
        }
      }
    }
  },
}