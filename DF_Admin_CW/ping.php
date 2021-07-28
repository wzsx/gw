<?php

/**
 * @version    $Id cjx.php 1001 2011-8-14 qjp $
 * @copyright  Copyright (c) 2010-2011,qjp
 * @license    This is NOT a freeware, use is subject to license terms
 * @link       http://www.qjp.name
 */

require(dirname(__FILE__)."/config.php");

$configfile = DEDEDATA.'/config.cache.inc.php';
if(!function_exists('ReWriteConfig')){
	function ReWriteConfig()
	{
		global $dsql,$configfile;
		if(!is_writeable($configfile))
		{
			echo "配置文件'{$configfile}'不支持写入，无法修改系统配置参数！";
			exit();
		}
		$fp = fopen($configfile,'w');
		flock($fp,3);
		fwrite($fp,"<"."?php\r\n");
		$dsql->SetQuery("SELECT `varname`,`type`,`value`,`groupid` FROM `#@__sysconfig` ORDER BY aid ASC ");
		$dsql->Execute();
		while($row = $dsql->GetArray())
		{
			if($row['type']=='number')
			{
				if($row['value']=='') $row['value'] = 0;
				fwrite($fp,"\${$row['varname']} = ".$row['value'].";\r\n");
			}
			else
			{
				fwrite($fp,"\${$row['varname']} = '".str_replace("'",'',$row['value'])."';\r\n");
			}
		}
		fwrite($fp,"?".">");
		fclose($fp);
	}
}

if(!defined('PINGRPC2')){
	$extpath = DEDEINC.'/common.inc.php';
	$fp = @fopen($extpath, 'r');
	$content = @fread($fp, filesize($extpath));
	@fclose($fp);
	$content = trim($content);
    $content = substr($content, -2) == '?>' ? substr($content, 0, -2) : $content;
	$content .= "\r\n\r\n\r\n//Add by yange http://blog.loldan.com\r\n";
    $content .= "define('PINGRPC2', 1);\r\n";
    $content .= "@include_once DEDEINC.'/ping.RPC2.php';\r\n";
	if($fp = @fopen($extpath, 'w'))
	{
		@fwrite($fp, trim($content));
		@fclose($fp);
	}else{
		echo '安装失败！请设置'.$extpath.'可写权限';
		exit();
	}
}

$ac = empty($ac)?'':$ac;

switch($ac){
	
	case 'setting':
		if(!empty($_POST)){
			$dsql->ExecuteNoneQuery("UPDATE `#@__sysconfig` SET `value`='$urls' WHERE varname='cfg_ping_urls' ");
			$dsql->ExecuteNoneQuery("UPDATE `#@__sysconfig` SET `value`='$ping_tui' WHERE varname='cfg_ping_tui' ");
			$dsql->ExecuteNoneQuery("UPDATE `#@__sysconfig` SET `value`='$ping_tuitoken' WHERE varname='cfg_ping_tuitoken' ");
			ReWriteConfig();
			showmsg('成功更改ping配置','ping.php?ac=setting');
			exit;
		}
		$stime = GetMkTime(MyDate("Y-m-d 00:00:00", time()));
		$dsql->SetQuery("SELECT count(*) as num FROM `#@__pinglog` WHERE uptime>$stime");
		$dsql->Execute();
		$row = $dsql->GetArray();
		$todayNum = isset($row['num'])?$row['num']:0;
		$dsql->SetQuery("SELECT * FROM `#@__pinglog` WHERE uptime>$stime order by aid desc");
		$dsql->Execute();
		if($row = $dsql->GetArray()){
			$remain = $row['remain'];
		}else{
			$remain = -1;
		}
		
		include DedeInclude('templets/ping_setting.htm');
	break;
	
	case 'log':
		$sql = "select * from #@__pinglog p left join #@__archives a ON p.aid=a.id order by p.aid desc";
		require DEDEINC.'/datalistcp.class.php';
		$dlist = new DataListCP();
		$dlist->SetParameter('ac','log');
		$dlist->SetTemplet(DEDEADMIN."/templets/ping_log.htm");
		$dlist->SetSource($sql);
		$dlist->display();
	break;
	
	
	
	
}
