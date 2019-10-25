<?php

    // 前端
    //     收：ajax
    //     发：ajax

    // 后端php
    //     收：$_GET[],$_POST[],$_REQUEST[]
    //     发：echo

    // 数据库：
    // php操作mysql：
    //     面向对象方式：
    //     $link = new mysqli("地址","用户名","密码","哪个数据库");

    //     php向mysql发送mysql命令
    //     $q = $link->query("mysql的命令");

    //     请求（查询）数据：
    //     $q是资源性数据，不能直接使用，不能直接转成字符
    //     方法解析：
    //         $q->fetch_array()       混合数组
    //         $q->fetch_row()         索引数据
    //         $q->fetch_assoc()       关联数组
    //         $q->fetch_object()      对象
        
    //     $link->close();

    // ajax:概念，特点，组成
    // 实现：
    //     1.建
    //     2.拨
    //     3.监
    //     4.发

    // ajax-get的封装

    // ajax（设备）的状态：
    //     0，1，2，3，4
    // http（网络）的状态：
    //     1，2，3，4，5

?>