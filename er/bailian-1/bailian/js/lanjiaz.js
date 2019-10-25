

var clientH = document.documentElement.clientHeight;


// 图片距离页面顶部的距离
var aimg = document.querySelector(".imglike-class");
var arr = [];
for(var i=0;i<aimg.length;i++){
    arr.push(aimg[i])
}

lazy();

onscroll = function(){
    lazy();
}


function lazy(){
    // 滚动的top
    var scrollT = document.documentElement.scrollTop;
    for(var i=0;i<arr.length;i++){
        // 滚动的top > 图片距离顶部的距离 - 可视区域的高度
        if(scrollT > arr[i].offsetTop - clientH){
            // 要出现了，要加载了
            arr[i].src = arr[i].getAttribute("abc-src");
            // 当图片已经被加载了，就从数组中将元素删除
            arr.splice(i,1);
            // 在循环中改变了数组的成员的排列方式，要将索引，回退1，才能拿到向前补位的成员
            i--;
        }
    }
}

