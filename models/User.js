//引入mongoose模块 --User.js约束服务商 service
var mongoose = require('mongoose')

//获取Schema构造函数
var Schema = mongoose.Schema

//通过Schema来创建一个模式对象
var fwSchema = new Schema({
  id:{type:String,unique:true},
  title:{type:String},
  orderCount:{type:Number},
  positiveRate:{type:String},
  imgUrl:{type:String}

})

//暴露模型对象
module.exports = mongoose.model('service',fwSchema)