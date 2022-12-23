$(document).ready(function () {
    $.fn.visible = function (partial) {
        var $t = $(this),
          $w = $(window),
          viewTop = $w.scrollTop(),
          viewBottom = viewTop + $w.height(),
          _top = $t.offset().top,
          _bottom = _top + $t.height(),
          compareTop = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
      }
    
    $(window).on('scroll',function(){
        rotateBottom();
        rotateTop();
    });

    function rotateTop() {
        $('.fan1-sec').each(function(i){
        if ($(this).visible()) {
            $('.fan1').addClass('active');
        }
        });
    }
    function rotateBottom() {
        $('.fan2-sec').each(function(i){
            if ($(this).visible()) {
                $('.fan2').addClass('active');
            }
        });
    }

});