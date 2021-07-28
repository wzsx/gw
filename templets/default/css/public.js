function postform(){
	value=$.trim($("#title").val());
  	if(!dyfrom_min(value, 1)){ alert('名字不能为空');return false;}
	if(!dyfrom_max(value, 100)){alert('名字不能大于30个字符');return false;}
	value=$.trim($("#u_phone").val());
	if(!dyfrom_mobile(value)){alert('手机号码格式错误！');return false;}
	value=$("#body").val();
	if(!dyfrom_max(value, 500)){alert('内容不能大于500个字符');return false;}
}