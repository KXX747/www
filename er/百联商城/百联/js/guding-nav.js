$(function(){
    
    // 2.1计算第一部分的高度
    var topHeight = $(".header").height();
    // 计算第二部分的高度
    var navHeight = $("#tou").height();
    console.log(navHeight);

    // 给页面设置一个滚动事件
    $(window).scroll(function () {
    //1.获取页面滚出去的距离(被卷曲出去的距离);
    var scrollTopValue =  $(window).scrollTop();
        // console.log(scrollTopValue);

        // 2.判断查看scrollTopValue的值是否大于第一部分的高度
        //先提前进行计算
        //如果第二部分的高度大于第一部分的高度（168）则固定定位
        if(scrollTopValue >= topHeight){
            //设置固定定位样式
            $("#tou").css({
                position:"fixed",
                top:0,
                left:0
            });

        // 固定定位不占文档流脱离，会有间隙
            //设置第三部分margin-top的值为第二部分的高度
            $(".nav-l").css({
                marginTop:navHeight+100  //加上原来的10px
            });
        }else{
            //让第二部分的还原，如果小于
            $("#tou").css({
                position:"static",
                top:0,
                left:0
            });
            //设置第三部分的margin-top的值为原来的值.
            $('.nav-l').css({
            marginTop:10
            });
        };
    });
});
