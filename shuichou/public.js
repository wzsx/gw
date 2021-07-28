// JavaScript Document
$('.pf_right li').mousemove(function(){
    $('.tc_box').hide()
    $(this).find('.tc_box').show()
})
$('.pf_right li').mouseleave(function(){
    $(this).find('.tc_box').hide()
})
$('.pf_right .btn').click(function(){
    $('.pf_right').toggleClass('on')
})
$('.link_1 .name').click(function(){
	$('.link_1 .p').slideToggle()
	$(this).toggleClass('on')
})

if ($(window).width() <= 480) {
	$('.link_1 .name').click(function(){
		$(this).next().slideToggle()
		$(this).toggleClass('on')
	})
	
}







