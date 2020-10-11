import Mock from 'mockjs'

// 第一个是请求路径  第二个是返回数据
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
      "id|1-3": 0,
      "username": "admin",
      "email": "admin@51purse.com",
      "phone": null,
      "role": 0,
      "createTime": 1479048325000,
      "updateTime": 1479048325000
    }
})