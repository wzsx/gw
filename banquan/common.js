function AddFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
} 
//复制本地址
function CopyToClipBoard(txt) {
    if (window.clipboardData) {
        window.clipboardData.clearData();
        window.clipboardData.setData("Text", txt);
    } else if (navigator.userAgent.indexOf("Opera") != -1) {
        //do nothing       
    } else if (window.netscape) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        } catch (e) {
            alert("被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将 'signed.applets.codebase_principal_support'设置为'true'");
        }
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
        if (!clip)   return;
        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
        if (!trans) return;
        trans.addDataFlavor('text/unicode');
        var str = new Object();
        var len = new Object();
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
        var copytext = txt;
        str.data = copytext;
        trans.setTransferData("text/unicode", str, copytext.length * 2);
        var clipid = Components.interfaces.nsIClipboard;
        if (!clip)   return false;
        clip.setData(trans, null, clipid.kGlobalClipboard);
    }
    alert("你已经成功复制本地址，请直接粘贴推荐给你的朋友!");
}
//按回车后触发按钮
function SubmitKeyClick(button) {
    document.onkeydown = function(event) {
        event = event ? event : (window.event ? window.event : null);
        //event.srcElement.type  事件发生对象的类型
        if (event.keyCode == 13) {
            document.getElementById(button).click();
            return false;
        }
    }
}
//IE浏览器下placeholder模拟
var funPlaceholder = function (element) {
    var placeholder = '';
    if (element && !("placeholder" in document.createElement("input")) && (placeholder = element.getAttribute("placeholder"))) {
        element.onfocus = function () {
            if (this.value === placeholder) {
                this.value = "";
            }
            this.style.color = '';
        };
        element.onblur = function () {
            if (this.value === "") {
                this.value = placeholder;
                this.style.color = 'graytext';
            }
        };

        //样式初始化
        if (element.value === "") {
            element.value = placeholder;
            element.style.color = 'graytext';
        }
    }
};
////调用Flash动画方法
//function playswf(sFile, sWidth, sHeight) {
//    document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="' + sWidth + '" height="' + sHeight + '">  ');
//    document.write('<param name="movie" value="' + sFile + '">');
//    document.write('<param name="quality" value="high">');
//    //		document.write('<param name="bgcolor" value="#ffffff" />');
//    //		document.write('<param name="SCALE" value="noborder" />');
//    document.write('<param name="menu" value="false" />');
//    document.write('<param name="wmode" value="transparent">'); //opaque transparent
//    document.write('<embed src="' + sFile + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + sWidth + '" height="' + sHeight + '"></embed>  ');
//    document.write('</object>');
//}

//function loadPage(id, url) {
//    $("#" + id).empty().append("<image src='/images/loading.gif' alt='loading' align='absmiddle' /> Loading......");
//    $.ajax({
//        type: "get",
//        url: url,
//        cache: false,
//        error: function() { alert('加载页面' + url + '时出错！'); },
//        success: function(msg) {
//            $("#" + id).empty().append(msg);
//        }
//    });
//}

//图片按比例缩放
//var flag = false;
//function DrawImage(ImgD) {
//    var image = new Image();
//    var iwidth = 500; //定义允许图片宽度
//    var iheight = 300; //定义允许图片高度
//    image.src = ImgD.src;
//    if (image.width > 0 && image.height > 0) {
//        flag = true;
//        if (image.width / image.height >= iwidth / iheight) {
//            if (image.width > iwidth) {
//                ImgD.width = iwidth;
//                ImgD.height = (image.height * iwidth) / image.width;
//            } else {
//                ImgD.width = image.width;
//                ImgD.height = image.height;
//            }

//            ImgD.alt = image.width + "×" + image.height;
//        }
//        else {
//            if (image.height > iheight) {
//                ImgD.height = iheight;
//                ImgD.width = (image.width * iheight) / image.height;
//            } else {
//                ImgD.width = image.width;
//                ImgD.height = image.height;
//            }
//            ImgD.alt = image.width + "×" + image.height;
//        }
//    }
//}
//调用：<img src="图片" onload="javascript:DrawImage(this)">


$().ready(function () {
    $('li.children').mousemove(function () {
        $(this).find('ul').slideDown("fast"); //you can give it a speed
    });

    $('li.children').mouseleave(function () {
        $(this).find('ul').slideUp("fast");
    });
});