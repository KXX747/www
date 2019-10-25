 <?php
	//作用域问题
	// 1、局部模式
	// $a = 10;
	// function fn(){
	// 	$y = 20;
	// 	echo "变量为:$a";
	// 	echo "变量为:$y";
	// }
	// fn();
	
	
	// 2、全局变量
	 // $x=5; 
  //       function myTest(){
  //           $y=10; // 局部变量
  //           echo "<p>测试函数内变量:<p>";
  //           echo "变量 x 为: $x";  //全局变量 显示未定义,获取不到
  //           echo "<br>";
  //           echo "变量 y 为: $y";  //局部变量,为10
  //       }
  //       myTest();
        // echo "<p>测试函数外变量:<p>";
        // echo "变量 x 为: $x";
        // echo "<br>";
        // echo "变量 y 为: $y";
		
	
	// 3. static 作用域 静态变量
		// function fnName(){
		// 	static $x =20;
		// 	echo $x;
		// 	$x++;
		// }
		// fnName();  //20
		// fnName();  //21
		
		
		//4. 关联数字 ,用 =>进行链接
		$arr = array("firstName" => "xx", "lastName" =>"jj");
			foreach($arr as $key =>$value){
				echo $key."<br>";
				echo $value."<br>";
			}
			
		
?> 
