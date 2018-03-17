/**
 * Created by HGG on 2018/3/16.
 */
//1.引入express
var express = require('express')
//2.通过express.Router()返回一个Router对象
var router = express.Router()

//操作首页对应的Models
var Item = require('../models/Item')

//服务商页面的Models
var User = require("../models/User")

//操作详情页(外)的Models
var List = require('../models/List')
//操作详情页(评论)的Models
var Comment = require('../models/Comment')



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

/*
 Model.find(conditions, [projection], [options], [callback])
 查询所有符合条件的文档，会返回一个数组 docs（回调函数的第二个参数）
 callback 参数-->err错误对象 和 doc(s)
 */


router.get('/xqing',function (req,res) {
  List.find({},function (err,docs) {
    if(!err){
      res.send({docs:docs})
    }
  })
})

/*具体评论*/
/*router.get('/comment',function (req,res) {
  Comment.find({},function (err,coms) {
    if(!err){
      res.send({coms:coms})
    }
  })
})*/

/*分页*/
router.get('/comment',function (req,res) {
  Comment.find({},function (err,coms) {
    if(!err){
      res.send({coms:coms})
    }
  })
})


//4.将路由向外暴露
module.exports=router