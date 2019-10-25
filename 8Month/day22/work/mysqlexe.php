<?php
	// 链接数据库管理系统的函数
	$link = @new mysqli("localhost","root","root","test");
	echo $link->connect_error;
	
	//进行数据表的增删改查
	// 增
	// $sta = "INSERT sta(name,age) VALUES('admin',19)";
	// $sta = "INSERT sta(name,age) VALUES('lisi',29)";
	// $sta = "INSERT sta(name,age) VALUES('mdscdin',18)";
	// $sta = "INSERT sta(name,age) VALUES('zhangsan',19)";   //值默认一条数据
	// $q = $link->query($sta);
	//  if($q){
 //        echo "ok";
 //    }else{
 //        echo "no";
 //    }



// 	    $link = @new mysqli("localhost","root","root","test");
//     echo $link->connect_error;
// 
//     // 3.数据的增删改查
//     // 增
    // $str = "INSERT sta (name,age) VALUES('root',19)";
    // $q = $link->query($str);
    // if($q){
    //     echo "ok";
    // }else{
    //     echo "no";
    // }

		// 删
		// $sta = "delete from sta where id=2";
		// $q = $link->query($sta);
		// if($q){
		// 	echo "ok";
		// }else{
		// 	echo "no";
		// }
		
		//改
		// $sta ="UPDATE sta SET name='zxcv' WHERE id=1";
		// $q = $link->query($sta);
		// if($q){
		// 	echo "ok";
		// }else{
		// 	echo "no";
		// }
		
		
		// 查
		//解析陈关联数组
		$sta = "SELECT * FROM sta";
		$q =$link->query($sta);
		if($q){
			$q->fetch_assoc();
			while($arr = $q->fetch_assoc()){
				echo json_encode($arr);
				echo "<br>";
			}
		}
		
?>