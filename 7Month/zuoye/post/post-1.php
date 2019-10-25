<?php

header("Content-Type:text/html;charset=utf-8");

$a = @$_POST["a"];
$b = @$_POST["b"];
$c = @$_POST["c"];
$d = @$_POST["d"];


    $arr = array("mag" =>"这是一条数据查看是否接收,post的数据请求",
        "a" =>$a, "b" =>$b, "c" =>$c, "d" =>$d,    
);
 
    echo json_encode($arr);

?>