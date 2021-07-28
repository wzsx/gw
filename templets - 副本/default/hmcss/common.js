
//change copyright------------
var host2 = document.domain; 
var copyright = document.getElementById('copyright');



$("#goAttention").click(function(e) {
  $('body,html').animate({scrollTop:1180},1000);
});
$("#goFlowPath").click(function(e) {
  $('body,html').animate({scrollTop:1900},1000);
});

jQuery("#allService").slide({ type:"menu", titCell:".nLi", targetCell:".sub",effect:"slideDown",delayTime:300,triggerTime:0,defaultPlay:false,easing:"easeOutBounce"});

//城市
$('#city').on('click', function(){
  $.openCity();
});
$('.citys').on('click', function(){
  $("#city").val($(this).attr('value'));
});
$('#diyCity').on('click', function(){
  $("#city").val($("#valCity").val());
});
//end

//行业
$('#industry').on('click', function(){
  $.openIndustry();
});
$('.industrys').on('click', function(){
  $("#industry").val($(this).attr('value'));
});
$('#diyIndustry').on('click', function(){
  $("#industry").val($("#valIndustry").val());
});
//end

//自定义函数
$.extend({
//打开城市
  openCity:function(){
    layer.open({
      type: 1,
      skin: 'layui-btn',
      shade: [0.8, '#000'],
      area: ['580px', '502px'],
      anim: 5,
      title: false,
      content: $(".cityhMain"),
    });
  },
//打开行业
  openIndustry:function(){
    layer.open({
      type: 1,
      skin: 'layui-btn', //样式类名
      shade: [0.8, '#000'],
      area: ['810px', '325px'],
      anim: 5,
      title: false,
      content: $(".industryMain"),
    });
  },
  openSubMain:function(){
    layer.open({
      type: 1,
      shade: [0.8, '#000'],
      area: ['600px', '560px'],
      anim: 2,
      content: $(".subMain"),
      title: false,
    });
  },

});
//自定义函数结束 //取名
$('#btnNext').on('click', function(){
  if( $("#city").val()=="" )
  {
    layer.confirm('城市', {
      title: false,
      icon: 2,
      closeBtn: 0,
      shade: [0.8, '#000'],
      skin: 'layer-message',
      btn: ['知道了'],
      yes: function(index){
        layer.close(index);
        $("#city").focus();
      }
    });
    return false;
  }
  if( $("#industry").val()=="" )
  {
    layer.confirm('行业', {
      title: false,
      icon: 2,
      closeBtn: 0,
      shade: [0.8, '#000'],
      skin: 'layer-message',
      btn: ['知道了'],
      yes: function(index){
        layer.close(index);
        $("#industry").focus();
      }
    });
    return false;
  }
});

//个人信息 核名模块
$('#subNames').on('click', function(){
  if( $("#city").val()=="" )
  {
    layer.confirm('城市', {
      title: false,
      icon: 2,
      closeBtn: 0,
      shade: [0.8, '#000'],
      btn: ['知道了'],
      yes: function(index){
        layer.close(index);
        $("#city").focus();
      }
    });
    return false;
  }
  if( $("#wordsize").val()=="" )
  {
    layer.confirm('字号', {
      title: false,
      icon: 2,
      closeBtn: 0,
      shade: [0.8, '#000'],
      btn: ['知道了'],
      yes: function(index){
        layer.close(index);
        $("#wordsize").focus();
      }
    });
    return false;
  }
  if( $("#industry").val()=="" )
  {
    layer.confirm('行业', {
      title: false,
      icon: 2,
      closeBtn: 0,
      shade: [0.8, '#000'],
      btn: ['知道了'],
      yes: function(index){
        layer.close(index);
        $("#industry").focus();
      }
    });
    return false;
  }
  $.openSubMain();
});
//end





$("#tel").blur(function(){
	if(!$("#tel").val().match(/^(((1[0-9]{1}[0-9]{1})|159|153)+\d{8})$/)){ return false;}
   //ajax提交数据
 //ajax提交数据
  var username = $("#name").val(); 
  var tel = $("#tel").val();
  var city = $("#city").val();
  var wordsize = $("#wordsize").val();
  var industry = $("#industry").val();    
  if(industry == undefined){industry = "注册公司";}
  var companytype = $("#companytype").val();
  var catid = $("#classify").val();
  var terminal = "电脑端";
  var reffer = document.referrer;

	$.post("/plus/diy.php", {"act":"add","username":username,"tel":tel,"city":city,"wordsize":wordsize,"industry":industry,"companytype":companytype,"terminal":terminal,"catid":catid,"reffer":reffer});
});














//change copyright------------
var host2 = document.domain; 
var copyright = document.getElementById('copyright');



