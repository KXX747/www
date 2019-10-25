class List{
    constructor(){
        // this.url = "http://localhost:63343/bailian-1/bailian/datas/goods.json";
        this.url ="http://localhost/bailian-2/bailian/datas/goods.json";
        this.ocont = document.querySelector(".cont");
        this.load();
        this.addEvent();
    }
    load(){
        let that = this;
        ajax({
            url:this.url,
            success:function(res){
                that.res = JSON.parse(res);
                // console.log(res);
                that.display();
            }
        })
    }
    //创建一个查看详情页面的按钮
    display(){
        let str = "";
        for(let i=0;i<this.res.length;i++){
            str += `<div class="goods" index="${this.res[i].goodsId}" indexs="${this.res[i].goodsIds}">
                        <img src="${this.res[i].url}"/>
                        <p>${this.res[i].price}</p>
                        <span>${this.res[i].name}</span>
                        <em>${this.res[i].tip}</em>
                        <div class="foor">
                            <i class="btn">加入购物车</i>
                            <u class="btn1">查看详情</u>
                        </div>
                    </div>`
                    
        }
        this.ocont.innerHTML = str;
    }
    addEvent(){
        let that = this;
        this.ocont.addEventListener("click",function(eve){
            let e = eve || window.event;
            let target = e.target || e.srcElement;
            if(target.className == "btn"){

                that.id = target.parentNode.parentNode.getAttribute("index");
                
                that.setLocal();
            }
            //判断点击的按钮，当点击的是查看详情的按钮时，页面进行跳转
            if(target.className == "btn1"){
                that.ids = target.parentNode.parentNode.getAttribute("indexs");
                
                that.singleLocal();
                location = "car-details.html";
            }
        })
    }
    setLocal(){
        
        this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
        console.log(this.goods)
        if(this.goods.length < 1){
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            let i;
            let o = this.goods.some((val,index)=>{
                i = index;
                return val.id == this.id;
            })
            if(o){
                this.goods[i].num++;
            }else{
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }
    // 把点击查看详情的当前商品的身份编码保存到本地存储里
    singleLocal(){
        // console.log(this.ids)
        this.goods2 = [{ids:this.ids}];
        console.log(this.goods2)

        localStorage.setItem("goods2",JSON.stringify(this.goods2));
    }
}
new List();