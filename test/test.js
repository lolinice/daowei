require("../tools/db")
var Item = require("../models/Item")

 Item.create({
 serviceIndex:"JIANYI"
 },function (err) {
 if (!err){
 console.log("插入成功");
 }
 })

/*
Item.find({},function (err,data) {
  console.log(data);
})*/
