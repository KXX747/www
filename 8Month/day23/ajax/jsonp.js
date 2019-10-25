function jsonp(url,success,data){
    data = data || {};
    var str = "";
    for(var i in data){
        str += `${i}=${data[i]}&`;
    }
    url = url + "?" + str;

    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    
    window[data[data.columnName]] = function(res){
        success(res)
    }
}