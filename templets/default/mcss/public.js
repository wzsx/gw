$(function(){
	$(".header .zk img").click(function(){
		$('body').on('touchmove', function (event) {
 		    event.preventDefault();
 		});
		$(".zkliebiao").animate({"left":"0%"},200);
		$(".zhezhao").fadeIn(0);
	});
	$(".zhezhao").click(function(){
		$("body").unbind("touchmove");
		$(".zkliebiao").animate({"left":"-75%"},200);
		$(".zhezhao").fadeOut(0);
	});
});