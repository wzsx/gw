 $(function(){

	 //pc下拉
	var $i;
	var $flag = false;
	$(".sub").hover(function(){
		$flag = true;
	},function(){
		$(".sub[data-m='"+$i+"']").slideUp();
		$(".menu .nli a[data-n='"+$i+"']").parent().parent().removeClass("active");
		$flag = false;
	});
	$(".menu .nli span a").hoverIntent(function(){
		$i = $(this).attr("data-n");
		$(".sub[data-m='"+$i+"']").slideDown();
		$(this).parent().parent().addClass("active");
	},function(){
		if(!$flag){
			$(".sub[data-m='"+$i+"']").slideUp();
			$(this).parent().parent().removeClass("active");
		}
	});

     //pc头部搜索
     $(".searchicon .ico").on("click",function(){
         $(this).toggleClass("active")
         $(".searchDown").slideToggle(0);
     });
     $(".inputShup").on("click",function(){
         $(".searchicon .ico").removeClass("active")
         $(".searchDown").slideUp(0);
     });



	// 菜单下拉
	$("#menuph").click(function(){
		$(this).find(".point").toggleClass("active");
		$(".top2").toggleClass('active');
		$(".xialaph").slideToggle();
		$(".phonemeng").toggleClass('active');
		$("body,html").animate({
			scrollTop:0
		},500);
	});
	$(".footph h5").click(function(){
		$(this).toggleClass("active");
		$(this).parent().siblings().find("h5").removeClass('active');
		$(this).siblings("ul").slideToggle();
		$(this).parent().siblings().find("ul").slideUp();
	});
	
	$(".xialaph h4").click(function(){
		$(this).siblings(".ul2").slideToggle();
		$(this).parent().siblings().find(".ul2,.ul3").slideUp();
		$(this).toggleClass("active");
		$(this).parent().siblings().find("h4,h5").removeClass('active');
	});
	$(".xialaph h5").click(function(){
		$(this).siblings(".ul3").slideToggle();
		$(this).parent().siblings().find(".ul3").slideUp();
		$(this).toggleClass("active");
		$(this).parent().siblings().find("h4,h5").removeClass('active');
	});
	$(".xialaph .lian h5").click(function(){
		$(this).siblings().toggleClass('active');
	});
 });

