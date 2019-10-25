<?php
    // 接收数据
    $u = @$_REQUEST["user"];
    $s = @$_REQUEST["sex"];
    $a = @$_REQUEST["age"];

    // 使用字符串拼接，实现要返回的数据格式
    // 成功的数据结构
    // '{"code":1,"msg":{"user":"admin","sex":"1","age":16}}'
    // 失败的数据结构
    // '{"code":0,"msg":"'.报错信息.'"}'

    // 关联数组的转换

    

    // 连接mysql
    $link = new mysqli("localhost","root","root","test");
    if($link->connect_error){
        die('{"'.$link->concode":0,"msg":"nect_error.'"}');
    }

    $str = "INSERT user (name,sex,age) VALUES('".$u."','".$s."',".$a.")";
    // 准备插入
    $q = $link->query($str);
    if($q){
        echo '{"code":1,"msg":'. select() .'}';
    }else{
        echo '{"code":0,"msg":"插入失败"}';
    }

    function select(){
        global $link;
        $data = $link->query("SELECT * FROM user");
        if($data){
            $str = "";
            while($arr = $data->fetch_assoc()){
                $str = $str . json_encode($arr) . ",";
            }
            return "[".substr($str,0,-1)."]";
        }else{
            echo '{"code":0,"msg":"插入成功，但是获取最新信息失败"}';
        }
    }



?>