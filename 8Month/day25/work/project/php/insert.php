<?php
    //1. 接收前端发送过来的数据
    $n = @$_REQUEST["name"];
    $s = @$_REQUEST["sex"];
    $a = @$_REQUEST["age"];

    //2.链接服务器
    $link = new mysqli("localhost","root","root","test");

    //3. 将数据添加至数据库中
     //$str = "INSERT project (name,sex,age) VALUES ('天空ne','1',19)";  //测试已经 添加成功
    $str = "INSERT project (name,sex,age) VALUES ('".$n."','".$s."',".$a.")";
    $q = $link -> query($str);
    //4. 需要进行判断是否添加成功
    if($q){
        // 反馈当前的状态 statu：0（成功返回0），数据信息放在msg里面拼一个变量，在传输给前端页面
        echo select();

        }else{
            // php中的关联数组方式：名字=值得形式
            $arr = array("statu"=>1,"msg"=>"添加失败");
            // 返回结果发送给前端
            echo json_encode($arr);  //json_encode() 对变量进行JSON编码
        }



        function select(){
            global $link; //使用全局才能拿到link
            //开始进行请求
            $q = $link->query("SELECT * FROM project");  //获取数据
            if($q){
                //准备拼接数据
                $res = "";
                //如果有有个数组进行判断成关联数组
                while($data=$q->fetch_assoc()){
                    $res = $res.json_encode($data).","; //因为不是正确的json格式所以需要拼接逗号，还需要中括号包起来
                }
                //res  是获取到的数据  返回到函数外部
                return "[".substr($res,0,-1)."]"; //截取，截取字符串，从哪里开始截，截到哪一位
            }else{
                $arr = array("statu"=>2,"msg"=>"查询失败");
                // 返回结果发送给前端
                return json_encode($arr);  //json_encode() 对变量进行JSON编码
            }
        }



?>

