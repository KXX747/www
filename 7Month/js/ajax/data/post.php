<?php
	
	$a = @$_POST["a"];
	$b = @$_POST["b"];
	$c = @$_POST["c"];
	$d = @$_POST["d"];
	
	$arr = array("msg"=>"这是php接收到的数据，再还给你","a"=>$a,"b"=>$b,"c"=>$c,"d"=>$d);
	
	echo json_encode($arr);
	
?>