let baseURL;
// process.env.NODE_ENV 获取node.js的环境变量  当前这个环境是用在csrf跨域和JSONP跨域的情况下
switch(process.env.NODE_ENV){
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';  // 如果在新增一个自定义的环境时 应该创建一个.env.环境名 文件  在里面写 NODE_ENV = '环境名'
        break;
    case 'production':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}

export default {
    baseURL
}