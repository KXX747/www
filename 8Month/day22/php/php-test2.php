<?php

    // $u = @$_GET["user"];
    // $p = @$_GET["pass"];

    // $u = @$_POST["user"];
    // $p = @$_POST["pass"];

    // $u = @$_REQUEST["user"];
    // $p = @$_REQUEST["pass"];

    $user = "admin";
    $pass = 123;

    if($user == $u && $pass == $p){
        echo "ok";
    }else{
        echo "error";
    }


    // echo "hello".$u."----".$p;

    // 前端：
    //     发：form表单
    //     收：浏览器

    // 后端：
    //     收：$_GET[],$_POST[],$_REQUEST[]
    //     发：echo


?>