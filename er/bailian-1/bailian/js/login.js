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
var useronoff = telonoff = yzonoff = dianonoff = false;

// 3.用户名验证
function userName() {
    // var str =" asesdc33_1";
    // var reg  =/^[\Sa-zA-Z][\wa-zA-Z0-9]\d{6,20}$/;
    // console.log(reg.test(str));
    if (srk1.value == '') {
        ts1.style.color = "blue";
        ts1.innerHTML = "当前用户名为空";
        useronoff = false;
    } else if (srk1.value.length <= 6) {
        ts1.style.color = "green";
        ts1.innerHTML = "用户名长度大于6";
        useronoff = false;
    } else {
        ts1.style.color = "red";
        ts1.innerHTML = "用户正确";
        useronoff = true;
    }
}


//5. 验证码
var qrcode = "";
const qrcodelen = 4;
var isClick = false;
ob.onclick = function () {
    initQrcode();
}

//初始化验证码
function initQrcode() {
    qrcode = random(1000, 9999);
    ob.innerHTML = qrcode;
}

initQrcode();

function random(a, b) {
    return Math.round(Math.random() * (a - b) + b);
}

function code() {
    if (qrcode != "" && qrcode == srk3.value) {
        ts3.style.color = "green";
        ts3.innerHTML = "验证正确";
        yzonoff = true;
    } else if (srk3.value == "") {
        ts3.style.color = "blue";
        ts3.innerHTML = "当前验证码输入为空";
        yzonoff = false;
    } else {
        ts3.style.color = "red";
        ts3.innerHTML = "验证码输入错误";
        yzonoff = false;
    }

}

//6 密码
function password() {
    var str = " jddl889";
    var reg = /^\w{8,20}$/;
    // console.log(reg.test(str));
    if (reg.test(srk4.value)) {
        ts4.style.color = "green";
        ts4.innerHTML = "密码正确";
        telonoff = true;
    } else if (srk4.value == "") {
        ts4.style.color = "blue";
        ts4.innerHTML = "当前密码输入为空";
        telonoff = false;
    } else {
        ts4.style.color = "red";
        ts4.innerHTML = "密码输入错误";
        telonoff = false;
    }

}


//输入框模拟placeholder属性设置输入行为
//用户名获取输入框的值
srk1.oninput = function () {
    if (this.value == "") {
        sp1.style.display = "block";
    } else {
        sp1.style.display = "none";
    }
}
sp1.onmousedown = () => {
    srk1.focus();
    return false;   //阻止默认行为
}


// 判断整个注册流程
butn.onclick = function () {
    console.log("useronoff=" + useronoff);
    console.log("telonoff=" + telonoff);
    console.log("yzonoff=" + yzonoff);
    if (useronoff && telonoff && yzonoff) {
        tanchu.style.display = "block";
        tanchu.innerHTML = "登录成功！";
        saveUserLoginInfo(srk1.value, srk4.value);
        clearInterval(time);
        time = setInterval(function () {
            tanchu.style.display = "none";
        }, 1000);
    } else {
        tanchu.style.display = "block";
        tanchu.innerHTML = "有错误信息，登录失败！";
        clearInterval(time);
        time = setInterval(function () {
            tanchu.style.display = "none";
        }, 3000);
    }
}


//保存用户信息
// function saveUserLoginInfo(user,pwds){

//     var jn ={
//         name:user,
//         pwd:pwds
//     }
//     var key ="username-"+user;

//     var jsonstr = JSON.stringify(jn);
//     console.log("jsonstr="+jsonstr);
//     setCookiew3c(key,jsonstr);

// }

// butn.onclick = function(){
//     // console.log(ojz.checked);  选中是true
//     //1 判断是否选中复选框
//     if(butn){
//         // 2处理帐号密码
//         var obj = {
//             u:srk1.value,
//             p:srk4.value
//         }


//         // 3存到cookie中，设置指定的时间，打开控制台输入值有值
//         setCookie("msg",JSON.stringify(obj),{
//             expires:7
//         })
//     }
// }

window.onload = function () {

    changeIndexUserinfo();
    /*页面打开，判断是否存储过用户名---*/
    var uName = window.localStorage.getItem('userName');
    var uPass = window.localStorage.getItem('password');
    if (uName != null) {//说明之前存储过值，说明用户希望记住用户名
        // document.getElementById('userName').value=uName;
        document.getElementById('password').focus();
    } else {
        document.getElementById('userName').focus();
    }

    /*点击登录时存储数据*/
    butn.onclick = function () {
        var name = document.getElementById('userName').value;
        var pass = document.getElementById('password').value;
        /*判断用户是否选择记住用户名*/
        var isRemenber = document.getElementById('isRemenber');
        //if (isRemenber.checked == true) {
            /*存储数据到localstorage*/
            window.localStorage.setItem('userName', name);
            window.localStorage.setItem('password', pass);
        // } else {
        //
        //
        //     window.localStorage.removeItem('userName');
        //     window.localStorage.removeItem('password');
        // }

        //返回首页
        changeIndexUserinfo();
        GoIndexhtml();
    }

}

//修改用户信息
function changeIndexUserinfo() {
    //

}




//返回到首页
function GoIndexhtml() {
    //第一种创建新的页面，左上角返回可以回到现有界面
    window.location.href ="../index.html";
    self.history.back();
}
