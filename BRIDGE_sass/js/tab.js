$('.tab-show:first .ft-ttl').addClass('current');
$('.tab-show .contact-blk').hide();
$('.tab-show:first .contact-blk').show();
$('.ft-ttl').click(function(){
  $('.ft-ttl').removeClass('current');
  $('.tab-show .contact-blk').removeClass('current').hide();
  $(this).addClass('current');
  var tab_id = $(this).attr('data-tab');
	$("#"+tab_id).addClass('current').show();
});
