// 读取商品分类信息

var odl =document.querySelectorAll(".nav-list dl");
var oshopdetail = document.querySelector(".shopdetail");
var menu_detail = document.querySelectorAll(".menu_detail dl");
var odiv =document.querySelectorAll(".shopdetail div");

    // console.log("osh="+oshopdetail);
    // console.log("odl="+odl);
    // console.log(".menu_detail="+menu_detail);
    console.log("odiv="+odiv);
    
hide();

for(var i=0;i<odl.length;i++){
    console.log("odl的数据="+odl[i]);
    var intem = odl[i];
    intem.index = i;

    intem.onmousemove=function(){
        console.log("intem onmousemove");
        //获取列表下标
        var index = this.index;
        for(var j=0;j<odl.length;j++){
            odl[j].className="box-l";
          //  odiv[index].className = "menu_detail menu";
        }
        this.className ="box-l nav-bg";
        odiv[index].className = "menu_detail menu_block";
        console.log("设置第"+(index+1)+"条数据显示");
        //
        show();

    }
    
    intem.onmouseout = function(){
        console.log("intem onmouseover");
        this.className="box-l";

        var index = this.index;  //获取列表下标
       // console.log('this.index='+index);
        odiv[index].className = "menu_detail menu";
        console.log("设置第"+(index+1)+"条数据隐藏");
        hide();
    }
}

// 商品分类详情显示
function show(){
    console.log("show()...");
    oshopdetail.style.visibility= "visible";
    oshopdetail.style.backgroundColor="#fff";
}
// 商品分类详情隐藏
function hide(){
    console.log("hide()....");
    oshopdetail.style.visibility= "hidden";
    oshopdetail.style.backgroundColor="#333333";
}
