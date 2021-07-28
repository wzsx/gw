function openzx(){
	var swt_talk = 'http://dft.zoosnet.net/LR/Chatpre.aspx?id=DFT73650159&lng=cn';
	var iTop = (window.screen.availHeight - 30 - 600) / 2;
	var iLeft = (window.screen.availWidth - 10 - 800) / 2;
	window.open(swt_talk, 'newwindow', 'height=515, width=700,toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no,top=' + iTop + ',left=' + iLeft);
}
function checkTel(tel)
{
   /*var mobile = /^1[3|5|7|8]\d{9}$/ , phone = /^0\d{2,3}-?\d{7,8}$/;
   return mobile.test(tel) || phone.test(tel);*/
	var mobile = /^1[3|5|7|8]\d{9}$/;
	return mobile.test(tel);
}
function isMail(email) {            

　　//var TextVal = document.getElementById("TextBox1").value;            
　　var Regex = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;            
　　if (Regex.test(email)){                
　	　return true;           
　　}else {               
	　　if (email == "") {                    
	　　　　//alert("请输入E-mail！！");                    
	　　	return false;                
	　　}else {                    
	　　	//alert("请填写正确的E-mail");                    
	     //document.getElementById("TextBox1").value = "";          
	　　	$('#email').val('');
	　　return false;                
	
	　　}            

　　}        

}   
$(document).ready(function(){
	//初始化商标
	$('#name').val('');
	$('#tel').val('');
	//初始化专利
	$('#number').val('');
	$('#tel').val('');
	
	//申报
	$('#sumitdeclare').click(function(){
		var type = $('#type').val();
		var company = $('#company').val();
		var tel = $('#tel').val();
		//var qq = $('#qq').val();
		//var email = $('#email').val();
		if(!type){
			alert('请选择类型');
			return false;
		}
		if(!company){
			alert('请填写公司名称');
			return false;
		}
		if(!checkTel(tel)){
			alert('请填写正确的手机号码');
			return false;
		}
		/*if(!qq){
			alert('请填写QQ');
			return false;
		}*/
		/*if(!isMail(email)){
			alert('请填写正确的电子邮箱');
			return false;
		}*/
		
	});
	
	//申报1
	$('#usumitdeclare').click(function(){
		var type = $('#utype').val();
		var company = $('#ucompany').val();
		var tel = $('#utel').val();
		//var qq = $('#uqq').val();
		//var email = $('#uemail').val();
		if(!type){
			alert('请选择类型');
			return false;
		}
		if(!company){
			alert('请填写公司名称');
			return false;
		}
		if(!checkTel(tel)){
			alert('请填写正确的手机号码');
			return false;
		}
		/*if(!qq){
			alert('请填写QQ');
			return false;
		}*/
		/*if(!isMail(email)){
			alert('请填写正确的电子邮箱');
			return false;
		}*/
		
	});
	
	//商标
	$('#submitchinatrade').click(function(){
		var typeName=$('#typeName').val();
		var name = $('#searchKey').val();
		var uname = $('#uname').val();
		var tel = $('#tel').val();
		var qq = $('#qq').val();
		if(!name){
			alert('请填写商标名称');
			return false;
		}
		if(!uname){
			alert('请填写您的姓名');
			return false;
		}
		if(!checkTel(tel)){
			alert('请填写正确的电话号码');
			return false;
		}
		if(!qq){
			alert('请填写正确的QQ号码');
			return false;
		}
		$.post('/tijiao',{haohao1:typeName,haohao2:name,haohao3:uname,haohao4:tel,haohao5:qq},function(data){
			if (data){
				$('#close').click();
				alert('查询成功，稍后我们电话告知您查询结果');
			}
		});
		
	});
	
	//国际商标
	$('#usubmitchinatrade').click(function(){
		var name = $('#uname').val();
		var tel = $('#utel').val();
		var qq = $('#uqq').val();
		if(!name){
			alert('请填写商标名或描述');
			return false;
		}
		if(!checkTel(tel)){
			alert('请填写正确的号码');
			return false;
		}
		if(!qq){
			alert('请填写正确的QQ号码');
			return false;
		}
		
	});
	
	//专利
	$('#submitchinapatent').click(function(){
		var typename = $('#patentType').val();
		var name = $('#searchKey').val();
		var uname = $('#uname').val();
		var tel = $('#tel').val();
		var qq = $('#qq').val();
		if(!typename){
			alert('请选择专业类型');
			return false;
		}
		if(!uname){
			alert('请填写您的姓名');
			return false;
		}
		if(!name){
			alert('请填写专利名称');
			return false;
		}
		if(!checkTel(tel)){
			alert('请填写正确的号码');
			return false;
		}
		if(!qq){
			alert('请填写正确的QQ号码');
			return false;
		}
	});
});