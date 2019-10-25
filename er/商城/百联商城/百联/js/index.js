

var loginP = document.querySelector(".login");
var agreeP = document.querySelector(".agree");
console.log("loginP =" +loginP +"  agreeP ="+agreeP);

var userName="",password ="";


//./html/login.html
//./html/login.html

//页面加载时
window.onload = function () {
    reflushData();
}

function reflushData(){
    getData();
    // userName ="百合不是茶";
    if (""==userName|| userName ==null|| userName ==undefined){

        loginP.innerHTML = "请登录";
        agreeP.innerHTML = "注册";
    }else{
        loginP.innerHTML = userName;
        agreeP.innerHTML = "退出";
    }
}


//登录按钮
loginP.onclick =function () {
    getData();
    if (""==userName|| userName ==null|| userName ==undefined) {
        loginP.href = "./html/login.html";
    }else{
        loginP.href="#";
    }

}

//注册按钮
agreeP.onclick =function () {
    getData()

    if (""==userName|| userName ==null|| userName ==undefined){
        agreeP.href = "/百联/html/agree.html";
    }else{
        agreeP.href ="#";
        window.localStorage.removeItem('userName');
        window.localStorage.removeItem('password');
        reflushData();
    }
    //
}



//获取本地保存的数据
function getData() {
    //当页面加载时，获取保存本地的数据
    userName =window.localStorage.getItem("userName");
    password =window.localStorage.getItem("password");
    console.log("  userName ="+userName +"  password="+password);
}


