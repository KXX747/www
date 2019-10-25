<?php
    $d = @$_POST["day"];
    $s = @$_POST["sunday"];

    echo "能够接收到post的请求数据=" ."星期".$d."天气".$s;
?>