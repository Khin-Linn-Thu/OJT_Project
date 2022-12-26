$(document).ready(function(){
	
	$('.product-tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.product-tabs li').removeClass('current');
		$('.product-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

  $('.menu').on('click', function () {
      var rightVal = 0;
      if ($(this).hasClass('active')) {
        rightVal = -700;
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }

      $('.gnav').stop().animate({
        right: rightVal
      }, 200);
  });

})