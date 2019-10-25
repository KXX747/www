<?php
    $link = @new mysqli("localhost","root","root","test");
    echo $link ->connect_error;

    
    // 设置字符集
    $link->set_charset("utf8");

    // 表中的数据，增删改查
    // 增:
    // $q = $link->query("INSERT user(name,age,city) VALUES('wanger','1','yizhang')");
    // echo $q+"\n";

    // if($q){
    //     echo "success";
    // }else{
    //     echo "error";
    // }

    //改

    // $q = $link->query("update user set age='44' where name='admin'");
    // echo $q+"\n";
    //     if($q){
    //     echo "success";
    // }else{
    //     echo "error";
    // }


        $q = $link->query("select * from user");
      
        if($q){

     // 将数据解析成关联数组     √
        // $q->fetch_assoc()
        while($arr = $q->fetch_assoc()){
            // print_r($arr);
            // echo $arr["name"];
            echo json_encode($arr);
            echo "<br>";
        }


        
    }else{
        echo "失败";
    }

?>