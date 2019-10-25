// 设置cookie
function setCookie(key,val,options){
    options = options || {};
    var expires = "";
    if(options.expires){
        var d = new Date();
        d.setDate(d.getDate()+options.expires);
        expires = ";expires="+d;
    }
    var path = options.path ? ";path="+options.path : "";
    console.log("cookie="+ document.cookie);
    
    document.cookie = `${key}=${val}${expires}${path}`;
}

// 删除cookie
function removeCookie(key,options){
    options = options || {};
    options.expires = -1;
    setCookie(key,"10",options)
}

// 获取cookie
function getCookie(key){
    var arr = document.cookie.split("; ");
    for(var i=0;i<arr.length;i++){
        if(arr[i].split("=")[0] == key){
            return arr[i].split("=")[1];
        }
    }
    return "";
}



function setCookiew3c(cname,cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (10*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookiew3c(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }