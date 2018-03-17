//1.引入express
var express = require('express')
//2.定义app
var app = express()
//3.配置静态资源
app.use(express.static("public"))
require('./tools/db')

//使路由生效
app.use(require('./routers/router'))

//操作首页对应的Models
//var Item = require('./models/Item')

//操作服务商页的Models
//var User = require('./models/User')

/*
app.get('/shouye',function (req,res) {
  Item.find({},function (err,list) {
    if (!err){
      res.send({list:list})
    }
  })
})
*/

/*
 Model.find(conditions, [projection], [options], [callback])
 查询所有符合条件的文档，会返回一个数组 list（回调函数的第二个参数）
 callback 参数-->err 错误对象 doc(s)
*/

/*
app.get('/fuwu',function (req,res) {
  User.find({},function (err,sever) {
    if(!err){
      res.send({sever:sever})
    }
  })
})
*/




//4.监听端口号并启动服务器
app.listen(5000,function () {
  console.log("服务器启动成功拉~");
})

