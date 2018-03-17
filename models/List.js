//引入mongoose模块 -->List.js约束单项详情页
var mongoose = require('mongoose')

//获取Schema构造函数
var Schema = mongoose.Schema

//通过Schema构造函数来创建一个模式对象xqSchemam
var xqSchema = new Schema({
  id:{type:String,unique:true},
  title:String,
  name:String,
  desc:String,
  price:Number,
  oldPrice:Number,
  orderCount:Number,
  soldCount:Number,
  commentCount:Number,
  accept:String,
  praise:String,
  imgUrl:String,
  company:String,
  profile:String,
},{collection:'lists'})

//暴露模型对象 --> list对应数据库集合的名字
module.exports=mongoose.model('list',xqSchema)