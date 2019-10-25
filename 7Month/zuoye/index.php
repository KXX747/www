<?php
   header("Content-Type: text/html;charset=utf-8");


      $u = @$_POST["user"];
      $p = @$_POST["pass"];

      //判断条件
      if( $u== "admin" && $p == "123456"){
         echo "login success";
      }else{
         echo "login error";
      }

?>