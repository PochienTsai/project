$(document).ready(function ()
{
  $('.dropdown').click(function (e)
  {
    /* Act on the event */
    e.preventDefault();
    $('.dropdown').toggleClass('active'); // add class active
    $('.dropdown-open').slideToggle(); // show dropdown-open
  });
});