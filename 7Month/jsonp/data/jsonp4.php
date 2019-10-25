<?php
    $u = @$_GET["user"];
    $p = @$_GET["pass"];
    $f = @$_GET["cb"];

    $a = array("msg"=>"这是php接收到的数据，现在还给你","user"=>$u,"pass"=>$p);
    $a = json_encode($a);

    echo $f."('".$a."')";
?>