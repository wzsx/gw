/**
 * Created by 56435 on 2016/8/20.
 */
$(function() {
	$('.main .left ul.sbar>li>a').removeClass("active");
	if($('.main .left ul.sbar>li>a:first').next("ul").length > 0) {

		$('.main .left ul.sbar>li>a').removeClass("active");
		$('.main .left ul.sbar>li>a').first().addClass("active");
		$('.main .left ul.sbar>li>a').next("ul").hide();
		$('.main .left ul.sbar>li>a').first().next("ul").show();
	}

	$('.main .left ul.sbar>li>a').bind("click",
		function() {
			if($(this).next("ul").length > 0) {
				$('.main .left ul.sbar>li>a').nextAll("ul").hide();
				$('.main .left ul.sbar>li>a').removeClass("active");
				$(this).next("ul").show();
				$(this).addClass("active");
			}

		}
	)
})

