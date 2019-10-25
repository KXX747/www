 // 1.获取元素
 var srk1 = document.getElementById("userName");
 var srk2 = document.getElementById("phone");
 var srk3 = document.getElementById("code"); 
 var srk4 = document.getElementById("password");
 var srk5 = document.getElementById("youxiang"); 
 var srk6 = document.getElementById("password2");  
 var sp1 = document.querySelector(".sp1");
 var sp2 = document.querySelector(".sp2");
 var sp3 = document.querySelector(".sp3");
 var sp4 = document.querySelector(".sp4");
 var sp5 = document.querySelector(".sp5");
 var sp6 = document.querySelector(".sp6");
 var ts1 = document.querySelector(".ts1");
 var ts2 = document.querySelector(".ts2");
 var ts3 = document.querySelector(".ts3");
 var ts4 = document.querySelector(".ts4");
 var ts5 = document.querySelector(".ts5");
 var ts6 = document.querySelector(".ts6");
 var ob = document.querySelector("b");
 var butn = document.getElementById("butn");
 var tanchu = document.querySelector(".tanchu");


 var time;

//2.设置初始的状态
var useronoff = telonoff = yzonoff =dianonoff = false;

// 3.用户名验证
 function userName(){
     // var str =" asesdc33_1";
     var reg  =/^[\Sa-zA-Z][\wa-zA-Z0-9]{6,20}$/;
     // console.log(reg.test(str));
     if(reg.test(srk1.value)){
         ts1.style.color = "green";
         ts1.innerHTML ="用户名可用";
         useronoff = true;
     }else if(srk1.value==''){
         ts1.style.color = "blue";
         ts1.innerHTML = "当前用户名为空";
         useronoff = false;
     }else{
         ts1.style.color = "red";
         ts1.innerHTML = "用户名格式错误";
         useronoff = false;
     }
 }

 //4.手机号验证
 function phone(){
     var reg = /^1(3|4|5|6|7|8)\d{9}$/;
     if(reg.test(srk2.value)){
         ts2.style.color = "green";
         ts2.innerHTML = "手机号正确";
         telonoff = true;
     }else if(srk2.value==""){
         ts2.style.color = "blue";
         ts2.innerHTML = "当前手机号输入为空";
         telonoff =false;
     }else{
         ts2.style.color = "red";
         ts2.innerHTML = "手机号错误";
         telonoff = false;
     }
 }
 
 //5. 验证码
 var qrcode="";
  const qrcodelen =4;
  var isClick = false;
 ob.onclick = function(){
     initQrcode();
 }

 //初始化验证码
 function initQrcode(){
     qrcode =  random(1000,9999);
     ob.innerHTML =qrcode;
 }

 initQrcode();

 function random(a,b){
      return Math.round(Math.random() * (a - b) + b);
 }
     function code(){
        if(qrcode!=""&&qrcode==srk3.value){
            ts3.style.color = "green";
            ts3.innerHTML = "验证正确";
            yzonoff = true;
        }else if(srk3.value==""){
            ts3.style.color = "blue";
            ts3.innerHTML = "当前验证码输入为空";
            yzonoff =false;
        }else{
            ts3.style.color = "red";
            ts3.innerHTML = "验证码输入错误";
            yzonoff = false;
        }
        
         }   
//6 密码
function password(){
    var str=" jddl889";
    var reg =  /^\w{8,20}$/;
     console.log(reg.test(str));
    if(reg.test(srk4.value)){
        ts4.style.color = "green";
        ts4.innerHTML = "密码正确";
        telonoff = true;
    }else if(srk4.value==""){
        ts4.style.color = "blue";
        ts4.innerHTML = "当前密码输入为空";
        telonoff =false;
    }else{
        ts4.style.color = "red";
        ts4.innerHTML = "密码输入错误";
        telonoff = false;
    }

 }   

    // 再次验证
    function password2(){
        var str=" jddl889";
        var reg = /^\w.{8,20}$/;
        console.log(reg.test(str));
        if(srk6.value=="" || srk4.value==""){
            ts6.style.color = "blue";
            ts6.innerHTML = "当前密码输入不完善";
            telonoff =false;
        }else if(srk6.value==srk4.value){
            console.log("srk6.value="+srk6.value);
                ts6.style.color = "green";
                ts6.innerHTML = "密码正确";
                telonoff = true;
        }else{
            ts6.style.color = "red";
            ts6.innerHTML = "两次输入的密码不一致";
            telonoff = false;
        }

    }  


  //8.邮箱验证
  function youxiang(){
    var reg = /^[a-zA-Z\d]{3,12}@[a-zA-Z]{2,3}\.[a-zA-Z]{2,3}$/
    if(reg.test(srk5.value)){
        ts5.style.color = "green";
        ts5.innerHTML = "邮箱号正确";
        telonoff = true;
    }else if(srk5.value==""){
        ts5.style.color = "blue";
        ts5.innerHTML = "当前邮箱号输入为空";
        telonoff =false;
    }else{
        ts5.style.color = "red";
        ts5.innerHTML = "邮箱号格式错误";
        telonoff = false;
    }
}

//输入框模拟placeholder属性设置输入行为
    //用户名获取输入框的值
    srk1.oninput = function (){
        if (this.value == "") {
            sp1.style.display = "block";
        } else {
            sp1.style.display = "none";
        }
    }
    sp1.onmousedown = ()=>{
        srk1.focus();
        return false;   //阻止默认行为
    }

    //手机号码

    srk2.oninput = function(){
        if(this.value ==""){
            sp2.style.display =  "block";
        }else{
            sp2.style.display = "none";
        }
    }
    sp2.onmousedown = ()=>{
        srk2.focus();    //失去焦点的方法
        return false;   //阻止默认行为
    }
  

    // 验证码
    srk3.oninput = function () {
    if (this.value == "") {
        sp3.style.display = "block";
    } else {
        sp3.style.display = "none";
    }
}
    sp3.onmousedown = function () {
        srk3.focus();
        return false;
    }


    // 密码
    srk4.oninput = function () {
    if (this.value == "") {
        sp4.style.display = "block";
    } else {
        sp4.style.display = "none";
    }
}
    sp4.onmousedown = function () {
        srk4.focus();
        return false;
    }

    //邮箱
    srk5.oninput = function () {
        if (this.value == "") {
            sp5.style.display = "block";
        } else {
            sp5.style.display = "none";
        }
    }
        sp5.onmousedown = function () {
            srk5.focus();
            return false;
        }
    

        // 再次验证密码

           // 密码
    srk6.oninput = function () {
        if (this.value == "") {
            sp6.style.display = "block";
        } else {
            sp6.style.display = "none";
        }
    }
        sp6.onmousedown = function () {
            srk6.focus();
            return false;
        }
     // 判断整个注册流程
     butn.onclick = function () {
        if (useronoff && telonoff && yzonoff) {
            tanchu.style.display = "block";
            tanchu.innerHTML = "注册成功！";
            clearInterval(time);
            time = setInterval(function () {
                tanchu.style.display = "none";
            }, 1000);

              //返回首页
              GoIndexhtml();

        } else {
            tanchu.style.display = "block";
            tanchu.innerHTML = "有错误信息，注册失败！";
            clearInterval(time);
            time = setInterval(function () {
                tanchu.style.display = "none";
            }, 3000);
        }
    }
     //返回到首页
 function GoIndexhtml() {
    //第一种创建新的页面，左上角返回可以回到现有界面
    window.close();
}