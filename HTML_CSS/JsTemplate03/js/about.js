$(document).ready(function () {
  $(".strategic-head").click(function () {
    if ($('.strategic-body').is(':visible')) {
      $(".strategic-body").slideUp(300);
      $(".plusminus").html('<img src="img/img_plus.png" alt="">');
    }
    if ($(this).next(".strategic-body").is(':visible')) {
      $(this).next(".strategic-body").slideUp(300);
      $(this).children(".plusminus").html('<img src="img/img_plus.png" alt="">');
    } else {
      $(this).next(".strategic-body").slideDown(300);
      $(this).children(".plusminus").html('<img src="img/img_minus.png" alt="">');
    }
  });

  $(".strategic > div").heightLine({
    fontSizeCheck: true
    });
});
