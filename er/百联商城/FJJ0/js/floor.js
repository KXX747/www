
$("#lt").find("li").click(function(){
	//		获取点击的索引
		var index = $(this).index();
	//		根据索引获取对应的楼层
		var iNowFloor = $("#floor").children().eq(index);
	//		计算楼层距离顶部的位置
		//console.log(1)
		var t = iNowFloor.offset().top;
	//		将这个位置设置给滚动条
		$("html").stop().animate({
			scrollTop:t
		})
	})
	
	
