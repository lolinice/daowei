var variable = {
  areaInfo: '', // 数据集
  showNum: 5 // 每页显示数
}

// @nowPage 当前页
// @showNum 每页显示数
function page(nowPage,showNum){
  nowPage = (nowPage == null) ? 1 : nowPage; // 当前页
  if (showNum != null) variable.showNum = showNum; // 每页显示数

  var zNum = variable.areaInfo.length; // 总数据数
  var zPage = Math.ceil(zNum / variable.showNum); // 总页数
  var start = (nowPage - 1) * variable.showNum; // 数据开始点
  var HTML = '', // 数据HTML
    PAGE = ''; // 页码HTML
  for (var i = start ; i < nowPage * variable.showNum && i < zNum; i++){
    HTML += '<ul><li id="'+ i +'">'+ variable.areaInfo[i].title +'</li><li>地址：'+ variable.areaInfo[i].address +'</li><li>面积：'+ variable.areaInfo[i].area +'</li><li>等级：'+ variable.areaInfo[i].level +'星</li>';
    if (variable.area == 'C1'){
      if (variable.areaInfo[i].c1_cost == null || variable.areaInfo[i].c1_cost == 0) variable.areaInfo[i].c1_cost = '3830.00';
    }else {
      if (variable.areaInfo[i].c2_cost == null || variable.areaInfo[i].c2_cost == 0) variable.areaInfo[i].c2_cost = '3030.00';
    }
    HTML += '<li class="__CONFIRM"><a href="javascript:;" onclick="set_place('+ variable.areaInfo[i].id +')" style="color:#FFFFFF">确定</a></li><li style="position:absolute;top:20px;right:25px;padding:2px 5px;">';
    HTML += '<a href="/ds/Home/Student/place_map/license/'+ variable.area +'/id/'+ variable.areaInfo[i].id +'" style="color:#999">查看位置</a></li></ul>';
  }
  $('.AreaInfo').html(HTML);

  if (nowPage > 1) PAGE += '<span onclick="page(' + (nowPage-1) + ')">上一页</span>';
  for (i = 1 ; i <= zPage ; i++){
    if (nowPage == i){
      PAGE += '<span onclick="page('+ i +')" class="nowPage">'+ i +'</span>';
    }else{
      PAGE += '<span onclick="page('+ i +')">'+ i +'</span>';
    }
  }
  if (nowPage < zPage) PAGE += '<span onclick="page(' + (nowPage+1) + ')">下一页</span>';
  $('.next_page').html(PAGE);
}