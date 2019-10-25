<?php
    $u = @$_GET["user"];
    $p = @$_GET["pass"];
    $f = @$_GET["cb"];

    $a = array("msg" =>"查看是否可进行接收并且返回","user"=>$u,"pass"=>$p);
    $a = json_encode($a);

    echo $f."('".$a."')";

?>

