/*

write by wuweiwei
www.github.com/flybirdsoft
www.cnblogs.com/wsoft

*/

(function(){
	var app = {
		init:function(){
			//this.setPV();
			this.bindEvent();
		},
		bindEvent:function(){
			var th = this;
			window.onscroll = function(){
				th.floatMenu();
			}
			$("#floatContact").on("click",function(){
				window.scroll(0,1950);
			});
		},
		floatMenu:function(){
			var SH = document.body.scrollTop || document.documentElement.scrollTop;
			var menuBar = document.getElementById("menuBar");
			var top = document.getElementById("top");
			if(SH>90)
			{
				menuBar.style.position = "fixed";
				menuBar.style.top = "0px";
				menuBar.style.left = "0px";
				menuBar.style.width = "100%";
				top.style.marginTop = "85px";
			}
			else
			{
				menuBar.style.position = "static";
				top.style.marginTop = "0px";
			}
			
		},
		setPV:function(){
			/*
			var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async="false";
			xmlDoc.load("PV.xml");

			var node = xmlDoc.createElement("aaa");
			*/
			var xmlDoc=document.implementation.createDocument("","",null);
			xmlDoc.async="false";
			str = "";
			for(v in xmlDoc)
			{
				str += v + " : " + xmlDoc[v] + "\n";
			}
			//console.log(str);
			xmlDoc.load("./PV.xml");
			//alert(xmlDoc.getElementsByTagName);
			console.log(xmlDoc.getElementsByTagName("book")[0].firstChild.nodeValue);
			//xmlDoc.getElementsByTagName("title")[0].setAttribute("xxx","aaa");
			//xmlDoc.getElementsByTagName("title")[0].firstChild.nodeValue = "3eeeew";
			//xmlDoc.save("./PV.xml");
		}
	};	
	app.init();
})();




