<?php
$z[0]=Array("field","",186,205);
$z[0][4]=array();
$z[0][4]['name']="title";
$z[1]=Array("global","",206,232);
$z[1][4]=array();
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",274,303);
$z[2][4]=array();
$z[2][4]['name']="keywords";
$z[3]=Array("field","",342,400);
$z[3][4]=array();
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1590,1625);
$z[4][4]=array();
$z[4][4]['filename']="head.htm";
$z[5]=Array("include","",2174,2210);
$z[5][4]=array();
$z[5][4]['filename']="head2.htm";
$z[6]=Array("include","",2243,2279);
$z[6][4]=array();
$z[6][4]['filename']="head1.htm";
$z[7]=Array("arclist","\r\n													<li class=\"on\">\r\n						<dt><label><a target=\"_blank\" href=\"[field:arcurl /]\">[field:title /]</a></label><i class=\"fr\">[field:pubdate function=\"GetDateMK(@me)\"/]</i></dt>\r\n						<dd>　　[field:description function='cn_substr(Html2text(\"@me\").\"...\",160)'/]...</dd>\r\n					</li>\r\n                    ",22053,22432);
$z[7][4]=array();
$z[7][4]['titlelen']="40";
$z[7][4]['limit']="0,1";
$z[7][4]['typeid']="22";
$z[8]=Array("arclist","\r\n					 												<li><dt><label><a target=\"_blank\" href=\"[field:arcurl /]\">[field:title /]</a></label><i class=\"fr\">[field:pubdate function=\"GetDateMK(@me)\"/]</i></dt></li>\r\n																	",22456,22716);
$z[8][4]=array();
$z[8][4]['titlelen']="40";
$z[8][4]['limit']="1,3";
$z[8][4]['typeid']="22";
$z[9]=Array("arclist","\r\n						<li><i></i><a href=\"http://wpa.qq.com/msgrd?v=3&uin=244146819&site=qq&menu=yes\" target=\"_blank\">[field:title /]</a>\r\n						<a href=\"http://wpa.qq.com/msgrd?v=3&uin=244146819&site=qq&menu=yes\" target=\"_blank\" class=\"more fr\">在线解答</a></li>\r\n                        \r\n						 ",23071,23422);
$z[9][4]=array();
$z[9][4]['titlelen']="40";
$z[9][4]['row']="20";
$z[9][4]['typeid']="28";
$z[10]=Array("include","",23722,23759);
$z[10][4]=array();
$z[10][4]['filename']="footer.htm";

?>