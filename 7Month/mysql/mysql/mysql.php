<?php
    // mysql系列的方法：phpnow:php老版本
    //     mysql_connect()
    

    // mysqli系列的方法：phpstudy:php新版本
    //     $link = new mysqli();    //创建连接
    //     $link->query();          //向mysql发送mysql命令


    // 登录mysql,选择数据库
    $link = @new mysqli("localhost","root","admin","test1906");
    echo $link->connect_error;

    // 设置字符集
    $link->set_charset("utf8");

    // 表中的数据，增删改查
    // 增:
    // $q = $link->query("INSERT stu (name,sex,age) VALUES('wanger','1',18)");
    // if($q){
    //     echo "success";
    // }else{
    //     echo "error";
    // }

    // 改:
    // $q = $link->query("UPDATE stu SET age=30 WHERE name='admin'");
    // if($q){
    //     echo "success";
    // }else{
    //     echo "error";
    // }

    // 删:
    // $q = $link->query("DELETE FROM stu WHERE name='admin'");
    // if($q){
    //     echo "success";
    // }else{
    //     echo "error";
    // }

    // 查:
    $q = $link->query("SELECT * FROM stu");
    if($q){
        // 每次执行，只能解析一条数据

        // 将数据解析成索引数组和关联数组的集合
        // $q->fetch_array()
        // while($arr = $q->fetch_array()){
        //     print_r($arr);
        //     echo "<br>";
        // }

        // 将数据解析成索引数组
        // $q->fetch_row()
        // while($arr = $q->fetch_row()){
        //     print_r($arr);
        //     echo "<br>";
        // }

        // 将数据解析成关联数组     √
        // $q->fetch_assoc()
        while($arr = $q->fetch_assoc()){
            // print_r($arr);
            // echo $arr["name"];
            echo json_encode($arr);
            echo "<br>";
        }

        // 将数据解析成对象数组
        // $q->fetch_object()
        // while($arr = $q->fetch_object()){
        //     // print_r($arr);
        //     echo $arr->name;
        //     echo "<br>";
        // }

    }else{
        echo "error";
    }

    
    $link->close();
?>