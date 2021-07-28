;(function($){
	
	//弹出窗口插件
	$.fn.popBoxCenter = function(options){
		var defaults = {
			//各种参数
			popBox:'#popBox',
			closeBtn:'#close',
			closeBtn2:'#boxShadow',
			eventType:'click',
			isPostValue:'false',
			strValueInput:'#strKeywords',
			acceptInput:'#searchKey'

		};
		var options = $.extend(defaults,options);
		this.each(function(){
			//实现功能的代码
			var _this = $(this);
			//显示弹出窗口
			_this.bind(options.eventType,function(){
				//alert("已点击！");
				//定义相关变量
				var windowHeight=$(window).height(); 
				var windowWidth=$(window).width(); 
				var winScrollTop = $(document).scrollTop();
				var popHeight=$(options.popBox).height();
				var popWidth=$(options.popBox).width(); 
				var popY=(windowHeight-popHeight)/2+winScrollTop; 
				var popX=(windowWidth-popWidth)/2;

				if(options.isPostValue=='true'){//传值
					$(options.acceptInput).val($(options.strValueInput).val());
					$(options.strValueInput).val('');
					}else{
						$(options.acceptInput).val('');
					}

				//alert('popWidth:'+popWidth+', popHeight:'+popHeight);
				//显示popBox
				$(options.popBox).css({
					'top':popY,
					'left':popX
					}).show()
					.next().css({
						'width':$(document).width(),
						'height':$(document).height(),
						'top': 0
						}).show();
					//alert($(options.popBox).css('display'));
						// .scroll(function(){
				 		//		$(window).scrollTop(winScrollTop);
						// 	});
				//让滚动条消失
				//$('body').css({'overflow':'hidden'});
				// $(window).scroll(function(){
				 //	$(window).scrollTop(winScrollTop);
				 //});
			});
			$(window).scroll(function(){
				if ($(options.popBox).css('display')=='block') {
					//alert($(window).scrollTop());
					//var _ScrollTop = $(document).scrollTop();
					$(window).scrollTop($(window).scrollTop());
				}else{
					$(window).scrollTop();
				}
			});
			//close Btn
			$(options.popBox).find(options.closeBtn).bind(options.eventType,function(){
				$(options.popBox).hide().next().hide();
				$('body').css({	//让滚动条显示
	                'overflow': ''
	             });
			});
			//close Btn2 (is boxShadow )
			$(options.popBox).siblings(options.closeBtn2).bind(options.eventType,function(){
				$(this).hide().siblings(options.popBox).hide();
				$('body').css({	//让滚动条显示
	                'overflow': ''
	             });
			});

		});
	}
	
	
})(jQuery);

