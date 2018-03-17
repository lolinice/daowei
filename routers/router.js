/**
 * Created by HGG on 2018/3/16.
 */
//1.引入express
var express = require('express')
//2.通过express.Router()返回一个Router对象
var router = express.Router()

//操作首页对应的Models
var Item = require('../models/Item')

//服务商页面的Model
var User = require("../models/User")


router.get('/shouye',function (req,res) {
  Item.find({},function (err,list) {
    if (!err){
      res.send({list:list})
    }
  })
})


router.get('/fuwu',function (req,res) {
  User.find({},function (err,sever) {
    if(!err){
      res.send({sever:sever})
    }
  })
})



//3.在router上设置路由
/*
router.get('/shouye',function (req,res) {

})
*/




//4.将路由向外暴露
module.exports=router