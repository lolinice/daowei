/*
  定义一个模块，专门用来负责连接数据库
*/

//引入mongoose模块
var mongoose = require('mongoose')
//连接数据库
mongoose.connect("mongodb://127.0.0.1/daowei")
//监听数据库连接状态
mongoose.connection.on("open",function () {
  console.log("数据库连接成功拉`");
})