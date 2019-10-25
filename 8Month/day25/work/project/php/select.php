<?php

    //连接mysql
    $link = new mysqli("localhost","root","root","test");

    echo select();

    //请求数据
    function select(){
        global $link;
        //开始请求
        $q = $link->query("SELECT * FROM project");
        //判断是否成功
        if($q){
            //准备拼接数据
            $res = "";
            while($data = $q->fetch_assoc()){
                $res = $res.json_encode($data).",";
            }
            //返回到函数外部
            return "[".substr($res,0,-1)."]";
        }else{
            //如果请求失败。需要处理失败信息
            $arr = array("statu"=>2,"msg"=>"查询失败");
            //返回到函数外部
            return json_encode($arr);
        }
    }
?>