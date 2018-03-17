//引入mongoose模块 -->Comment.js约束详情评论部分
var mongoose = require('mongoose')

//获取Schema构造函数
var Schema = mongoose.Schema

//通过Schema来创建一个模式对象comSchema
var comSchema = new Schema({
  iconUrl:String,
  area:String,
  city:String,
  comment:String,
  createtime:Number,
  nick:String,
  star:Number
})

//暴露模型对象
module.exports=mongoose.model('comment',comSchema)