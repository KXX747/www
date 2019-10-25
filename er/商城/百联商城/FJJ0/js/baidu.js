 // jsonp的请求
$(".txt1").bind('input',function(){
    // $("input").bind('keyup',function(){
       // console.log(0);
        a = $(".txt1").val();
      //  console.log(a);
         // jsonp的请求
         $.ajax({
            url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
            success:function(res){
                   // console.log(res);
                    $('.ca').empty();//先清空
                    
                    for(var i in res.s){
                        // console.log(i);
                        var li = '<li>'+JSON.stringify(res.s[i])+'</li>';
                        $('.ca').append(li);
                    }
            },
            error:function(a,b,c){
                console.log("错啦哦");
            },
            data:{
                wd:a//  a = $(".txt1").val();
            },
            dataType:"jsonp",//方式
            jsonp:"cb"//
        })


    })
