<?php
    // 1.接收前端的数据
    $n = @$_REQUEST["name"];
    $s = @$_REQUEST["sex"];
    $a = @$_REQUEST["age"];
    $id = @$_REQUEST["id"];

    // 2.连接mysql
    $link = new mysqli("localhost","root","admin","test1907");

    // 3.修改数据
$str = "UPDATE project SET name='".$n."',sex='".$s."',age=".$a." WHERE id=".$id;
    $q = $link->query($str);
    // 4.判断数据是否修改成功
    if($q){
        // 5.如果成功，再去请求数据（功能1），处理数据，再返回
        echo select();
    }else{
        // 6.如果失败，给对应的提示语
        $arr = array("statu"=>1,"msg"=>"修改失败");
        echo json_encode($arr);
    }

    // 功能1.请求数据
    function select(){
        global $link;
        // 开始请求
        $q = $link->query("SELECT * FROM project");
        // 判断是否成功
        if($q){
            // 准备拼接数据
            $res = "";
            while($data = $q->fetch_assoc()){
                $res = $res . json_encode($data) . ",";
            }
            // 返回到函数外部
            return "[".substr($res,0,-1)."]";
        }else{
            // 如果请求失败，处理失败信息
            $arr = array("statu"=>2,"msg"=>"查询失败");
            // 返回到函数外部
            return json_encode($arr);
        }
    }

?>