<?php
if(!isset($GLOBALS['_vars'])) $GLOBALS['_vars'] = array(); 
$fields = array();
?>
<div id="message">
	<div class="title"><i></i><strong>留言</strong><i></i></div>
	<div class="centent">
    
    
		<form action="/plus/diy.php" enctype="multipart/form-data" method="post">
<input type="hidden" name="action" value="post" />
<input type="hidden" name="diyid" value="1" />
<input type="hidden" name="do" value="2" />

			<select name="u_type" id="u_type" style="display:none;"><option value="1" selected="">官网留言</option><option value="2">工商注册</option><option value="3">代理记账</option></select>
		<ul>
			<dt>
				<li><label>姓名</label><input type="text"  name='xm' id='xm' class="inp"></li>
				<li><label>电话</label><input type="text" name='dianhua' id='dianhua'  class="inp"></li>
				<li><label>需求</label><select  name='xuqiu' id="xuqiu"> 
	<option value='工商服务'>工商服务</option>
<option value='做账报税'>做账报税</option>
<option value='内帐整理'>内帐整理</option>
<option value='知识产权'>知识产权</option>
<option value='资质代办'>资质代办</option>
<option value='会计培训'>会计培训</option>
<option value='企业贷款'>企业贷款</option>
<option value='出口退税'>出口退税</option>
 
		      				</select>
				</li>
				<div class="clear"></div>
				<textarea name="body" id="body" class="inp" placeholder="请输入留言内容，收到信息后我们会及时与您联系！您也可直接拨打我们的热线电话：400 8921 977 或添加微信13673353697咨询"></textarea>
			</dt>
            <input type="hidden" name="dede_fields" value="xm,text;dianhua,text;xuqiu,select;lynr,text" />
<input type="hidden" name="dede_fieldshash" value="80ef325871e7c4e63b25f385a214a6ca" /></table>

			<dd><input class="submit" type="submit" name='lynr' id='lynr' value="提交"></dd>
			<div class="mess_tl"></div>
			<div class="mess_br"></div>
		</ul>
		</form>
	</div>
</div>
	<!-- 网站底部 -->
		<!-- 省高赔安高 -->
	<div class="feate ct">
		<ul>
			<li>
				<dt class="fea1"></dt>
				<dd><strong>省心省力省钱</strong><p>明码标价支付及信息安全</p></dd>
			</li>
			<li>
				<dt class="fea2"></dt>
				<dd><strong>专业高效</strong><p>服务出问题全程跟进</p></dd>
			</li>
			<li>
				<dt class="fea3"></dt>
				<dd><strong>报账出错全额赔</strong><p>报账出错100%全额赔付</p></dd>
			</li>
			<li>
				<dt class="fea4"></dt>
				<dd><strong>安全保密</strong><p>让您的财产安全又保密</p></dd>
			</li>
			<li>
				<dt class="fea5"></dt>
				<dd><strong>一对一服务</strong><p>服务全程进行信息化监控</p></dd>
			</li>
			<div class="clear"></div>
		</ul>
	</div>
	<!-- 网站底部 -->
	<div id="footer">
		<div class="footer ct">
			<div class="foot_l">
				<dl>
					<dt>工商服务</dt>
                     <?php
$atts = array();
$atts['tagname'] = 'channelartlist';
$atts['typeid'] = '9,10,11,30';
$blockValue = MakePublicTag($atts,$this->refObj,$fields); 
if(is_array($blockValue) && count($blockValue) > 0){
foreach( $blockValue as $key=>$fields )
{
?>
					<dd><a href="<?php echo $fields['typeurl']; ?>" target="_blank"><?php echo $fields['typename']; ?></a></dd>
						<?php
}
}
?>
				</dl>
				<dl>
					<dt>做账服务</dt>
                     <?php
$atts = array();
$atts['tagname'] = 'channelartlist';
$atts['typeid'] = '12,13,32';
$blockValue = MakePublicTag($atts,$this->refObj,$fields); 
if(is_array($blockValue) && count($blockValue) > 0){
foreach( $blockValue as $key=>$fields )
{
?>
					<dd><a href="<?php echo $fields['typeurl']; ?>" target="_blank"><?php echo $fields['typename']; ?></a></dd>
						<?php
}
}
?>
				</dl>
				<dl>
					<dt>知识产权</dt>
                     <?php
$atts = array();
$atts['tagname'] = 'channelartlist';
$atts['typeid'] = '14,15,16,33,34';
$blockValue = MakePublicTag($atts,$this->refObj,$fields); 
if(is_array($blockValue) && count($blockValue) > 0){
foreach( $blockValue as $key=>$fields )
{
?>
					<dd><a href="<?php echo $fields['typeurl']; ?>" target="_blank"><?php echo $fields['typename']; ?></a></dd>
						<?php
}
}
?>
				</dl>
				<dl>
					<dt>新闻资讯</dt>
                     <?php
$atts = array();
$atts['tagname'] = 'channel';
$atts['type'] = 'son';
$atts['typeid'] = '22';
$blockValue = MakePublicTag($atts,$this->refObj,$fields); 
if(is_array($blockValue) && count($blockValue) > 0){
foreach( $blockValue as $key=>$fields )
{
?>
					<dd><a href="[field:typeurl/]" target="_blank">[field:typename/]</a></dd>
					<?php
}
}
?>
				</dl>
				<dl>
					<dt>了解我们</dt>
                    <?php
$atts = array();
$atts['tagname'] = 'channelartlist';
$atts['typeid'] = '1,2';
$blockValue = MakePublicTag($atts,$this->refObj,$fields); 
if(is_array($blockValue) && count($blockValue) > 0){
foreach( $blockValue as $key=>$fields )
{
?>
					<dd><a href="<?php echo $fields['typeurl']; ?>" target="_blank"><?php echo $fields['typename']; ?></a></dd>
					<?php
}
}
?>
				</dl>
			</div>
			<div class="foot_c"><img src="/templets/default/css/2wm.jpg"><p>创业不轻松<br>扫码更成功<br>关注达丰财务微信</p></div>
			<!--<div class="foot_c2"><img src="/templets/default/css/2wb.png"><p>创业不容易<br>扫码更给力<br>关注达丰财务微博</p></div> -->
			<div class="foot_r">
				<dl>
					<dt class="i fl"></dt>
					<dd class="bt_phone fr"><strong><?php echo $GLOBALS['cfg_tel']; ?></strong><p>周一至周日 8:00-22:00</p></dd>
				</dl>
				<div class="clear"></div>
				<dl>
					<a href="<?php echo $GLOBALS['cfg_baidu']; ?>" target="_blank"><dt class="em fl"></dt></a>
					<dd class="bt_qq fr"><strong><?php echo $GLOBALS['cfg_qq']; ?></strong></dd>
				</dl>
				<div class="clear"></div>
			</div>
			<div class="bottom">Copyright © 2019 河南达丰财务管理有限公司. All Rights Reserved    备案号:<a href="http://www.miitbeian.gov.cn"}" target="_blank">豫ICP备12000668号-5</a></div>
		</div>
	</div>

<!-- 左边栏 -->


<!-- 侧边栏 -->
<div class="side">
	<ul>
		<li><div onclick="goTop()" class="sidetop side1"></div></li>
		<li><a href="<?php echo $GLOBALS['cfg_baidu']; ?>" target="_blank"><div class="sidebox side2"><span>客服中心</span></div></a></li>
		<li class="sider_h"><a><div class="sidebox side3"></div></a><img src="/templets/default/css/sider_2wm.png" class="sider_2wm"></li>
		<li><a href="javascript:void(0);"><div class="sidebox side4"><span><?php echo $GLOBALS['cfg_tel']; ?></span></div></a></li>
		<li><a href="<?php echo $GLOBALS['cfg_baidu']; ?>" target="_blank"><div class="sidebox side5" style="width: 60px; opacity: 0.8; background-color: rgb(77, 77, 77); border-radius: 0px;">
					<span><?php echo $GLOBALS['cfg_qq']; ?></span></div></a></li>
		<li><a href="<?php echo $GLOBALS['cfg_baidu']; ?>" target="_blank"><div class="sidebox side6" style="width: 60px; opacity: 0.8; background-color: rgb(77, 77, 77); border-radius: 0px 0px 0px 25px;"><span>投诉建议</span></div></a></li>
	</ul>
</div>
<script type="text/javascript">
//左侧栏
$(window).resize(function() {
	wd = $(document.body).width()>=1400?1:0; 
	setWidth(wd);
}); 
$(window).load(function() {
	wd = $(document.body).width()>=1400?1:0; 
	setWidth(wd);
	$(".sider_left").fadeIn(100);
}); 
function setWidth(wd){
	if(wd==1){
		$(".sider_left").removeClass("sider_left_mini");
		$(".sider_left img").attr("src","/templets/default/css/sider_left.png");
	}else{
		$(".sider_left").addClass("sider_left_mini");
		$(".sider_left img").attr("src","/templets/default/css/sider_left_mini.png");
	}
}
$(".sider_left").hover(function(){
	setWidth(1);
},function(){
	if($(document.body).width()<1400)setWidth(0);
});

$(".sider_lx").click(function(){
	$(".sider_left").hide();
})

//右侧栏
$(document).ready(function() {
	$(".side ul li").hover(function() {
		var wh=135;
		var rd=0;
		if($(this).index()==2)
			wh=60;
		if($(this).index()==3)
			wh=170;
		else if($(this).index()==4)
			wh=157;
		$(this).find(".sidebox").stop().animate({
			"width" : wh
		}, 50).css({
			"opacity" : "1",
			"filter" : "Alpha(opacity=100)",
			"background-color" : "#0099E6",
			"border-radius" : "0 0 0 0"
		})
	}, function() {
		var rd=$(this).index()==5?25:0;
		$(this).find(".sidebox").stop().animate({
			"width" : "60px"
		}, 50).css({
			"opacity" : "0.8",
			"filter" : "Alpha(opacity=80)",
			"background-color" : "#4D4D4D",
			"border-radius" : "0 0 0 "+rd+"px"
		})
	});

});

//回到顶部
function goTop(){
	$('html,body').animate({'scrollTop':0},600);
}
</script>


<script type="text/javascript" src="/templets/default/css/public.js"></script>
<script src="/templets/default/css/dyfrom.js" type="text/javascript"></script>
<script src="/templets/default/css/bootstrap.min.js"></script>
<script src="/templets/default/css/wow.min.js"></script>
<script src="/templets/default/css/site.js"></script>
<!-- 超链接 -->
<script type="text/javascript" src="/templets/default/css/69322.js"></script>
<script language="javascript" src="/templets/default/css/LsJS.aspx"></script><link href="/templets/default/css/JS5.css" rel="stylesheet" type="text/css"><div id="LRdiv0" style="display:none;"></div><div id="LRdiv1" style="display:none;"></div>
<script type="text/javascript" charset="utf-8" async="" src="/templets/default/css/lxb.js"></script>


<!-- /超链接 -->
	

<script type="text/javascript" src="/templets/default/css/public.js"></script>
<script src="/templets/default/css/dyfrom.js" type="text/javascript"></script>






<!-- 百度统计、商桥 -->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?fddd79c6f7d10b8e0f47ab942c1281f4";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<!-- 百度统计、商桥 end-->

<!-- 360自动收录代码 -->
<script>
(function(){
var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?ce6d2f8e466fe0148f300610820b6ec6":"https://jspassport.ssl.qhimg.com/11.0.1.js?ce6d2f8e466fe0148f300610820b6ec6";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();
</script>


<!-- CNZZ统计 -->
<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1277700541'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s23.cnzz.com/z_stat.php%3Fid%3D1277700541' type='text/javascript'%3E%3C/script%3E"));</script>

 <!--信用 -->
<script src="//baike.shuidi.cn/wiki/trusted-link.js?digest=d766f16802345d86d569c164a9f05f40&link_type=1"></script>