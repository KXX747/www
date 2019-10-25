<?php
$q = $link->query("INSERT xxx (name,sex,age) VALUES('wanger','1',18)");
if($q){
    echo "success";
 }else{
    echo "error";
 }

?>