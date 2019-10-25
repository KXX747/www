<?php
//	前端：
//		发：
//			ajax
//		收：
//			ajax
	
//	后端
//		收：
//			$_GET[]
//		发：
//			echo
	
	$u = @$_GET["user"];
	$p = @$_GET["pass"];
	
	echo "这是php接收到的数据，由给前端返回了123：".$u."---".$p;
	
?>