<?php
/**
 *
 * 自定义表单
 *
 * @version        $Id: diy.php 1 15:38 2010年7月8日Z tianya $
 * @package        DedeCMS.Site
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__)."/../include/common.inc.php");

require_once(dirname(__FILE__)."/class.phpmailer.php");

$diyid = isset($diyid) && is_numeric($diyid) ? $diyid : 0;
$action = isset($action) && in_array($action, array('post', 'list', 'view')) ? $action : 'post';
$id = isset($id) && is_numeric($id) ? $id : 0;

if(empty($diyid))
{
    showMsg('非法操作!', 'javascript:;');
    exit();
}

require_once DEDEINC.'/diyform.cls.php';
$diy = new diyform($diyid);

/*----------------------------
function Post(){ }
---------------------------*/
if($action == 'post')
{
    if(empty($do))
    {
        $postform = $diy->getForm(true);
        include DEDEROOT."/templets/plus/{$diy->postTemplate}";
        exit();
    }
    elseif($do == 2)
    {
        $dede_fields = empty($dede_fields) ? '' : trim($dede_fields);
        $dede_fieldshash = empty($dede_fieldshash) ? '' : trim($dede_fieldshash);
        if(!empty($dede_fields))
        {
            if($dede_fieldshash != md5($dede_fields.$cfg_cookie_encode))
            {
                showMsg('数据校验不对，程序返回', '-1');
                exit();
            }
        }
        $diyform = $dsql->getOne("select * from #@__diyforms where diyid='$diyid' ");
        if(!is_array($diyform))
        {
            showmsg('自定义表单不存在', '-1');
            exit();
        }

        $addvar = $addvalue = '';

        if(!empty($dede_fields))
        {

            $fieldarr = explode(';', $dede_fields);
            if(is_array($fieldarr))
            {
                foreach($fieldarr as $field)
                {
                    if($field == '') continue;
                    $fieldinfo = explode(',', $field);
                    if($fieldinfo[1] == 'textdata')
                    {
                        ${$fieldinfo[0]} = FilterSearch(stripslashes(${$fieldinfo[0]}));
                        ${$fieldinfo[0]} = addslashes(${$fieldinfo[0]});
                    }
                    else
                    {
                        ${$fieldinfo[0]} = GetFieldValue(${$fieldinfo[0]}, $fieldinfo[1],0,'add','','diy', $fieldinfo[0]);
                    }
                    $addvar .= ', `'.$fieldinfo[0].'`';
                    $addvalue .= ", '".${$fieldinfo[0]}."'";
                }
            }

        }

        $query = "INSERT INTO `{$diy->table}` (`id`, `ifcheck` $addvar)  VALUES (NULL, 0 $addvalue); ";
		
		//判断手机号码是否正确
          if(!eregi("^1[0-9]{10}$",$tel))
           {
           showMsg('请正确填写手机号码', '-1');
            exit();
            }
		
		
		if( $diy->table == 'dede_diyform3'){
			//发送邮件到
			$mail_cnt = "<h1>企业核名信息咨询：</h1>
			
		    <h3>核名信息：$city $wordsize $industry $companytype </h3>
			
            <h3>姓名：$name</h3>
            <h3>手机：<a href=http://www.kuaiqitong.com/s?wd=$order_tel>$tel</a></h3>
            
            <h3>所提交的页面：首页</h3>";
			if( ! sendMail("姓名 $name",$mail_cnt)) $failmsg = "<br/>但邮件发送失败";
		}

        if($dsql->ExecuteNoneQuery($query))
        {
            $id = $dsql->GetLastID();
            if($diy->public == 2)
            {
                //diy.php?action=view&diyid={$diy->diyid}&id=$id
                $goto = "diy.php?action=list&diyid={$diy->diyid}";
                $bkmsg = '发布成功，现在转向表单列表页...';
            }
            else
            {
                $goto = !empty($cfg_cmspath) ? $cfg_cmspath : '/';
                $bkmsg = '发布成功，请等待管理员处理...';
            }
            if($diy->table=='dede_diyform3'){
		    showmsg($bkmsg,'-1');//-1是提交后页面返回上一页
	    
	    }
        }
    }
}
/*----------------------------
function list(){ }
---------------------------*/
else if($action == 'list')
{
    if(empty($diy->public))
    {
        showMsg('后台关闭前台浏览', 'javascript:;');
        exit();
    }
    include_once DEDEINC.'/datalistcp.class.php';
    if($diy->public == 2)
        $query = "SELECT * FROM `{$diy->table}` ORDER BY id DESC";
    else
        $query = "SELECT * FROM `{$diy->table}` WHERE ifcheck=1 ORDER BY id DESC";

    $datalist = new DataListCP();
    $datalist->pageSize = 10;
    $datalist->SetParameter('action', 'list');
    $datalist->SetParameter('diyid', $diyid);
    $datalist->SetTemplate(DEDEINC."/../templets/plus/{$diy->listTemplate}");
    $datalist->SetSource($query);
    $fieldlist = $diy->getFieldList();
    $datalist->Display();
}
else if($action == 'view')
{
    if(empty($diy->public))
    {
        showMsg('后台关闭前台浏览' , 'javascript:;');
        exit();
    }

    if(empty($id))
    {
        showMsg('非法操作！未指定id', 'javascript:;');
        exit();
    }
    if($diy->public == 2)
    {
        $query = "SELECT * FROM {$diy->table} WHERE id='$id' ";
    }
    else
    {
        $query = "SELECT * FROM {$diy->table} WHERE id='$id' AND ifcheck=1";
    }
    $row = $dsql->GetOne($query);

    if(!is_array($row))
    {
        showmsg('你访问的记录不存在或未经审核', '-1');
        exit();
    }

    $fieldlist = $diy->getFieldList();
    include DEDEROOT."/templets/plus/{$diy->viewTemplate}";
}

function sendMail($title,$body){
	//发送邮件的过程,kim添加
	$mail = new PHPMailer();

	$mail->IsHTML(true);					// 是否HTML格式邮件
	$mail->CharSet = "utf-8";				// 这里指定字符集！
	$mail->Encoding = "base64"; 

	$mail->IsSMTP();					// 启用SMTP
	$mail->Host = "smtp.qq.com";			//SMTP服务器
	$mail->SMTPAuth = true;					//开启SMTP认证
	$mail->Username = "2016497831@qq.com";			// SMTP用户名
	$mail->Password = "fucdsichylexcagi";				// SMTP密码

	$mail->From = "2016497831@qq.com";			//发件人地址
	$mail->FromName = "邮件服务器";				//发件人

	$mail->AddAddress("2016497831@qq.com", "管理1");	//添加收件人
	$mail->AddAddress("2016497831@qq.com", "管理2");	//添加收件人

	$mail->WordWrap = 50;					//设置每行字符长度
	/** 附件设置
	$mail->AddAttachment("/var/tmp/file.tar.gz");		// 添加附件
	$mail->AddAttachment("/tmp/image.jpg", "new.jpg");	// 添加附件,并指定名称
	*/
	$mail->IsHTML(true);					// 是否HTML格式邮件

	$mail->Subject = $title;			//邮件主题
	$mail->Body    = $body;		//邮件内容
	$mail->AltBody = "This is the body in plain text for non-HTML mail clients";	//邮件正文不支持HTML的备用显示

	if(!$mail->Send()) return false;
	else return true;
}