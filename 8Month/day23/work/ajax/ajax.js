
//get
function ajaxGET(url,data,success){
    var xhr = new XMLHttpRequest();
    if(data){
        url += "?";
        url += data;
    }
    xhr.open("get",url);

    xhr.onreadystatechange =function(){
        if(xhr.readyState ==4 && xhr.status==200){
            success(xhr.responseText);
        }
    }
    xhr.send(null);
}


// post请求
function ajaxPOST(url,data,success){
    var xhr = new XMLHttpRequest();
    xhr.open("post",url);
        if(data){
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        }

    xhr.onreadystatechange =function(){
        if(xhr.readyState ==4 && xhr.status==200){
            //成功之后传入的回调函数
            console.log(xhr.responseText);
            success(xhr.responseText);
        }
    }

    xhr.send(data);
}