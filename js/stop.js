$(document).ready(function ()
{
  $('.start').click(function (event)
  {
    /* Act on the event */
    $('.box').stop().slideToggle(3000); // stop : 停止目前動畫,再去完成下一個動畫
  });
});