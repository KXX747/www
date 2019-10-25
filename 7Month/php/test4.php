<?php
    header("Content-Type: text/html;charset=utf-8");
    // 前端：
    //     发：
    //          1.form表单发送
    //          2.暂且不说
    //     收：暂且不收

    // 后台：
    //     收：
    //          $_GET["信息的字段名"]
    //          $_POST["信息的字段名"]
    //          $_REQUEST["信息的字段名"]
    //     发：(返回语句)
    //          echo，print，die

    // 只能接受get方式发送的数据
    // $u = @$_GET["user"];
    // $p = @$_GET["pass"];
    
    // 只能接受post方式发送的数据
    // $u = @$_POST["user"];
    // $p = @$_POST["pass"];
    
    // 可以接受get和post方式发送的数据
    $u = @$_REQUEST["user"];
    $p = @$_REQUEST["pass"];

    echo "this is data:".$u."---".$p;
    echo "<br>";
    echo "中文";

    // if($u == "admin" && $p == "123456"){
    //     echo "login success";
    // }else{
    //     echo "login error";
    // }
?>