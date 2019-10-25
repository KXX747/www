<?php
    $n = @$_REQUEST["name"];
    $s = @$_REQUEST["sex"];
    $a = @$_REQUEST["age"];

        //链接mysql
    $link = new mysqli("localhost","root","root","test");
     if($link ->connect_error){
         die('{"code":0,"msg":"'.$link ->connect_error.'"}');
     }

    $str = "INSERT project (name,sex,age) VALUES('".$n."','".$s."',".$a.")";

    $q = $link->query($str);
    if($q){
        echo'{"code":1,"msg":'.select().'}';
    }else{
        echo'{"code":0,"msg":"插入失败"}';
    }

    function select(){
        global $link;
        $data = $link ->query("SELECT * FROM project ");
        if($data){
            $str = "";
            while($arr =$data ->fetch_assoc()){
                $str = $str.json_encode($arr).","; 
            }
            return "[".substr($str,0,-1)."]";
        }else{
            echo'{"code":0,"msg":"插入成功，但是获取最新信息失败"}';
        }
    }

?>