<?php

    // 编程语言操作mysql
    // 使用php操作mysql中的数据库

    // 1.连接，登录mysql
    // 2.选择数据库
    $link = @new mysqli("localhost","root","admin","test1907");
    echo $link->connect_error;

    // 3.数据的增删改查
    // 增
    // $str = "INSERT stu (name,age) VALUES('root',19)";
    // $q = $link->query($str);
    // if($q){
    //     echo "ok";
    // }else{
    //     echo "no";
    // }

    // 删
    // $str = "DELETE FROM stu WHERE id=10";
    // $q = $link->query($str);
    // if($q){
    //     echo "ok";
    // }else{
    //     echo "no";
    // }

    // 改
    // $str = "UPDATE stu SET name='哈哈哈' WHERE id=14;";
    // $q = $link->query($str);
    // if($q){
    //     echo "ok";
    // }else{
    //     echo "no";
    // }

    // 查：获取，请求，拿到
    $str = "SELECT * FROM stu";
    $q = $link->query($str);
    if($q){
        // 将资源性数据，解析成索引数组和关联数组的组合，每次执行只能解析一条数据
        // $q->fetch_array();
        // while($arr = $q->fetch_array()){
        //     print_r($arr);
        //     echo "<br>";
        // }

        // $q->fetch_row();解析成索引数组
        // while($arr = $q->fetch_row()){
        //     // print_r($arr);
        //     echo $arr[1];
        //     echo "<br>";
        // }

        // $q->fetch_assoc();解析成关联数组，√
        // while($arr = $q->fetch_assoc()){
        //     // print_r($arr);
        //     echo json_encode($arr);
        //     // echo $arr["name"];
        //     echo "<br>";
        // }

        // $q->fetch_object();解析成对象
        // while($arr = $q->fetch_object()){
        //     // print_r($arr);
        //     echo $arr->name;
        //     echo "<br>";
        // }
    }else{
        echo "no";
    }


    $link->close();
?>