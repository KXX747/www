<?php
    //1. 需要接收到前端的数据
    $n = @$_REQUEST["name"];
    $s = @$_REQUEST["sex"];
    $a = @$_REQUEST["age"];
    $id = @$_REQUEST["id"];

    // 2.连接数据库mysqli
    $link = new mysqli("localhost","root","root","test");

    //3. 修改目前存储服务器上的数据
    $str ="UPDATE project SET name='".$n."',sex='".$s."',age=".$a." WHERE id=".$id;
    $q = $link ->query($str);

    //4. 需要进行判断是否添加成功
    if($q){
        //反馈当前成功的状态
        echo select();
    }else{
        $arr = array("statu"=>1,"msg"=>"修改失败");
        echo json_encode($arr);
    }
    // 3.1 查询具体的数据
    function select(){
        global $link;//使用全局
        $q = $link->query("SELECT * FROM project"); //查询
        if($q){
            $res="";
            while($data=$q->fetch_assoc()){
                $res = $res . json_encode($data) . ",";
                // console.log($res);
            }
            return "[".substr($res,0,-1)."]";
        }else{
            $arr = array("statu"=>2,"msg"=>"查询失败");
            return json_encode($arr);
        }
    }
?>