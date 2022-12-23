$(document).ready(function () {
  $('.menu').on('click', function () {
    var leftVal = 0;
    if ($(this).hasClass('active')) {
      leftVal = -800;
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

    $('.gnav').stop().animate({
      left: leftVal
    }, 200);
  });
});