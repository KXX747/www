$('.san').find('li').hover(function(){
	$('.san-l').children('ul').eq($(this).index()).css('display','block')
	var t  =$(this).index()*40+"px";
//	console.log(t);
//	$('.san-l').children('ul').eq($(this).index()).css('margin-top',t);
	
	
	
	$('.san-l').children('ul').eq($(this).index()).css('top',t)
	console.log($('.san-l').children('ul').eq($(this).index()).css('top'));
},function(){
	$('.san-l').children('ul').eq($(this).index()).css('display','none')
	
})
