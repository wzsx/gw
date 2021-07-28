<?php

class ping_RPC2{
	
	var $url;
	var $param1;
	var $param2;
	var $param3;
	var $param4;
	var $xml,$headers;

	var $api = 'http://data.zz.baidu.com/urls';

	function makexml(){
		global $cfg_soft_lang;
		$this->xml = '<?xml version="1.0" encoding="UTF-8"?>
		<methodCall>
			<methodName>weblogUpdates.extendedPing</methodName>
			<params>
				<param>
					<value><string>'.$this->param1.'</string></value>
				</param>
				<param>
					<value><string>'.$this->param2.'</string></value>
				</param>
				<param>
					<value><string>'.$this->param3.'</string></value>
				</param>
				<param>
					<value><string>'.$this->param4.'</string></value>
				</param>
			</params>
		</methodCall>';
		if($cfg_soft_lang=='gb2312'){
			$this->xml = gb2utf8($this->xml);
		}
	}
	
	function headers(){
		$this->headers = array( 
			"POST ".$this->url." HTTP/1.0",
			"User-Agent: Ping Plugin by qinjinpeng cracked by yange",
			"Content-type: text/xml; charset=\"utf-8\"", 
			"Accept: text/xml", 
			"Content-length: ".strlen($this->xml) 
		);
	}
	
	function ping(){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $this->url);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_HEADER, 1);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $this->headers);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $this->xml);
		curl_setopt($ch, CURLOPT_TIMEOUT, 25);
		$output = curl_exec($ch);
		curl_close($ch);
		return $output;
	}
	
	function baidutui(){
		global $cfg_ping_tui, $cfg_ping_tuitoken;
		$this->api .= '?site='.$_SERVER['SERVER_NAME'].'&token='.$cfg_ping_tuitoken;
		$arcurl = $this->param3;
		$ch = curl_init();
		$options =  array(
			CURLOPT_URL => $this->api,
			CURLOPT_POST => true,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_POSTFIELDS => $arcurl,
			CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
		);
		curl_setopt_array($ch, $options);
		$output = curl_exec($ch);
		curl_close($ch);
		$output = json_decode($output, true);
		if($output){
			$output['status'] = 1;
			return $output;
		}else{
			$result['status'] = -1;
			$result['errCode'] = 0;
			return $result;
		}
	}

	function dedeping($id){
		global $dsql,$cfg_webname,$cfg_basehost,$cfg_cmspath,$cfg_multi_site,$cfg_ping_urls;
		$id = intval($id);
		$time = time();
		$dsql->ExecuteNoneQuery("insert into #@__pinglog (aid, status, tuistatus, remain, uptime) values ($id, 1, 0, 0, $time)");
		$one = GetOneArchive($id);
		$arcurl = $cfg_multi_site=='Y'?$one['arcurl']:$cfg_basehost.$one['arcurl'];

		$this->param1 = $cfg_webname;
		$this->param2 = $cfg_basehost;
		$this->param3 = $arcurl;
		$this->param4 = $cfg_basehost.$cfg_cmspath.'/sitemap.xml';

		$errCode = 0;
		$result = $this->baidutui();
		if($result['status']==1){
			$dsql->ExecuteNoneQuery("update #@__pinglog set tuistatus='1',remain='$result[remain]' where aid=$id");
		}else{
			$errCode = $result['errCode'];
			$dsql->ExecuteNoneQuery("update #@__pinglog set tuistatus='$result[errCode]',remain='0' where aid=$id");
		}
		if(!empty($cfg_ping_urls)){
			$urls = explode("\n",$cfg_ping_urls);
			foreach($urls as $key => $url){
				$this->url = trim($url);
				if(empty($this->url)) continue;
				$this->makexml();
				$this->headers();
				$rs = $this->ping();
				if( strpos($rs,'200 OK')===false || $errCode==100 ){
					$dsql->ExecuteNoneQuery("update #@__pinglog set status=0 where aid=$id");
				}
			}
		}
		
	}
	
}

if(defined('DEDEADMIN') || mt_rand(0,10)==0){
	$test_install = DEDEDATA."/module/f8386d67d2a0abe1340f31168481c175-readme.php";
	if(is_file($test_install)){
		$pgr = $dsql->GetOne("select * from #@__pinglog order by aid desc");
		if($pgr){
			$pgr_max_aid = $pgr['aid'];
			$pgr_dedeping = $dsql->GetOne("select * from #@__arctiny where id>$pgr_max_aid AND arcrank=0 order by id asc");
			if(mt_rand(0,100)){
				$dsql->ExecuteNoneQuery("delete from #@__pinglog where aid<$pgr_max_aid-10000");
			}
		}else{
			$pgr_dedeping = $dsql->GetOne("select * from #@__arctiny where arcrank=0 order by id desc");
		}
		if($pgr_dedeping){
			$rpc = new ping_RPC2;
			$rpc->dedeping($pgr_dedeping['id']);
		}
	}
}
