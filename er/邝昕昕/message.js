;(function($){
    "use strict";
    
        //信息提醒     

        $('.btn-info').on('click',function(){
            $(".message1").toggle({
                message:'信息提醒',
                type:'info'
            });
            $ ('.message1').show ().delay (700).fadeOut ();
        });


        $('.btn-success').on('click',function(){
           
            $('.message2').fadeToggle({
                message:'成功',
                type:'success'
            });
            $ ('.message2').show ().delay (700).fadeOut ();
        });

      
        $('.btn-warning').on('click',function(){
           
            $('.message3').toggle({
                message:'警告提示',
                    type:'warning',
                    duration:0,
                    showClose:true,
                    center:true,
                    onClose:function(){alert('知道了')}
            });
            $ ('.message3').show ().delay (700).fadeOut ();
        })


            $('.btn-danger').on('click',function(){
                $('.message4').toggle({
                    message:'失败提示',
                    type:'error'
                });
                $ ('.message4').show ().delay (700).fadeOut ();
            })
      

            $('.btn-default').on('click',function(){
                $('.message5').toggle({
                    type:'success',
                    message:'<div style="color:#333;font-weight:bold;font-size:16px;">用户信息保存成功<div><span style="color:lightgrey;font-size:small;">3秒后自动关闭</span>',
                    duration:3000,
                    center:true
                });
                $ ('.message5').show ().delay (700).fadeOut ();
            })
        
      


})(jQuery);