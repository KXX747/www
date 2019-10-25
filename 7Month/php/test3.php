<?php
    // 静态作用域（类似于js中的闭包）
    function fn(){
        static $a = 10;
        $a++;
        echo $a;
        echo "<br>";
    }
    fn();
    fn();
    fn();
    fn();
    
    echo "<br>";

    // 输出信息的同时，终止程序（类似于js中的return）
    echo "hello";
    die("aaaa");
    echo "php";

?>