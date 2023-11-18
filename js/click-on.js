$(document).ready(function ()
{

  $('.wrap').on('click', 'h1', function (e)  
  {
    //監聽事件(只要位於wrap內的h1被點擊就會觸發,不管是jq新增的還是原本就有的) => 較click建議使用on事件
    e.preventDefault();
    alert('You clicked on the heading!');
  });
  // $('h1').click(function (e)
  // {
  //   //監聽事件（只有原本就有的h1被點擊才會觸發）
  //   alert('You clicked on the heading!');
  // });
  $('.box1').html('<h1> 用JQuery改變內容 </h1>');
});