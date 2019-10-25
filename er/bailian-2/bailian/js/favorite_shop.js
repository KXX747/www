//猜你喜欢的商品生成

//生成数据添加到div
var fshop =document.querySelectorAll(".featured-tit .featured-tit-shop");

//猜你喜欢第一个
// const fOneUrl ="http://localhost/bailian/data/goods.json";
const fOneUrl ="http://localhost/bailian-1/bailian/data/goods.json";

GetGoodsList();

//获取本地json列表
function GetGoodsList() {
    //获取本地json文件
    ajax({
        url:fOneUrl,
        success:function (res) {
            // console.log("res = "+res);
            var responseJson=JSON.parse(res)
            //获取最爱的三个布局
            for (var i=0;i<fshop.length;i++){
                newShop(fshop[i],responseJson);
            }

        }
    })
}


// newShop(fshop);

//生成数据
//f 为生成的数据添加的div
function newShop(f,data) {

    console.log("开始动态生成shop。。。。。。");
    console.log("data="+data +"   data.name="+data[0].name);

    //遍历数据，根据数组生成元素
   for (var i =0;i<data.length;i++){
       //外层边框
       var divBroder=document.createElement("div");
       divBroder.className ="pro-show";
       divBroder.background ="#fff";
       

    


       //图片
       var proImgDiv=document.createElement("div");
       proImgDiv.className ="pro-img";
    

       var proImgADiv=document.createElement("a");
       proImgADiv.href =data[i].url;
       var proImgimg=document.createElement("img");
       proImgADiv.appendChild(proImgimg);

       proImgimg.src =data[i].src;
       proImgDiv.appendChild(proImgADiv);
       divBroder.appendChild(proImgDiv);

       //名字
       var proNameDiv=document.createElement("div");
       proImgDiv.className ="pro-name";
       var proNamea=document.createElement("a");
       proNamea.href =data[i].url;
       proNamea.innerHTML =data[i].name;
       proNamea.style.fontSize="14px";
       proNamea.style.color ="#99999";
       proNameDiv.appendChild(proNamea);
       divBroder.appendChild(proNameDiv);

       //价格
       var proMoneyDiv=document.createElement("div");
       proMoneyDiv.className ="pro-money";

       var proMoneylDiv=document.createElement("div");
       proMoneylDiv.className="pro-money-l";

       var proMoneylSpan=document.createElement("span");
       var proMoneyla=document.createElement("a");
       proMoneyla.className ="collection";
       proMoneylSpan.innerText= data[i].price;
       proMoneyla.innerHTML="收藏";

       proMoneylDiv.appendChild(proMoneylSpan);
       proMoneylDiv.appendChild(proMoneyla);


       proMoneyDiv.appendChild(proMoneylDiv);
       divBroder.appendChild(proMoneyDiv);

       //添加到f
       f.appendChild(divBroder);
   }
    console.log("结束动态生成shop。。。。。。")
}


