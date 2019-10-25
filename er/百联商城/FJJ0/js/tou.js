	//点击时，回到顶部，一秒时间
$(".tou").click(function(){
		$("html").stop().animate({
			scrollTop:0
		},1000)
	})

