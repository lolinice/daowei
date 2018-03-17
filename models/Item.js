//引入mongoose模块 -->Item.js约束首页
var mongoose = require('mongoose')

//获取Schema构造函数
var Schema = mongoose.Schema
//通过Schema来创建一个模式对象isySchema
var sySchema = new Schema({
  serviceIndex:{type:String,unique:true},
  serviceType:{type:Array,unique:true},
  shopList:{type:Array,unique:true}

})

//暴露模型对象
module.exports=mongoose.model("shouye",sySchema)