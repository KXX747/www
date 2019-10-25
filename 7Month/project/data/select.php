<?php

    // 连接mysql
    $link = new mysqli("localhost","root","root","test");
    if($link->connect_error){
        die('{"code":0,"msg":"'.$link->connect_error.'"}');
    }

    $data = $link->query("SELECT * FROM user");

    if($data){
        $str = "";
        while($arr = $data->fetch_assoc()){
            $str = $str . json_encode($arr) . ",";
        }
        echo '{"code":1,"msg":' . "[".substr($str,0,-1)."]" . '}';
    }else{
        echo '{"code":0,"msg":"获取最新信息失败"}';
    }

?>