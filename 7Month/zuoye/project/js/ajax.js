



function ajaxGet(url,success,data){
	data = data || {};
	var str = '';
	for(var i in data){
		str = str + i + "=" + data[i] + "&";
	}
	var d = new Date();
	url = url + "?" + str + "__qft="+d.getTime();
	var ajax = new XMLHttpRequest();
	ajax.open("get",url,true);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			success(ajax.responseText)
		}
	}
	ajax.send();
}

function ajaxPost(url,success,data){
	data = data || {};
	var str = "";
	for(var i in data){
		str += `${i}=${data[i]}&`;
	}
	str = str.slice(0,str.length-1);
	var ajax = new XMLHttpRequest();
	console.log("url=",url);
	
	ajax.open("post",url,true);
	ajax.onreadystatechange = function(){
		console.log("公共接口数据="+ajax.status+ "    《》《》"+ajax.readyState);
		if(ajax.readyState == 4 && ajax.status == 200){
			console.log("公共接口返回数据="+ajax.responseText);
			success(ajax.responseText)
		}
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send(str);
}

function jsonp(url,success,data){
	data = data || {};
	var str = "";
	for(var i in data){
		str += `${i}=${data[i]}&`;
	}
	var d = new Date();
	url = url + "?" + str + "__qft=" + d.getTime();

	var script = document.createElement("script");
	script.src = url;
	document.body.appendChild(script);
	
	window[data[data.columnName]] = function(res){
		success(res)
	}
}