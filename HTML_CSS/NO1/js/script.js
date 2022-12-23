"use strict";

function _classCallCheck(e, o) {
	if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function () {
	function e(e, o) {
		for (var n = 0; n < o.length; n++) {
			var t = o[n];
			t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
		}
	}
	return function (o, n, t) {
		return n && e(o.prototype, n), t && e(o, t), o
	}
}();
$(function () {
	function e(e) {
		var o, n = new TimelineMax;
		o = window.innerWidth > 1040 ? ["84.9%", "67.971%", "0.155", "0.266", "0.68", "1.1", "0.8", "1.4"] : 1040 > window.innerWidth && window.innerWidth > 767 ? ["84.9%", "55%", "0.1", "0.4", "0.55", "1.1", "0.8", "1.4"] : ["90%", "100%", "0.1", "0.9", "1", "0.6", "0.5", "1.1"];
		var t = $(e + " .popup_photo img");
		$(e + " .popup_text");
		n.to(".popup_wrap", .3, {
			autoAlpha: 1,
			ease: Power0.easeNone
		}, 0).to(e + ".popup_box", o[5], {
			width: o[0],
			ease: Expo.easeInOut,
			onComplete: function () {
				var n = this.target.width();
				n -= window.innerWidth * o[2];
				n * o[3];
				n *= o[4], t.width(n), TweenMax.to(e + " .popup_text", 1, {
					opacity: 1,
					delay: .5
				})
			}
		}, .3).to(e + " .popup_photo", o[6], {
			width: o[1],
			ease: Expo.easeOut,
			onComplete: function () {
				$(".popup_photo").addClass("open")
			}
		}, o[7])
	}
}), document.addEventListener("DOMContentLoaded", function () {
	new ScrollTrigger
});