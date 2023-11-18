$(document).ready(function ()
{
  $('.cart > li > a').click(function (event)
  {
    event.preventDefault();
    $(this).parent().siblings().find('ul').slideUp(); // 先關閉其他的選單
    $(this).parent().find('ul').slideToggle(); // 再切換當前選單
  });
});