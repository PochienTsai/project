$(document).ready(function ()
{

  $('.menu li').click(function (event)
  {
    /* Act on the event */
    // $(this).addClass('active');
    $(this).toggleClass('active'); // this : 指定點擊的元素本身才做改變, toggleClass: addClass + removeClass; 
  });
});