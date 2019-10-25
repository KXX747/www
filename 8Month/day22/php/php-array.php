<?php
    // 索引数组
    // $arr = array(4,5,6,7);
    // echo $arr;
    // echo json_encode($arr);
    // print_r($arr);
    // echo "<br>";
    // echo $arr[0];
    // echo "<br>";
    // echo $arr[1];
    // echo "<br>";
    // echo $arr[2];
    // echo "<br>";
    // echo $arr[3];
    // echo "<br>";
    // echo count($arr);
    // for($i=0;$i<count($arr);$i++){
    //     echo $arr[$i];
    //     echo "<br>";
    // }

    关联数组
    $arr = array("name"=>"admin","age"=>12);
    print_r($arr);
    echo "<br>";
    // echo $arr["name"];
    // foreach($arr as $key=>$value){
    //     echo $value;
    //     echo "<br>";
    // }
    echo json_encode($arr);

?>