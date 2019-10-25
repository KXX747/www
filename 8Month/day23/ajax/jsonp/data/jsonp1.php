<?php

    $a = @$_GET["user"];
    $b = @$_GET["pass"];

    $data = "这是php通过jsonp接收到的跨域的数据，又还给你了：".$a."---".$b;

    echo "abc('".$data."')";

?>