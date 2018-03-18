$('.showpage>a').click(function () {

  var index = $(this).index()
  /*onsole.log(index)*/
  $('.showpage>a').removeClass('act')
  $(this).addClass('act')
  page = index + 1
  acss(page)
  $.get('/comment?page='+page,function (data) {
    $('.conments').html(template("pinglun",{data:data}))
  })
})

// 上下键点击执行翻页
$('.up').click(function () {
  scrollPage('true')
})

$('.down').click(function () {
  scrollPage('false')
})

// 上下翻页函数
function scrollPage(type) {
  if (type === 'true') {
    page--
    acss(page)
    var index = page - 1
    $('.showpage>a').removeClass('act')
    $('.showpage>a').each(function(){
      $('.showpage>a')[index].className = 'act'
    })
    $.get('/comment?page=' + page, function (data) {
      $('.conments').html(template('comment', {data: data}))
      console.log(data)
    })
  }
  if (type === 'false') {
    $('.up').removeClass('nopage')
    page++
    acss(page)
    var index = page - 1
    $('.showpage>a').removeClass('act')
    $('.showpage>a').each(function(){
      $('.showpage>a')[index].className = 'act'
    })
    $.get('/comment?page='+page,function (data) {
      $('.conments').html(template("pinglun",{data:data}))
    })
  }
}
// 边界切换样式
function acss () {
  if(page <= 1){
    $('.up').addClass('nopage') //nopage 灰色
    page = 1
  }
  if(page>=9){
    $('.down').addClass('nopage')
    page = 9
  }
  else{$('.down').removeClass('nopage')}
}