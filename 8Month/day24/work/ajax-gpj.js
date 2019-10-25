
    // 1.预设函数的执行方式，和要传入的参数，及要实现的功能
// ajax({
//     type:"get",             //可选，默认get 传输的类型
//     url:"",                 //必选
//     success:function(){},   //必选
//     error:function(){},     //可选，默认不处理
//     data:{}                 //可选，默认不发  用户传入的参数是什么
//     timeout:毫秒数          //可选，默认500，延迟时间，超出时间，错误提醒，主要用在jsonp身上
// })


function ajax(options){
    // 1.传入一个对象 options，用来做默认的值来进行判断
    let {type,url,success,error,data,timeout} = options; //解构赋值
        // 2.默认传输方式
        type = type || "get";
        data = data || {};
        timeout = timeout || 500;
    // 3.解析共同的部分
    var str = "";
    for(var i in data){
        // 3.1 键值对格式
        str += `${i}=${data[i]}&`; // = &是连接符
    }

    // 5.2.在之前就需要进行判断,post不需要进行判断
    if(type=="get" || type =="jsonp"){
        //设置时间戳，随机生成数字
        var d =new Date();
        url=url + "?" + str + "__qdt=" + d.getTime();
    }
    console.log("ajax type="+type);
    //jsonp需要和ajax区分功能
    if(type==="jsonp"){

        var script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);

        console.log("window="+window);
        console.log("data="+data);
        window[data[data.columnName]] = function(res){
            console.log("data res="+res);
            success && success(res);
            error = null;
        }
        // jsonp的失败（超时提醒）
        setTimeout(()=>{
            error && error("timeout");
            success = null;
        },timeout);
    }else{
        //4.将ajax进行开启(jaonp不需要进ajax，需要在开启之后先进行判断jsonp)
        var xhr = new XMLHttpRequest();
        xhr.open(type,url,success);
        // 4.1观察状态是否开通
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                success(xhr.responseText);
                //网络不允许，服务没有请求到
            }else if(xhr.readyState == 4 && xhr.status != 200){
                //errer 有没有有就执行没有就不执行
                error &&error(xhr.status)//告知状态是什么，来分析错误
                // if(errer)erer(xhr.status); // 也可以这样写
            }
        }
        // 5 做get和post的区分
        if(type=="get"){
            xhr.send();
            // 5.1 需要进行判断传入的值
        }else if(type=="post"){
            
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            //方式一：post是用str传入  
            // xhr.send(str);
            // 方式二：拼接的连接符&，如果先去掉可以使用截取、
            xhr.send(str.slice(0,str.length-1));
    }
    }
}





