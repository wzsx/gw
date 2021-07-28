//城市
$('#city').on('click', function(){
  $(".cityhMain").removeClass("hidden");
  $("#city").blur();
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
  $(".industryMain").removeClass("hidden");
  $("#industry").blur();
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
    var index = layer.open({
      type: 1,
      skin: 'layui-btn', //样式类名
      shade: [1, '#f0f0f4'],
      closeBtn: false, //不显示关闭按钮
      area: ['640px', '840px'],
      anim: 2,
      title: false,
      maxmin: false,
      content: $(".cityhMain"),
      scrollbar: false,
      fixed: false, //不固定
      maxmin: false,
      end: function(){
        $(".cityhMain").addClass("hidden");
        $(".cityhMain").css("display","none");
      }
    });
    layer.full(index); 
  },
//打开行业
  openIndustry:function(){
    var index = layer.open({
      type: 1,
      skin: 'layui-btn', //样式类名
      shade: [1, '#f0f0f4'],
      closeBtn: false, //不显示关闭按钮
      area: ['640px', '780px'],
      anim: 2,
      title: false,
      maxmin: false,
      content: $(".industryMain"),
      scrollbar: false,
      end: function(){
        $(".industryMain").addClass("hidden");
        $(".industryMain").css("display","none");
      }
    });
    layer.full(index); 
  },

  openSubMain:function(){
    var index = layer.open({
      type: 1,
      skin: 'layui-infos', //样式类名
      shade: [1, '#f0f0f4'],
      offset: '0',
      closeBtn: 0, //不显示关闭按钮
      area: ['640px', '700px'],
      anim: 2,
      shadeClose: false, //开启遮罩关闭
      content: $(".subMain"),
      scrollbar: false,
      fixed: false, //不固定
      title: false,
      end: function(){
        $(".subMain").addClass("hidden");
        $(".subMain").css("display","none");
      }
    });
    layer.full(index); 
  },

});
//自定义函数结束

$('#btnNext').on('click', function(){
  if( $("#city").val()=="" )
  {
    layer.confirm('请输入城市', {
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
    layer.confirm('请输入行业', {
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
//个人信息
$('#subNames').on('click', function(){
  if( $("#city").val()=="" )
  {
    layer.confirm('请输入城市', {
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
  if( $("#wordsize").val()=="" )
  {
    layer.confirm('请输入字号', {
      title: false,
      icon: 2,
      closeBtn: 0,
      shade: [0.8, '#000'],
      skin: 'layer-message',
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
    layer.confirm('请输入行业', {
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
  var terminal = "手机端";
  var reffer = document.referrer;

	$.post("/plus/diy.php", {"act":"add","username":username,"tel":tel,"city":city,"wordsize":wordsize,"industry":industry,"companytype":companytype,"terminal":terminal,"catid":catid,"reffer":reffer});
});
//end




//sub提交数据
$("#sub").on('click',function(){
  if( $("#name").val()=="" )
  {
    layer.confirm('请输入姓名', {
      title: false,
      icon: 2,
      closeBtn: 0,
      shade: [0.8, '#000'],
      skin: 'layer-message',
      btn: ['知道了'],
      yes: function(index){
        layer.close(index);
        $("#name").focus();
      }
    });
    return false;
  }
  if( $("#tel").val()=="" )
  {
    layer.confirm('请输入电话', {
      title: false,
      icon: 2,
      closeBtn: 0,
      shade: [0.8, '#000'],
      skin: 'layer-message',
      btn: ['知道了'],
      yes: function(index){
        layer.close(index);
        $("#tel").focus();
      }
    });
    return false;
  }
  
  
  
  
//ajax提交数据

  var username = $("#name").val(); 
  var tel = $("#tel").val();
  var city = $("#city").val();
  var wordsize = $("#wordsize").val();
  var industry = $("#industry").val();    
  if(industry == undefined){industry = "注册公司";}
  var companytype = $("#companytype").val();
  var catid = $("#classify").val();
  var terminal = "手机端";
  var reffer = document.referrer;
  var code = $("#code").val();

  
  $.post("/sms/verifycode.php", {"code":code,"tel":tel}, function(response){
	  var response = JSON.parse(response);
	  if(response.status != 0){ 
		  alert(response.message);
		  return false;
	  }else{
		  $.post("/plus/diy.php", {"act":"add","username":username,"tel":tel,"city":city,"wordsize":wordsize,"industry":industry,"companytype":companytype,"terminal":terminal,"catid":catid,"reffer":reffer}, function(response){
			if(response){
			  layer.alert('提问成功', {
				icon: 1,
				closeBtn:false,
				title: false,
				time: 3000 ,//不自动关闭
				btn: ['好的'],
				yes: function(index){
				layer.close(index);
				$("#wendaContent").val("");
				$("#wendaContent").focus();
				}
			  });
			  return false;
			}else{

				

       
	
		if(catid == '73'){
				  layer.alert('发送成功，1到3个工作日内会有专人和您联系，请耐心等待', {
					icon: 6,
					closeBtn: 0,
					shade: [0.8, '#000'],
					title: false,
					end: function(){
					  window.parent.location.reload();
					}
				  });
				  return false;
				}

			  return false;
			}
		  });
	  }
	  
  })
  
  
});
//end


$(function(){
  $("#refresh").click(function(){
      refresh();
  });
});

//刷新当前页面.
function refresh(){
  window.location.reload();
}


