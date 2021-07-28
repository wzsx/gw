	//新建窗口打开
	function openzx2(){
	var swt_talk = 'http://dft.zoosnet.net/LR/Chatpre.aspx?id=DFT73650159&lng=cn';
	var iTop = (window.screen.availHeight - 30 - 600) / 2;
	var iLeft = (window.screen.availWidth - 10 - 800) / 2;
	window.open(swt_talk, 'newwindow', 'height=515, width=700,toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no,top=' + iTop + ',left=' + iLeft);
	};

document.onselectstart = function(e) {return false;};
document.oncontextmenu = function(e) {return false;};


$(document).ready(function(){


	// tab 切换效果
	$('#tab li').hover(function(){
		$(this).addClass('this').siblings().removeClass('this')
		.parent().next().children().eq($(this).index()).show().siblings().hide();
	})

	$('#tab2 li').hover(function(){
		var tabIdx = $(this).parent().next().children(':visible').index();
		$(this).parent().removeClass('bg0'+tabIdx).addClass('bg0'+$(this).index()).next().children().eq($(this).index()).show().siblings().hide();
	})

	$('#tab3').children().hover(function(){
		var tabIdx = $(this).parent().next().children(':visible').index();
		$(this).parent().removeClass('bg0'+tabIdx).addClass('bg0'+$(this).index()).next().children().eq($(this).index()).show().siblings().hide();
	})

	// 商标鼠标效果显示
	$('#markShow li').hover(function(){
			$(this).prepend('<div></div>').children('div').addClass('markShowMask');
		},function(){
			$(this).children('div').remove();
			});
			
	//商标查询 bannerBtnSearch	弹出窗口
	$('#btnSearch').popBoxCenter({
		popBox:'#popBox01',
		isPostValue:'true'
	});
	//商标咨询	弹出窗口
	$('#searchButt').popBoxCenter({
		popBox:'#popBox01'
	});
	//商标咨询	弹出窗口
	$('#searchButt2').popBoxCenter({
		popBox:'#popBox01'
	});
	//商标查询 oneStop	弹出窗口
	$('#btnMark1Stop').popBoxCenter({
		popBox:'#popBox01'
	});

	//国内商标查询	弹出窗口
	$('#searchPatentBtn').popBoxCenter({
		popBox:'#popBox01'
	});

	//高企效果01
	$('div.hiBtn .ico02').hover(function(){
		$(this).find('strong').addClass('white').children().addClass('white');
	},function(){
		$(this).find('strong').removeClass('white').children().removeClass('white');
	});
	//高企询价	弹出窗口
	$('#hiInquery').popBoxCenter({
		popBox:'#popBox02'
	});


var $this = $("#hiScroll");
var scrollTimer;
$this.hover(function() {
clearInterval(scrollTimer);
}, function() {
scrollTimer = setInterval(function() {
scrollNews($this);
}, 1000);
}).trigger("mouseleave");
function scrollNews(obj) {
var $self = $('#hiScroll ul');
var lineHeight = $self.find("li:first").height(); 
$self.animate({
"marginTop": -lineHeight + "px"
}, 1000, function() {
$self.css({
marginTop: 0
}).find("li:first").appendTo($self);
})
}

	//首页
	$('#idxNews .newsList li:even').addClass('evenCol');

	// 商标案例左右移动(闪移型)
	// 左移
	$('#scrollSty01 #btnL').click(function(){
			$(this).siblings('#content').children(':first').appendTo('#content');
		});
	setInterval(function(){
		$('#scrollSty01 #btnL').triggerHandler('click');
		},5000);
		//右移
	$('#scrollSty01 #btnR').click(function(){
			$(this).siblings('#content').children(':last').prependTo('#content');
		});


	
	//IE8的文本框提示
	if ($.browser.msie && parseInt($.browser.version)<=8) {
		$(document).find('input[type=text]').each(function(){
			if(this.value==''){
				this.value = this.placeholder;
				$(this).css({'color':'#ccc'});
			}
		});
		//alert($.browser.version);
		$(document).on('focusin','input[type=text]',function(){
			if( this.placeholder==this.value){
				this.value = '';
				$(this).css({'color':''});
			}
		}).on('focusout','input[type=text]',function(){
			if(this.value==''){
				this.value = this.placeholder;
				$(this).css({'color':'#ccc'});
			}
		});
	}

	//about Float Box | 自定义商务通浮动条
	var filename=location.href;
	filename=filename.substr(filename.lastIndexOf('/')+1);
	filename=filename.substring(0,filename.lastIndexOf('.'));   
	//alert(filename); 
	//根据当前文件名读取相应的内容，并插入面页
	switch(filename){
		//本地文件
		case 'trademark_domestic' || 'chinatrademark':
			//国内商标
			$('body').append('<div></div>');
			$('div:last').load('floatBox.txt #floatBox01',function(){
				flatBoxBtn();
			});
			break;
		case 'trademark_global' || 'intertrademark':
			//国际商标
			$('body').append('<div></div>');
			$('div:last').load('floatBox.txt #floatBox02',function(){
				flatBoxBtn();
			});
			break;
		case 'patent_domestic' || 'chainapatent':
			//国内专利
			$('body').append('<div></div>');
			$('div:last').load('floatBox.txt #floatBox03',function(){
				flatBoxBtn();
			});
			break;
		case 'patent_global' || 'interpatent':
			//国际专利
			$('body').append('<div></div>');
			$('div:last').load('floatBox.txt #floatBox04',function(){
				flatBoxBtn();
			});
			break;
		case 'hi-tech_enterprises' || 'declares':
			//高企申报
			$('body').append('<div></div>');
			$('div:last').load('floatBox.txt #floatBox05',function(){
				flatBoxBtn();
			});
			break;

		//站点文件
		case 'chinatrademark':
			//国内商标
			$('body').append('<div></div>');
			$('div:last').load('floatBox.txt #floatBox01',function(){
				flatBoxBtn();
			});
			break;
		case 'intertrademark':
			//国际商标
			$('body').append('<div></div>');
			$('div:last').load('floatBox.txt #floatBox02',function(){
				flatBoxBtn();
			});
			break;
		case 'chainapatent':
			//国内专利
			$('body').append('<div></div>');
			$('div:last').load('floatBox.txt #floatBox03',function(){
				flatBoxBtn();
			});
			break;
		case 'interpatent':
			//国际专利
			$('body').append('<div></div>');
			$('div:last').load('floatBox.txt #floatBox04',function(){
				flatBoxBtn();
			});
			break;
		case 'declares':
			//高企申报
			$('body').append('<div></div>');
			$('div:last').load('floatBox.txt #floatBox05',function(){
				flatBoxBtn();
			});
			break;

		default:
			//其他页面
			$('body').append('<div></div>');
			$('div:last').load('floatBox.txt #floatBox06',function(){
				flatBoxBtn();
			});
			break;

	}

	function flatBoxBtn(){
		var _floatBox = $('.floatBox');
		_floatBox.find('a').each(function(){
			$(this).attr('href','javascript:void(0)').attr('onclick','openzx2()').removeAttr('target');
		});
		
		//隐藏
		_floatBox.find('#close').click(function(){
			_floatBox.children('.box').hide().siblings().show();
		});
		//显示
		_floatBox.find('#showFloat').click(function(){
			$(this).hide().siblings().show();
		});
	};

	//读取头部链接文档
	$('#header').load('inc_header.html',function(){
		var thisPgName=location.href;
		thisPgName=thisPgName.substr(thisPgName.lastIndexOf('/')+1);
		$('#navigation a[href="'+thisPgName+'"]').addClass('current');
	});
});

