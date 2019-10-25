<?php
    // 1.声明变量
    $a = 10;
    // 2.返回信息
    echo $a;
    echo "<br>";
    echo "<mark>123</mark>";
    echo "<br>";
    // 3.数据：整数，浮点数，字符，布尔，对象，数组，NULL，资源型
    var_dump(10);
    echo "<br>";
    var_dump(3.1415);
    echo "<br>";
    var_dump("hello");
    echo "<br>";
    var_dump(true);
    echo "<br>";
    echo false;
    echo "<br>";
    // 4.字符串拼接：没有+号
    $str = "admin";
    echo "h
    e
    l
    l
    o
     ".$str;
    echo "<br>";
    // 5.php每行代码结束必须加分号
    echo "hahahah";
    echo "<br>";
    // 6.分支，循环，函数
    // if-else
    // switch
    // for
    // while
    // do-while
    function fn($a){
        echo "fn".$a;
    }
    fn("heihiehi");
    echo "<br>";
    // 6.作用域问题
    $q = 10;
    function fun(){
        global $q,$w;
        $w = 20;
        echo $q;
        echo "<br>";
        echo $w;
    }
    fun();
    echo "<br>";
    echo $q;
    echo "<br>";
    echo $w;
    echo "<br>";
    // 7.数组
    // 索引数组
    $arr = array(9,3,7,4,8,1,78);
    // var_dump($arr);
    // echo $arr;
    // print $arr;
    print_r($arr);
    echo "<br>";
    echo $arr[0];
    echo "<br>";
    echo $arr[1];
    echo "<br>";
    echo $arr[2];
    echo "<br>";
    echo $arr[3];
    echo "<br>";
    echo count($arr);
    echo "<br>";
    for($i=0;$i<count($arr);$i++){
        echo $arr[$i];
        echo "<br>";
    }
    sort($arr);
    print_r($arr);
    echo "<br>";
    rsort($arr);
    print_r($arr);
    echo "<br>";
    // 关联数组
    $arr2 = array("name"=>"admin","age"=>16);
    print_r($arr2);
    echo "<br>";
    echo $arr2["name"];
    echo "<br>";
    foreach($arr2 as $key=>$val){
        echo $val;
        echo "<br>";
    }
    echo "<br>";
    // 将关联数组，转成，json格式
    $s = json_encode($arr2);
    echo $s;
    echo "<br>";
    // 8.对象
    class obj{
        var $name="this is php object";
        function show(){
            echo $this->name;
        }
    }
    $o = new obj();
    $o->show();
?>