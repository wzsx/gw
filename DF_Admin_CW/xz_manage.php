<?php
set_time_limit(0);
require_once(dirname(__FILE__) . "/config.php");
require_once(DEDEINC . "/oxwindow.class.php");
require_once(DEDEINC . "/channelunit.class.php");
require_once(DEDEADMIN . "/inc/inc_archives_functions.php");
$type = isset($_POST['type']) ? $_POST['type'] : '';
$nowRow = $dsql->GetOne("SELECT * FROM `#@__apizl_setting` WHERE `key`='xz_now_setting'");
$historyRow = $dsql->GetOne("SELECT * FROM `#@__apizl_setting` WHERE `key`='xz_history_setting'");
$urlRow = $dsql->GetOne("SELECT * FROM `#@__apizl_setting` WHERE `key`='xz_url_setting'");
$dsql->SetQuery("SELECT * FROM `#@__archives` order by id desc limit 0,50");
$dsql->Execute('dd');
$allRow = [];
while ($row = $dsql->GetArray('dd')) {
    $stateArray = getstate($row['id']);
//    $row['history_state'] = $stateArray['history'] == 1 ? '历史已推送' : '历史未推送';
    $row['now_state'] = $stateArray['now'] == 1 ? '<font style="color:#419641;">当日已推送</font>' : '<font style="color:red;">当日未推送</font>';
    $allRow[] = $row;
}
if ($type == 'setting') {
    $now_xz_setting = isset($_POST['now_xz_setting']) ? $_POST['now_xz_setting'] : '';
    $history_xz_setting = isset($_POST['history_xz_setting']) ? $_POST['history_xz_setting'] : '';
    $url_xz_setting = isset($_POST['url_xz_setting']) ? $_POST['url_xz_setting'] : '';
    $nowRow = $dsql->GetOne("SELECT * FROM `#@__apizl_setting` WHERE `key`='xz_now_setting'");
    $historyRow = $dsql->GetOne("SELECT * FROM `#@__apizl_setting` WHERE `key`='xz_history_setting'");
    $urlRow = $dsql->GetOne("SELECT * FROM `#@__apizl_setting` WHERE `key`='xz_url_setting'");
    if (!empty($nowRow)) {
        $sql = "UPDATE `#@__apizl_setting` SET value='{$now_xz_setting}' WHERE `key`='xz_now_setting' ";
        $dsql->ExecuteNoneQuery($sql);
    }
    if (!empty($historyRow)) {
        $sql = "UPDATE `#@__apizl_setting` SET value='{$history_xz_setting}' WHERE `key`='xz_history_setting' ";
        $dsql->ExecuteNoneQuery($sql);
    }
    if (!empty($urlRow)) {
        $sql = "UPDATE `#@__apizl_setting` SET value='{$url_xz_setting}' WHERE `key`='xz_url_setting' ";
        $dsql->ExecuteNoneQuery($sql);
    }
    if (empty($nowRow)) {
        $sql = "INSERT into #@__apizl_setting (`key`,`value`)VALUES('xz_now_setting','{$now_xz_setting}') ";
        $dsql->ExecuteNoneQuery($sql);
    }
    if (empty($historyRow)) {
        $sql = "INSERT into #@__apizl_setting (`key`,`value`)VALUES('xz_history_setting','{$history_xz_setting}') ";
        $dsql->ExecuteNoneQuery($sql);
    }
    if (empty($urlRow)) {
        $sql = "INSERT into #@__apizl_setting (`key`,`value`)VALUES('xz_url_setting','{$url_xz_setting}') ";
        $dsql->ExecuteNoneQuery($sql);
    }
    ShowMsg("配置更新成功！", "javascript:;");
    exit();
}
if ($type == 'push_list') {
    $data = isset($_POST['data']) ? $_POST['data'] : '';
    $data = trim($data);
    if (empty($data)) {
        echo '提交链接不能为空';
        exit;
    }
    $pushType = isset($_POST['push_type']) ? $_POST['push_type'] : '';
    $url = '';
    if ($pushType == 'now') {
        $url = $nowRow['value'];
    }
    if ($pushType == 'history') {
        $url = $historyRow['value'];
    }
    if (empty($url)) {
        echo '请先配置';
        exit;
    }
    $urls = explode(PHP_EOL, $data);
    $ch = curl_init();
    $options = array(
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => implode("\n", $urls),
        CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
    );
    curl_setopt_array($ch, $options);
    $result = curl_exec($ch);
    echo '提交信息:' . $result;
    exit;
}
if ($type == 'push_table') {
    $data = isset($_POST['data']) ? $_POST['data'] : '';
    $id = isset($_POST['id']) ? $_POST['id'] : '';
    $data = trim($data);
    $url = $historyRow['value'];
    if (empty($url)) {
        echo '请先配置';
        exit;
    }
    if (empty($data)) {
        echo '提交链接不能为空';
        exit;
    }
    $pushType = isset($_POST['push_type']) ? $_POST['push_type'] : '';
    $url = '';
    if ($pushType == 'now') {
        $url = $nowRow['value'];
    }
    if ($pushType == 'history') {
        $url = $historyRow['value'];
    }
    if (empty($url)) {
        echo '请先配置';
        exit;
    }
    $urlNew = httpto(MakeArt($id));
    insertstate($id);
    $urls = explode(PHP_EOL, $urlNew);
    $ch = curl_init();
    $options = array(
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => implode("\n", $urls),
        CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
    );
    curl_setopt_array($ch, $options);
    $result = curl_exec($ch);
    echo '提交信息:' . $result;
    exit;
}

if ($type == 'all_push') {
    $dsql->SetQuery("SELECT id FROM `#@__archives` ");
    $dsql->Execute('dd');
    $data = [];
    $pushUrl = $urlRow['value'];
    while ($row = $dsql->GetArray('dd')) {
//        $data[] = str_replace('{$id}', $row['id'], $pushUrl);
        $data[] = httpto(MakeArt($row['id']));
    }
    $url = $historyRow['value'];
    if (empty($url)) {
        echo '请先配置';
        exit;
    }
    $ch = curl_init();
    $options = array(
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => implode("\n", $data),
        CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
    );
    curl_setopt_array($ch, $options);
    $result = curl_exec($ch);
    echo '提交信息:' . $result;
    exit;
}


if ($type == 'date_push') {
    $start = isset($_POST['start']) ? $_POST['start'] : '0';
    $end = isset($_POST['end']) ? $_POST['end'] : '0';
    $start = strtotime($start);
    $end = strtotime($end) + (3600 * 24 - 1);
    $dsql->SetQuery("SELECT id FROM `#@__archives` where senddate>'{$start}' and  senddate<'{$end}' ");
    $dsql->Execute('dd');
    $data = [];
    $pushUrl = $urlRow['value'];
    while ($row = $dsql->GetArray('dd')) {
//        $data[] = str_replace('{$id}', $row['id'], $pushUrl);
        $data[] = httpto(MakeArt($row['id']));
    }
    $url = $historyRow['value'];
    if (empty($url)) {
        echo '请先配置';
        exit;
    }
    $ch = curl_init();
    $options = array(
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => implode("\n", $data),
        CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
    );
    curl_setopt_array($ch, $options);
    $result = curl_exec($ch);
    echo '提交信息:' . $result;
    exit;
}

function getstate($id) {
    global $dsql;
    $row = $dsql->GetOne("SELECT *from #@__xz_push where aid = '{$id}'");
    return $row;
}

function httpto($url) {
    global $cfg_basehost;
    if (empty($cfg_basehost)) {
        return $url;
    }
    if (!strstr($url, $cfg_basehost)) {
        return $cfg_basehost . $url;
    }
    return $url;
}

function insertstate($id, $type = 'now') {
    global $dsql;
    $row = $dsql->GetOne("SELECT *from #@__xz_push where aid = '{$id}'");
    $date = time();
    if (empty($row)) {
        $sql = "INSERT into #@__xz_push (`aid`,`now`,`history`,`add_time`)VALUES('{$id}','1','0','$date') ";
        $dsql->ExecuteNoneQuery($sql);
    }
}
?>

<html>
    <head>
        <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
        <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

        <script src='https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js'></script>
        <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
        <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </head>
    <body style="padding-left: 20px;">
        <h4>熊掌号提交插件</h4>

        <ul id="myTab" class="nav nav-tabs">
            <li   class="active">
                <a href="#main" data-toggle="tab">列表提交</a>
            </li>
            <li><a href="#other" data-toggle="tab">手动提交</a></li>
            <li><a href="#setting" data-toggle="tab">配置</a></li>
        </ul>
        <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade  in active" id="main">
                <label>开始时间:</label> 
                <input type='date' id="start_date">
                <label>结束时间:</label> 
                <input type='date' id="end_date">
                <input type='submit' value="时间提交历史"  class="btn btn-success" onclick="datePush()">
                <label>提交全部历史（谨慎使用）:</label> 
                <input type='submit' value="提交全部历史"  class="btn btn-success" onclick="allPush()">
                <table class='table' style="width: 900px;">
                    <thead>
                        <tr>
                            <td class="col-lg-1">id</td>
                            <td class="col-lg-5">文章名称</td>
                            <td  class="col-lg-3">发布时间</td>
                            <td  class="col-lg-3">状态</td>
                            <td  class="col-lg-3">操作</td>
                        </tr>
                    </thead>
                    <tbody>
<?php for ($i = 0; $i < count($allRow); $i++) { ?>
                            <tr>
                                <td><?php echo $allRow[$i]['id']; ?></td>
                                <td><?php echo $allRow[$i]['title']; ?></td>
                                <td><?php echo date("Y-m-d H:i:s", $allRow[$i]['senddate']); ?></td>
                                <td><?php echo $allRow[$i]['now_state']; ?> </td>
                                <td>
                                    <a href="javascript:nowPushTable(<?php echo $allRow[$i]['id']; ?>)"   class="btn btn-success">当日提交</a>
                                </td>
                            </tr>
<?php } ?>
                    </tbody>
                </table>
            </div>
            <div class="tab-pane fade " id="other">
                <h5>手动提交当日</h5>
                <textarea  placeholder="可以多行提交" rows='5' style="width: 500px;" class='form-control' id='list_now'></textarea>
                <input type='button' value="手动当日提交"  class="btn btn-success" onclick='nowPush()'/>
                <h5>手动提交历史</h5>
                <textarea  placeholder="可以多行提交" rows='5' style="width: 500px;" class='form-control' id='list_history'></textarea>
                <input type='button' value="手动历史提交"  class="btn btn-success" onclick='historyPush()'/>
            </div>
            <div class="tab-pane fade " id="setting">
                <form method="post">
                    <h5>当日提交URL</h5>
                    <textarea id='' placeholder="当日提交URL 熊掌号平台查找" rows='5' style="width: 500px;" class='form-control' name='now_xz_setting'><?php echo $nowRow['value']; ?></textarea>
                    <h5>历史提交URL</h5>
                    <textarea id='' placeholder="历史提交URL 熊掌号平台查找" rows='5' style="width: 500px;" class='form-control' name='history_xz_setting'><?php echo $historyRow['value']; ?></textarea>
                    <h5>提交URL规则</h5>
                    <textarea id='' placeholder="例如:http://www.lol9.cn/archives/view-{$id}-1.html" rows='5' style="width: 500px;" class='form-control' name='url_xz_setting'><?php echo $urlRow['value']; ?></textarea>
                    <input type='hidden' name='type' value="setting">
                    <input type='submit' value="保存"  class="btn btn-success">
                </form>
            </div>

        </div>
        <script type="text/javascript">
            function historyPush() {
                var data = $('#list_history').val();
                $.ajax({
                    type: "POST", url: "./xz_manage.php",
                    data: {push_type: 'history', data: data, type: 'push_list'},
                    dataType: "html",
                    success: function (data) {
                        alert(data);
                    }});

            }
            function nowPush() {
                var data = $('#list_now').val();
                $.ajax({
                    type: "POST", url: "./xz_manage.php",
                    data: {push_type: 'now', data: data, type: 'push_list'},
                    dataType: "html",
                    success: function (data) {
                        alert(data);
                    }});

            }
            function nowPushTable(id) {
                var url = '<?php echo $urlRow['value']; ?>';
                var data = url.replace('{$id}', id);
                $.ajax({
                    type: "POST", url: "./xz_manage.php",
                    data: {push_type: 'now', data: data, id: id, type: 'push_table'},
                    dataType: "html",
                    success: function (data) {
                        alert(data);
                        window.location = '';
                    }});
            }
            function historyPushTable(id) {
                var url = '<?php echo $urlRow['value']; ?>';
                var data = url.replace('{$id}', id);
                $.ajax({
                    type: "POST", url: "./xz_manage.php",
                    data: {push_type: 'history', data: data, type: 'push_table'},
                    dataType: "html",
                    success: function (data) {
                        alert(data);
                        window.location = '';
                    }});
            }
            function allPush() {
                if (!confirm('会提交所有的文章，包括审核未审核垃圾箱！谨慎操作！')) {
                    return;
                }
                $.ajax({
                    type: "POST", url: "./xz_manage.php",
                    data: {type: 'all_push'},
                    dataType: "html",
                    success: function (data) {
                        alert(data);
                        window.location = '';
                    }});
            }
            function datePush() {
                if (!confirm('谨慎操作！')) {
                    return;
                }
                var start = $('#start_date').val(), end = $('#end_date').val();
                if (start > end) {
                    alert('开始时间大于结束时间！');
                    return;
                }
                $.ajax({
                    type: "POST", url: "./xz_manage.php",
                    data: {type: 'date_push', start: start, end: end},
                    dataType: "html",
                    success: function (data) {
                        alert(data);
                        window.location = '';
                    }});
            }
        </script>
    </body>
</html>