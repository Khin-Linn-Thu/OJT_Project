$(document).ready(function () {
  $('.menu').on('click', function () {
    var rightVal = 0;
    if ($(this).hasClass('active')) {
      rightVal = -800;
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

    $('.gnav').stop().animate({
      right: rightVal
    }, 200);
  });
});