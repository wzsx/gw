<p>此插件须在阿里云平台开通云短信服务</p>
<p>使用此插件要注意一下几点：</p>
<p>1、请到阿里云短信 <a href="https://dysms.console.aliyun.com/dysms.htm" target="_blank">https://dysms.console.aliyun.com/dysms.htm</a> 申请AccessKeyId，accessKeySecret</p>
<p>2、在阿里云短信新增短信签名和短信模板，按照阿里云规则填写，以免审核不通过</p>
<p>3、由于该模块文件过多，安装包过大，需要手工修改php环境配置文件：php.ini，具体步骤如下：<br/>
    1) 打开php.ini文件，进入编辑模式；<br/>
    2) 将 post_max_size = 8M 值改为 20M，意思是允许最大的post提交大小<br/>
    3) 将 upload_max_filesize = 2M 值改为 20M，意思是允许最大的单个文件上传大小<br/>
    4) 重启php，再重新上传模块<br/>
</p>
<p style='line-height:150%'><p style='line-height:150%'>请保留版权，谢谢配合</p></p>