(function(){var h={},mt={},c={id:"d0285664b37eefb0aca75600e884fdad",dm:["bjcsip.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[{id:"%23divOnline%3ediv%5b1%5d%3ediv%3eul%3eli%5b1%5d%3ea%3eimg",eventType:"onclick"}],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:11345899,qiao:11345899,lxb:11345899,kbtrk:0,pt:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var q=void 0,r=!0,t=null,u=!1;mt.cookie={};mt.cookie.set=function(b,a,d){var e;d.Y&&(e=new Date,e.setTime(e.getTime()+d.Y));document.cookie=b+"="+a+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(e?"; expires="+e.toGMTString():"")+(d.Vb?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:t};mt.lang={};mt.lang.e=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};
mt.lang.wb=function(){var b=h.b.a.kb;return mt.lang.e(b,"Number")&&isFinite(b)};mt.lang.Ub=function(b){return mt.lang.e(b,"String")};mt.lang.i=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.J=function(b,a){var d=u;if(b==t||!mt.lang.e(b,"Array")||a===q)return d;if(Array.prototype.indexOf)d=-1!==b.indexOf(a);else for(var e=0;e<b.length;e++)if(b[e]===a){d=r;break}return d};
(function(){var b=mt.lang;mt.d={};mt.d.Z=function(a){return document.getElementById(a)};mt.d.ca=function(a,d){var e=[],b=[];if(!a)return b;for(;a.parentNode!=t;){for(var f=0,l=0,n=a.parentNode.childNodes.length,k=0;k<n;k++){var g=a.parentNode.childNodes[k];if(g.nodeName===a.nodeName&&(f++,g===a&&(l=f),0<l&&1<f))break}if((n=""!==a.id)&&d){e.unshift("#"+encodeURIComponent(a.id));break}else n&&(n="#"+encodeURIComponent(a.id),n=0<e.length?n+">"+e.join(">"):n,b.push(n)),e.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+
(1<f?"["+l+"]":""));a=a.parentNode}b.push(e.join(">"));return b};mt.d.sa=function(a){return(a=mt.d.ca(a,r))&&a.length?String(a[0]):""};mt.d.gb=function(a){return mt.d.ca(a,u)};mt.d.Xa=function(a){var d;for(d="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return t};mt.d.Za=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.d.eb=function(a){var d={top:0,left:0};if(!a)return d;var e=mt.d.Za(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(d=a.getBoundingClientRect());
return{top:d.top+(window.pageYOffset||e.scrollTop)-(e.clientTop||0),left:d.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};mt.d.getAttribute=function(a,d){var e=a.getAttribute&&a.getAttribute(d)||t;if(!e&&a.attributes&&a.attributes.length)for(var b=a.attributes,f=b.length,l=0;l<f;l++)b[l].nodeName===d&&(e=b[l].nodeValue);return e};mt.d.G=function(a){var d="document";a.tagName!==q&&(d=a.tagName);return d.toLowerCase()};mt.d.ib=function(a){var d="";a.textContent?d=b.trim(a.textContent):
a.innerText&&(d=b.trim(a.innerText));d&&(d=d.replace(/\s+/g," ").substring(0,255));return d};mt.d.$a=function(a){var d=mt.d.G(a);"input"===d&&("button"===a.type||"submit"===a.type)?a=a.value||"":"img"===d?(d=mt.d.getAttribute,a=d(a,"alt")||d(a,"title")||d(a,"src")):a=mt.d.ib(a);return String(a).substring(0,255)};(function(){(mt.d.ya=function(){function a(){if(!a.M){a.M=r;for(var e=0,d=b.length;e<d;e++)b[e]()}}function d(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(d,1);return}a()}
var e=u,b=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,u);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!e)if(e=r,"complete"===document.readyState)a.M=r;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",f,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",
a);var b=u;try{b=window.frameElement==t}catch(n){}document.documentElement.doScroll&&b&&d()}})();return function(e){a.M?e():b.push(e)}}()).M=u})();return mt.d})();mt.event={};mt.event.c=function(b,a,d){b.attachEvent?b.attachEvent("on"+a,function(a){d.call(b,a)}):b.addEventListener&&b.addEventListener(a,d,u)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=u};
(function(){var b=mt.event;mt.g={};mt.g.va=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.ub=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:q;mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.Db=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.H=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.I=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=0;(function(){function a(){var a=0;window.orientation!==q&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==q)&&(a=screen.orientation.angle);mt.g.orientation=a}a();b.c(window,"orientationchange",a)})();return mt.g})();
mt.o={};mt.o.parse=function(){return(new Function('return (" + source + ")'))()};
mt.o.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var e=d[a];if(e)return e;e=a.charCodeAt();return"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return b(e);case "boolean":return String(e);
default:if(e===t)return"null";if(e instanceof Array){var d=["["],f=e.length,l,n,k;for(n=0;n<f;n++)switch(k=e[n],typeof k){case "undefined":case "function":case "unknown":break;default:l&&d.push(","),d.push(mt.o.stringify(k)),l=1}d.push("]");return d.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+a(e.getMonth()+1)+"-"+a(e.getDate())+"T"+a(e.getHours())+":"+a(e.getMinutes())+":"+a(e.getSeconds())+'"';l=["{"];n=mt.o.stringify;for(f in e)if(Object.prototype.hasOwnProperty.call(e,f))switch(k=
e[f],typeof k){case "undefined":case "unknown":case "function":break;default:d&&l.push(","),d=1,l.push(n(f)+":"+n(k))}l.push("}");return l.join("")}}}();mt.localStorage={};mt.localStorage.R=function(){if(!mt.localStorage.j)try{mt.localStorage.j=document.createElement("input"),mt.localStorage.j.type="hidden",mt.localStorage.j.style.display="none",mt.localStorage.j.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.j)}catch(b){return u}return r};
mt.localStorage.set=function(b,a,d){var e=new Date;e.setTime(e.getTime()+d||31536E6);try{window.localStorage?(a=e.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.R()&&(mt.localStorage.j.expires=e.toUTCString(),mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.setAttribute(b,a),mt.localStorage.j.save(document.location.hostname))}catch(m){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),d=b.substring(0,a)-0;if(d&&d>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.R())try{return mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.getAttribute(b)}catch(e){}return t};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.R())try{mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.removeAttribute(b),mt.localStorage.j.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){if(window.sessionStorage)try{window.sessionStorage.setItem(b,a)}catch(d){}};
mt.sessionStorage.get=function(b){return window.sessionStorage?window.sessionStorage.getItem(b):t};mt.sessionStorage.remove=function(b){window.sessionStorage&&window.sessionStorage.removeItem(b)};mt.Ba={};mt.Ba.log=function(b,a){var d=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=t;d=window[e]=t;a&&a(b)};d.src=b};mt.la={};
mt.la.jb=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return b};
mt.la.Rb=function(b,a,d,e,m){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+d+'" height="'+e+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(m||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+d+'" height="'+e+'" src="'+a+'" flashvars="'+(m||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.l=function(b,a){var d=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return d?d[3]:t};mt.url.Sb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:t};mt.url.bb=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):t};mt.url.ba=function(b){return(b=mt.url.bb(b))?b.replace(/:\d+$/,""):b};mt.url.ca=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function b(){for(var a=u,d=document.getElementsByTagName("script"),e=d.length,e=100<e?100:e,b=0;b<e;b++){var f=d[b].src;if(f&&0===f.indexOf("https://hm.baidu.com/h")){a=r;break}}return a}return h.Wa=b})();var z=h.Wa;
h.k={tb:"http://tongji.baidu.com/hm-web/welcome/ico",ha:"hm.baidu.com/hm.gif",Ja:"tongji.baidu.com",pb:"hmmd",qb:"hmpl",Nb:"utm_medium",ob:"hmkw",Pb:"utm_term",mb:"hmci",Mb:"utm_content",rb:"hmsr",Ob:"utm_source",nb:"hmcu",Lb:"utm_campaign",z:0,p:Math.round(+new Date/1E3),D:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",N:z()||"https:"===document.location.protocol?"https:":"http:",Tb:0,Qa:6E5,xb:6E5,Eb:5E3,Ra:5,U:1024,Pa:1,w:2147483647,Ca:"bs kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt".split(" "),
K:r,C:["a","input","button"],La:{id:"data-hm-id",T:"data-hm-class",na:"data-hm-xpath",content:"data-hm-content",Q:"data-hm-tag",link:"data-hm-link"},pa:"data-hm-enabled",oa:"data-hm-disabled"};(function(){var b={s:{},c:function(a,d){this.s[a]=this.s[a]||[];this.s[a].push(d)},F:function(a,d){this.s[a]=this.s[a]||[];for(var e=this.s[a].length,b=0;b<e;b++)this.s[a][b](d)}};return h.m=b})();
(function(){function b(b,e){var m=document.createElement("script");m.charset="utf-8";a.e(e,"Function")&&(m.readyState?m.onreadystatechange=function(){if("loaded"===m.readyState||"complete"===m.readyState)m.onreadystatechange=t,e()}:m.onload=function(){e()});m.src=b;var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(m,f)}var a=mt.lang;return h.load=b})();
(function(){function b(){var b="";h.b.a.nv?(b=encodeURIComponent(document.referrer),window.sessionStorage?d.set("Hm_from_"+c.id,b):a.set("Hm_from_"+c.id,b,864E5)):b=(window.sessionStorage?d.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||"";return b}var a=mt.localStorage,d=mt.sessionStorage;return h.qa=b})();
(function(){var b=h.k,a={init:function(){if(""!==c.icon){var a=c.icon.split("|"),e=b.tb+"?s="+c.id,m="https://hmcdn.baidu.com/static"+a[0]+".gif";document.write("swf"===a[1]||"gif"===a[1]?'<a href="'+e+'" target="_blank"><img border="0" src="'+m+'" width="'+a[2]+'" height="'+a[3]+'"></a>':'<a href="'+e+'" target="_blank">'+a[0]+"</a>")}}};h.m.c("pv-b",a.init);return a})();
(function(){var b=mt.d,a=mt.event,d={Fa:function(){a.c(document,"click",d.W());for(var e=c.etrk.length,m=0;m<e;m++){var f=c.etrk[m],l=decodeURIComponent(String(f.id));-1===l.indexOf(">")&&(0===l.indexOf("#")&&(l=l.substring(1)),(l=b.Z(decodeURIComponent(l)))&&a.c(l,f.eventType,d.X()))}},X:function(){return function(a){(a.target||a.srcElement).setAttribute("HM_fix",a.clientX+":"+a.clientY);d.B("#"+encodeURIComponent(this.id),a.type)}},W:function(){return function(a){var m=a.target||a.srcElement;if(m){var f=
m.getAttribute("HM_fix");a=a.clientX+":"+a.clientY;if(f&&f==a)m.removeAttribute("HM_fix");else if(0<c.etrk.length&&(m=b.gb(m))&&m.length)if(f=m.length,a=m[m.length-1],1E4>f*a.split(">").length)for(a=0;a<f;a++)d.Aa(m[a]);else d.Aa(a)}}},Aa:function(a){for(var b={},f=String(a).split(">").length,l=0;l<f;l++)b[a]="",a=a.substring(0,a.lastIndexOf(">"));a=c.etrk.length;for(f=0;f<a;f++)l=decodeURIComponent(String(c.etrk[f].id)),b.hasOwnProperty(l)&&d.B(l)},B:function(a,b){h.b.a.et=1;h.b.a.ep="{id:"+a+",eventType:"+
(b||"click")+"}";h.b.h()}};h.m.c("pv-b",d.Fa);return d})();
(function(){var b=mt.d,a=mt.lang,d=mt.event,e=mt.g,m=h.k,f=h.m,l=[],n={Da:function(){c.ctrk&&(d.c(document,"mouseup",n.Oa()),d.c(window,"unload",function(){n.O()}),setInterval(function(){n.O()},m.Qa))},Oa:function(){return function(a){a=n.Ya(a);if(""!==a){var b=(m.N+"//"+m.ha+"?"+h.b.za().replace(/ep=[^&]*/,"ep="+encodeURIComponent(a))).length;b+(m.w+"").length>m.U||(b+encodeURIComponent(l.join("!")+(l.length?"!":"")).length+(m.w+"").length>m.U&&n.O(),l.push(a),(l.length>=m.Ra||/\*a\*/.test(a))&&
n.O())}}},Ya:function(g){var d=g.target||g.srcElement;if(0===m.Pa){var k=(d.tagName||"").toLowerCase();if("embed"==k||"object"==k)return""}var p;e.va?(p=Math.max(document.documentElement.scrollTop,document.body.scrollTop),k=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),k=g.clientX+k,p=g.clientY+p):(k=g.pageX,p=g.pageY);g=n.cb(g,d,k,p);var s=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:k-=s/2;break;case 2:k-=s}s=
[];s.push(k);s.push(p);s.push(g.yb);s.push(g.zb);s.push(g.Bb);s.push(a.i(g.Ab));s.push(g.Qb);s.push(g.lb);(d="a"===(d.tagName||"").toLowerCase()?d:b.Xa(d))?(s.push("a"),s.push(a.i(encodeURIComponent(d.href)))):s.push("b");return s.join("*")},cb:function(g,d,k,p){g=b.sa(d);var n=0,f=0,l=0,m=0;if(d&&(n=d.offsetWidth||d.clientWidth,f=d.offsetHeight||d.clientHeight,m=b.eb(d),l=m.left,m=m.top,a.e(d.getBBox,"Function")&&(f=d.getBBox(),n=f.width,f=f.height),"html"===(d.tagName||"").toLowerCase()))n=Math.max(n,
d.clientWidth),f=Math.max(f,d.clientHeight);return{yb:Math.round(100*((k-l)/n)),zb:Math.round(100*((p-m)/f)),Bb:e.orientation,Ab:g,Qb:n,lb:f}},O:function(){0!==l.length&&(h.b.a.et=2,h.b.a.ep=l.join("!"),h.b.h(),l=[])}},k={Ha:function(){c.ctrk&&setInterval(k.Fb,m.Eb)},Fb:function(){var a=e.H()+e.I();0<a-h.b.a.vl&&(h.b.a.vl=a)}};f.c("pv-b",n.Da);f.c("pv-b",k.Ha);return n})();
(function(){var b=mt.lang,a=mt.d,d=mt.event,e=h.k,m=+new Date,f=[],l={W:function(){return function(d){if(h.b&&h.b.K&&(d=d.target||d.srcElement)){var k=h.b.C,g=a.getAttribute(d,e.pa)!=t?r:u;if(a.getAttribute(d,e.oa)==t)if(g)l.S(l.aa(d));else{var f=a.G(d);if(b.J(k,f))l.S(l.aa(d));else for(;d.parentNode!=t;){var g=d.parentNode,f=a.G(g),m="a"===f&&b.J(k,"a")?r:u,f="button"===f&&b.J(k,"button")?r:u,p=a.getAttribute(g,e.pa)!=t?r:u;if(a.getAttribute(g,e.oa)==t&&(m||f||p)){l.S(l.aa(g));break}d=d.parentNode}}}}},
aa:function(d){var b={},g=e.La;b.id=a.getAttribute(d,g.id)||a.getAttribute(d,"id")||"";b.T=a.getAttribute(d,g.T)||a.getAttribute(d,"class")||"";b.na=a.getAttribute(d,g.na)||a.sa(d);b.content=a.getAttribute(d,g.content)||a.$a(d);b.Q=a.getAttribute(d,g.Q)||a.G(d);b.link=a.getAttribute(d,g.link)||a.getAttribute(d,"href")||"";return b},S:function(a){var d=b.i,d=[+new Date-(h.b.fa!==q?h.b.fa:m),d(a.id),d(a.T),d(a.Q),d(a.na),d(a.link),d(a.content)].join("*");l.Ea(d);b.J(["a"],a.Q)&&b.e(this.ka(),"Function")&&
this.ka()()},Ea:function(a){encodeURIComponent(f.join("!")+a).length>e.U&&(l.B(f.join("!")),f=[]);f.push(a)},B:function(a){h.b.a.et=5;h.b.a.ep=a;h.b.h()},ka:function(){return function(){f&&f.length&&(l.B(f.join("!")),f=[])}}};h.m.c("pv-b",function(){d.c(document,"click",l.W());d.c(window,"unload",l.ka())});return l})();
(function(){var b=mt.d,a=h.k,d=h.load,e=h.qa;h.m.c("pv-b",function(){var m=a.protocol+"//crs.baidu.com/";c.rec&&b.ya(function(){for(var f=0,l=c.rp.length;f<l;f++){var n=c.rp[f][0],k=c.rp[f][1],g=b.Z("hm_t_"+n);if(k&&!(2==k&&!g||g&&""!==g.innerHTML))g="",g=Math.round(Math.random()*a.w),g=4==k?m+"hl.js?"+["siteId="+c.id,"planId="+n,"rnd="+g].join("&"):m+"t.js?"+["siteId="+c.id,"planId="+n,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
g].join("&"),d(g)}})})})();(function(){var b=h.k,a=h.load,d=h.qa;h.m.c("pv-b",function(){if(c.trust&&c.vcard){var e="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+d(),"rnd="+Math.round(Math.random()*b.w),"hm=1"].join("&");a(e)}})})();
(function(){function b(){function a(d){function b(){}for(var g=r,e=0,f=0,p=t,s=t,x=d.length,y=0,A=t,e=0;e<x;e++)if(p=d[e],p.chromeVer===l){g=r;s=p.tests;y=s.length;for(f=0;f<y;f++)if(b=m[s[f].name],b()!==s[f].expect){g=u;break}if(y&&g){A={name:"360browser",type:p.type,version:p.ver};break}}return A}var b=[];b.push({ver:"8.3",type:"fast",tests:[{name:"seamlessiframe",expect:1}],chromeVer:"42"});var m={pointerevents:function(){return"maxTouchPoints"in window.navigator?1:"msMaxTouchPoints"in window.navigator||
"mozMaxTouchPoints"in window.navigator||"webkitMaxTouchPoints"in window.navigator?9:0},webgl3D:function(){for(var a="webgl ms-webgl experimental-webgl moz-webgl opera-3d webkit-3d ms-3d 3d".split(" "),d=a.length,g="",b=document.createElement("canvas"),e=u,p=0;p<d;p++)try{if(b.getContext(a[p])){e=r;g=a[p];break}}catch(f){}return e?"webgl"===g?1:9:0},seamlessiframe:function(){return"seamless"in document.createElement("iframe")?1:0},speechsynthesis:function(){return"speechSynthesis"in window?1:"webkitSpeechSynthesis"in
window||"mozSpeechSynthesis"in window||"oSpeechSynthesis"in window||"msSpeechSynthesis"in window?9:0}},f=t,l=function(){var a=navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/i);return a?a[1]:"-1"}();"-1"!==l&&(f=a(b));return f}var a=function(){var a=navigator.userAgent.toLowerCase();if(0<=a.indexOf("chrome")){var a=(a=a.match(/chrome\/(\d+)/))?a[1]:-1,e=window.document,m="track"in e.createElement("track"),e="scoped"in e.createElement("style"),f="v8Locale"in window,l=document.createElement("canvas"),
n="seamless"in document.createElement("iframe"),k=u;try{l.getContext("webgl")&&(k=r)}catch(g){}if(l=b())return"fast"===l.type?7:1;if(!k&&"31"===a)return 1;if(!(n=(n||!k)&&"38"===a))if(n=m)if(n=!e)if(n=!f){var v;a:{n=window.navigator.mimeTypes;for(v in n)if("application/vnd.chromium.remoting-viewer"===n[v].type){v=r;break a}v=u}n=!v&&46>+a}if(n)return 7;if(m&&e&&f)return 1}return-1}();return h.Ma=a})();
(function(){function b(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.V.fb()+","+h.V.ab();h.b.h()}}function a(){clearTimeout(A);var d;x&&(d="visible"==document[x]);y&&(d=!document[y]);n="undefined"==typeof d?r:d;if((!l||!k)&&n&&g)s=r,w=+new Date;else if(l&&k&&(!n||!g))s=u,p+=+new Date-w;l=n;k=g;A=setTimeout(a,100)}function d(a){var g=document,d="";if(a in g)d=a;else for(var b=["webkit","ms","moz","o"],p=0;p<b.length;p++){var e=b[p]+a.charAt(0).toUpperCase()+a.slice(1);if(e in g){d=
e;break}}return d}function e(d){if(!("focus"==d.type||"blur"==d.type)||!(d.target&&d.target!=window))g="focus"==d.type||"focusin"==d.type?r:u,a()}var m=mt.event,f=h.m,l=r,n=r,k=r,g=r,v=+new Date,w=v,p=0,s=r,x=d("visibilityState"),y=d("hidden"),A;a();(function(){var g=x.replace(/[vV]isibilityState/,"visibilitychange");m.c(document,g,a);m.c(window,"pageshow",a);m.c(window,"pagehide",a);"object"==typeof document.onfocusin?(m.c(document,"focusin",e),m.c(document,"focusout",e)):(m.c(window,"focus",e),
m.c(window,"blur",e))})();h.V={fb:function(){return+new Date-v},ab:function(){return s?+new Date-w+p:p}};f.c("pv-b",function(){m.c(window,"unload",b())});return h.V})();
(function(){var b=mt.lang,a=h.k,d=h.load,e={vb:function(e){if((window._dxt===q||b.e(window._dxt,"Array"))&&"undefined"!==typeof h.b){var f=h.b.$();d([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(f)].join(""),e)}},Kb:function(a){if(b.e(a,"String")||b.e(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Sa=e})();
(function(){function b(a,d,b,p){if(!(a===q||d===q||p===q)){if(""===a)return[d,b,p].join("*");a=String(a).split("!");for(var e,f=u,k=0;k<a.length;k++)if(e=a[k].split("*"),String(d)===e[0]){e[1]=b;e[2]=p;a[k]=e.join("*");f=r;break}f||a.push([d,b,p].join("*"));return a.join("!")}}function a(g){for(var b in g)if({}.hasOwnProperty.call(g,b)){var e=g[b];d.e(e,"Object")||d.e(e,"Array")?a(e):g[b]=String(e)}}var d=mt.lang,e=mt.o,m=mt.g,f=h.k,l=h.m,n=h.Sa,k={A:[],P:0,wa:u,r:{ma:"",page:""},init:function(){k.f=
0;l.c("pv-b",function(){k.Ta();k.Ua()});l.c("pv-d",function(){k.Va();k.r.page=""});l.c("stag-b",function(){h.b.a.api=k.f||k.P?k.f+"_"+k.P:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),k.r.ma,k.r.page].join("!")});l.c("stag-d",function(){h.b.a.api=0;k.f=0;k.P=0})},Ta:function(){var a=window._hmt||[];if(!a||d.e(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,g=0;g<arguments.length;g++){var b=arguments[g];d.e(b,"Array")&&(a.cmd[a.id].push(b),"_setAccount"===
b[0]&&(1<b.length&&/^[0-9a-f]{32}$/.test(b[1]))&&(b=b[1],a.id=b,a.cmd[b]=a.cmd[b]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},Ua:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var d=a.cmd[c.id],b=/^_track(Event|MobConv|Order|RTEvent)$/,e=0,f=d.length;e<f;e++){var l=d[e];b.test(l[0])?k.A.push(l):k.ga(l)}a.cmd[c.id]={push:k.ga}},Va:function(){if(0<k.A.length)for(var a=0,d=k.A.length;a<d;a++)k.ga(k.A[a]);k.A=t},ga:function(a){var b=a[0];if(k.hasOwnProperty(b)&&
d.e(k[b],"Function"))k[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(k.f|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],u===a||r===a))k.f|=2,h.b.ta=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){k.f|=4;h.b.a.et=0;h.b.a.ep="";h.b.a.vl=m.H()+m.I();h.b.a.kb=0;h.b.da?(h.b.a.nv=0,h.b.a.st=4):h.b.da=r;var d=h.b.a.u,b=h.b.a.su;h.b.a.u=f.protocol+"//"+document.location.host+a[1];k.wa||(h.b.a.su=document.location.href);h.b.h();h.b.a.u=d;
h.b.a.su=b;h.b.fa=+new Date}},_trackEvent:function(a){2<a.length&&(k.f|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d.i(a[1])+"*"+d.i(a[2])+(a[3]?"*"+d.i(a[3]):"")+(a[4]?"*"+d.i(a[4]):""),h.b.h())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){k.P++;for(var p=(h.b.a.cv||"*").split("!"),f=p.length;f<b-1;f++)p.push("*");p[b-1]=e+"*"+d.i(a[2])+"*"+d.i(a[3]);h.b.a.cv=p.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+
c.id,encodeURIComponent(a),c.age):h.b.Cb("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var e=d.i(a[1]);a=d.i(a[2]);if(e!==q&&a!==q){var f=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f=b(f,e,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var e=d.i(a[1]);a=d.i(a[2]);if(e!==q&&a!==q){var f=k.r.ma,f=b(f,e,2,a);k.r.ma=f}}},_setPageTag:function(a){if(!(3>a.length)){var e=d.i(a[1]);a=d.i(a[2]);if(e!==q&&a!==q){var f=k.r.page,
f=b(f,e,3,a);k.r.page=f}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?f.protocol+"//"+window.location.host+a[1]:a[1],k.wa=r)},_trackOrder:function(b){b=b[1];d.e(b,"Object")&&(a(b),k.f|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=e.stringify(b),h.b.h())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])k.f|=32,h.b.a.et=93,h.b.a.ep=a,h.b.h()},_trackRTPageview:function(b){b=b[1];d.e(b,"Object")&&(a(b),b=e.stringify(b),
512>=encodeURIComponent(b).length&&(k.f|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(d.e(b,"Object")){a(b);b=encodeURIComponent(e.stringify(b));var l=function(a){var b=h.b.a.rt;k.f|=128;h.b.a.et=90;h.b.a.rt=a;h.b.h();h.b.a.rt=b},m=b.length;if(900>=m)l.call(this,b);else for(var m=Math.ceil(m/900),p="block|"+Math.round(Math.random()*f.w).toString(16)+"|"+m+"|",s=[],x=0;x<m;x++)s.push(x),s.push(b.substring(900*x,900*x+900)),l.call(this,p+s.join("|")),s=[]}},_setUserId:function(a){a=a[1];n.vb();
n.Kb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],u===a||r===a))h.b.ua=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],u===a||r===a))h.b.K=a},_setAutoEventTrackingTags:function(a){1<a.length&&(a=a[1],d.e(a,"Array")&&(h.b.C=a))}};k.init();h.Ka=k;return h.Ka})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=r,this.a={},this.ua=this.ta=r,this.K=g.K,this.C=g.C,this.da=u,this.init())}var a=mt.url,d=mt.Ba,e=mt.la,m=mt.lang,f=mt.cookie,l=mt.g,n=mt.localStorage,k=mt.sessionStorage,g=h.k,v=h.Ma,w=h.m;b.prototype={ea:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},xa:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},
L:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.xa(b,c.dm[d]))return r}else{var e=a.ba(b);if(e&&this.ea(e,c.dm[d]))return r}return u},$:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.ea(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},ra:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.xa(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},hb:function(){if(!document.referrer)return g.p-
g.z>c.vdur?1:4;var b=u;this.L(document.referrer)&&this.L(document.location.href)?b=r:(b=a.ba(document.referrer),b=this.ea(b||"",document.location.hostname));return b?g.p-g.z>c.vdur?1:4:3},getData:function(a){try{return f.get(a)||k.get(a)||n.get(a)}catch(b){}},setData:function(a,b,d){try{f.set(a,b,{domain:this.$(),path:this.ra(),Y:d}),d?n.set(a,b,d):k.set(a,b)}catch(e){}},Cb:function(a){try{f.set(a,"",{domain:this.$(),path:this.ra(),Y:-1}),k.remove(a),n.remove(a)}catch(b){}},Ib:function(){var a,b,
d,e,f;g.z=this.getData("Hm_lpvt_"+c.id)||0;13===g.z.length&&(g.z=Math.round(g.z/1E3));b=this.hb();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<g.p-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(g.p);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=g.p,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,g.p);d=g.p===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===
c.nv&&this.L(document.location.href)&&(""===document.referrer||this.L(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},za:function(){for(var a=[],b=this.a.et,d=0,e=g.Ca.length;d<e;d++){var f=g.Ca[d],k=this.a[f];"undefined"!==typeof k&&""!==k&&("tt"!==f||"tt"===f&&0===b)&&(("ct"!==f||"ct"===f&&0===b)&&("kb"!==f||"kb"===f&&3===b))&&a.push(f+"="+encodeURIComponent(k))}switch(b){case 0:a.push("sn="+g.D);this.a.rt&&a.push("rt="+encodeURIComponent(this.a.rt));break;
case 3:a.push("sn="+g.D);break;case 5:a.push("sn="+g.D);break;case 85:a.push("sn="+g.D);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},Jb:function(){this.Ib();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=l.Db;this.a.cl=l.colorDepth+"-bit";this.a.ln=String(l.language).toLowerCase();this.a.ja=l.javaEnabled?1:0;this.a.ck=l.cookieEnabled?1:0;this.a.bs=v;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=e.jb();this.a.v="1.2.36";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+
c.id)||"");this.a.tt=document.title||"";this.a.vl=l.H()+l.I();var b=document.location.href;this.a.cm=a.l(b,g.pb)||"";this.a.cp=a.l(b,g.qb)||a.l(b,g.Nb)||"";this.a.cw=a.l(b,g.ob)||a.l(b,g.Pb)||"";this.a.ci=a.l(b,g.mb)||a.l(b,g.Mb)||"";this.a.cf=a.l(b,g.rb)||a.l(b,g.Ob)||"";this.a.cu=a.l(b,g.nb)||a.l(b,g.Lb)||""},init:function(){try{this.Jb(),0===this.a.nv?this.Hb():this.ia(".*"),h.b=this,this.Na(),w.F("pv-b"),this.Gb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+
encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(g.N+"//"+g.ha+"?"+b.join("&"))}},Gb:function(){function a(){w.F("pv-d")}this.ta?(this.da=r,this.a.et=0,this.a.ep="",this.a.vl=l.H()+l.I(),this.h(a)):a();this.fa=+new Date},h:function(a){if(this.ua){var b=this;b.a.rnd=Math.round(Math.random()*g.w);w.F("stag-b");var e=g.N+"//"+g.ha+"?"+b.za();w.F("stag-d");b.Ia(e);d.log(e,function(d){b.ia(d);m.e(a,"Function")&&a.call(b)})}},Na:function(){var b=document.location.hash.substring(1),
d=RegExp(c.id),e=a.ba(document.referrer)===g.Ja?1:0,f=a.l(b,"jn"),k=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&e&&k)&&(this.a.rnd=Math.round(Math.random()*g.w),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",g.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(b,f))},Ia:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),
b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},ia:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},Hb:function(){var a=this,b=k.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),e=function(b){d.log(g.N+"//"+decodeURIComponent(b),function(b){a.ia(b)})},
f=0,l=b.length;f<l;f++)e(b[f])}};return new b})();var B=h.k,C=h.load;if(c.apps){var D=[B.protocol,"//ers.baidu.com/app/s.js?"];D.push(c.apps);C(D.join(""))}(function(){var b=mt.event,a=mt.lang,d=h.k;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.a.kb=a.wb()?h.b.a.kb:0;var e=function(){h.b.a.et=85;h.b.a.ep=h.b.a.kb;h.b.h()};b.c(document,"keyup",function(){h.b.a.kb++});b.c(window,"unload",function(){e()});setInterval(e,d.xb)}})();var E=h.k,F=h.load;
c.pt&&F([E.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));var G=h.k,H=h.load;c.lxb&&H([G.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var I=h.load,J=h.k.protocol;if(c.qiao){for(var K=[J+"//goutong.baidu.com/site/"],L=c.id,M=5381,N=L.length,O=0;O<N;O++)M=(33*M+Number(L.charCodeAt(O)))%4294967296;2147483648<M&&(M-=2147483648);K.push(M%1E3+"/");K.push(c.id+"/b.js");K.push("?siteId="+c.qiao);I(K.join(""))}
(function(){var b=mt.event,a=mt.o;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var d=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},e=function(){var b;b=d("navigation");var e=d("request");b={netAll:e.start-b.start,netDns:d("domainLookup").value,netTcp:d("connect").value,srv:d("response").start-e.start,dom:performance.timing.domInteractive-performance.timing.fetchStart,loadEvent:d("loadEvent").end-
b.start};h.b.a.et=87;h.b.a.ep=a.stringify(b);h.b.h()};b.c(window,"load",function(){setTimeout(e,500)})}}catch(m){}})();
(function(){var b=mt.g,a=mt.lang,d=mt.event,e=mt.o;if("undefined"!==typeof h.b&&(c.med||(!b.va||7<b.ub)&&c.cvcc)){var m,f,l,n,k=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},g=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},v=function(b,d){var f={};f.n=m;f.t="clk";f.v=b;if(d){var k=d.getAttribute("href"),g=d.getAttribute("onclick")?""+d.getAttribute("onclick"):t,n=d.getAttribute("id")||"";l.test(k)?(f.sn="mediate",
f.snv=k):a.e(g,"String")&&l.test(g)&&(f.sn="wrap",f.snv=g);f.id=n}h.b.a.et=86;h.b.a.ep=e.stringify(f);h.b.h();for(f=+new Date;400>=+new Date-f;);};if(c.med)f="/zoosnet",m="swt",l=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,n={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(l.test(e)||l.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){f="/other-comm";m="other";l=c.cvcc.q||q;var w=c.cvcc.id||q;n={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f,g=0,m=b.length;g<m;g++)d=b[g],l!==q?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),w?(d=d.getAttribute("id"),(l.test(e)||l.test(f)||w.test(d))&&
a.push(b[g])):(l.test(e)||l.test(f))&&a.push(b[g])):w!==q&&(d=d.getAttribute("id"),w.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof n&&"undefined"!==typeof l){var p;f+=/\/$/.test(f)?"":"/";var s=function(b,d){if(p===d)return v(f+b,d),u;if(a.e(d,"Array")||a.e(d,"NodeList"))for(var e=0,g=d.length;e<g;e++)if(p===d[e])return v(f+b+"/"+(e+1),d[e]),u};d.c(document,"mousedown",function(b){b=b||window.event;p=b.target||b.srcElement;var d={};for(g(n,function(b,e){d[b]=a.e(e,"Function")?e():document.getElementById(e)});p&&
p!==document&&g(d,s)!==u;)p=p.parentNode})}}})();(function(){var b=mt.d,a=mt.lang,d=mt.event,e=mt.o;if("undefined"!==typeof h.b&&a.e(c.cvcf,"Array")&&0<c.cvcf.length){var m={Ga:function(){for(var a=c.cvcf.length,e,n=0;n<a;n++)(e=b.Z(decodeURIComponent(c.cvcf[n])))&&d.c(e,"click",m.X())},X:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=e.stringify(a);h.b.h()}}};b.ya(function(){m.Ga()})}})();
(function(){var b=mt.event,a=mt.o;if(c.med&&"undefined"!==typeof h.b){var d=+new Date,e={n:"anti",sb:0,kb:0,clk:0},m=function(){h.b.a.et=86;h.b.a.ep=a.stringify(e);h.b.h()};b.c(document,"click",function(){e.clk++});b.c(document,"keyup",function(){e.kb=1});b.c(window,"scroll",function(){e.sb++});b.c(window,"unload",function(){e.t=+new Date-d;m()});b.c(window,"load",function(){setTimeout(m,5E3)})}})();})();
