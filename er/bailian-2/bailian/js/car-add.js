class Car{
    constructor(){
        this.url = "http://localhost/bailian-2/bailian/datas/goods.json";
        this.ool = document.querySelector(".tit");
        //获取控制复选框的全选按钮元素
        this.oelect = document.querySelector("#elect");
        //获取总数量和总价格的元素
        this.ototal = document.querySelector("#total");
        this.oprice = document.querySelector("#price");  
        //声明变量，存储总数量和总价格的数据--
        this.num = 0;  
        this.nums = 0;   
        // -----          
        this.onoff = 0; 
        this.load();
        this.addEvent();
        
       
    }
    load(){
        let that = this;
        ajax({
            url:this.url,
            success:function(res){
                // console.log(res);
                that.res = JSON.parse(res);
                that.getLocal();
            }
        })
    }
    getLocal(){
        this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
        this.display();
    }
    display(){
        let str = "";
        for(let i=0;i<this.res.length;i++){
            for(let j=0;j<this.goods.length;j++){
                if(this.res[i].goodsId == this.goods[j].id){
                    // 第一步:
                    //获取每一个商品的价格和数量，这个总数据计算的是在请求数据时的数据，在数量框内容发生改变的时候还要再计算一次
                    //计算每一个商品的总价 ：数量*价格
                    focus = this.res[i].price; 
                    let fo = parseInt(focus.substr(1,focus.length)) * parseInt(this.goods[j].num);
        
                    str += `<li index="${this.res[i].goodsId}">
                        
                                <i class="nuber">${j} <input type="checkbox" class="sure"></i>
                                <i><img src="${this.res[i].url}"></i>
                                <i>${this.res[i].name}</i>
                                <i>${this.res[i].price}</i>
                                <i class="kz"><input type="number" value="${this.goods[j].num}"  class="num" min=1></i>
                                <i total="${this.res[i].price}">${fo}</i>
                                <i class="delete">删除</i>
                            </li>`
                   
                }
            }
        }
        this.ool.innerHTML = str;
    }
    addEvent(){     
        let that = this;
        // //删除本地存储的数据
        this.ool.addEventListener("click",function(eve){
            let e = eve || window;
            let target = e.target || e.srcElement;
            if(target.className == "delete"){                  
                that.id = target.parentNode.getAttribute("index");
                //第六步:删除当前商品,所有商品的总价和总数量都要改变

                //删除当前选中的商品同时改变总数量和总价格
                //获取复选框、点击当前商品的总价和数量
                target.checkbox = target.parentNode.firstElementChild.firstElementChild;
                target.price = target.previousElementSibling.innerHTML;
                target.total = target.previousElementSibling.previousElementSibling.firstElementChild.value;
                // 判断复选框的状态，如果选中在删除之前先计算所有商品的总价在进行删除操作，如果没有选中直接删除当前商品
                if(target.checkbox.checked == true){      
                    // that.ototal.innerHTML = that.nums - target.total;
                    // that.oprice.innerHTML = that.num - target.price;
                    that.nums = that.nums - target.total;
                    that.num = that.num - target.price;
                    target.parentNode.remove();
                }else{

                    target.parentNode.remove();
                }
                that.setLocal(function(i){
                that.goods.splice(i,1);
                });
            }
        })
        //第三步:根据商品状态计算所有商品的总数量和总价格
        //添加点击事件,计算全选状态下所有商品的总价和总数量
        this.oelect.onclick = function(){
            // 获取复选框进行遍历拿到所有复选框
            let aSure = document.querySelectorAll(".sure");
            for(let i=0;i<aSure.length;i++){
                // 判断状态.当全选为选中时所有未选中的复选框的状态改为选中并且进行计算所有商品的总数量和总价
                if(that.oelect.checked == true){ 
                    //只计算复选框状态为未选中状态的值并进行改变选中状态的操作,如果计算的是选中状态的值会和单次计算的所有值产生冲突
                        if(aSure[i].checked == false){
                            aSure[i].su=parseInt(aSure[i].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML);
                            that.num = that.num + aSure[i].su;
                            aSure[i].sus=parseInt(aSure[i].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value);
                            that.nums = that.nums + aSure[i].sus;
                            that.oprice.innerHTML = that.num;
                            that.ototal.innerHTML = that.nums;
                            aSure[i].checked = true;
                            that.onoff = 1;
                        }
                }
                //当全选为未选中时,所有复选框状态改为未选中,并且所有商品的总数量和总价的值直接为0
                if(that.oelect.checked == false){
                    aSure[i].checked = false;
                    that.onoff = 0;

                    if(aSure[i].checked == false){
                        that.num = 0;
                        that.nums = 0;
                        that.oprice.innerHTML = that.num;
                        that.ototal.innerHTML = that.nums;
                    } 
                }
                
            }
      
        }
        // 第二步:
        // 根据复选框的状态统计总价和总数量
        this.ool.onclick = function(eve){
            let aSure = document.querySelectorAll(".sure");
            let e = eve || window;
            let target = e.target || e.srcElement;
            //找到当前点击的复选框
            if(target.className == "sure"){  
            // 判断当前点击的复选框为选中时,累计每一个选中状态下的单个商品总价和数量
                if(target.checked == true){
                    that.onoff = 1;
                    //累加
                    target.su=parseInt(target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML);
                    that.num = that.num + target.su;
                    target.sus=parseInt(target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value);
                    that.nums = that.nums + target.sus;

                }
                //未选中时,进行总价减掉取消当前商品的值获得最新的所有商品总价和数量
                if(target.checked == false){
                    that.onoff = 0;
                    
                    target.su=parseInt(target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML);
                    that.num = that.num - target.su;
                    target.sus=parseInt(target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value);
                    that.nums = that.nums - target.sus;
                }
            }
            that.oprice.innerHTML = that.num;
            that.ototal.innerHTML = that.nums;
            //第四步:
            // 遍历每一个复选框
            for(let i=0;i<aSure.length;i++){
                //不对
                // if(aSure[i].checked == true){
                //     that.oelect.checked = true
                    
                //     }
                // if(aSure[i].checked == false){
                //     that.oelect.checked = false
                // }
                aSure[i].onclick = function(){
                    //判断所有复选框的状态不为未选中时,全选框的状态改为选中
                    if(aSure[i].checked != false){
                        that.oelect.checked = true
                        console.log(aSure[i])
                    }
                    //当有一个复选框的状态为未选中的时候全选改变状态
                    if(aSure[i].checked == false){
                        that.oelect.checked = false
                    }

                }
            }
        }
   
        //第五步:当前商品数量发生改变的同时所有商品价格数量的数据也发生改变
        // 在单个商品数量内容发生改变时所有商品的总数量价格也跟着改变
        //内容改变触发事件
        this.ool.addEventListener("input",function(eve){
           
            let aSure = document.querySelectorAll(".sure");
            let e = eve || window;
            let target = e.target || e.srcElement;
            //判断当前商品数量调整框发现变化时
            if(target.className == "num"){
                that.val = target.value;
                that.id = target.parentNode.parentNode.getAttribute("index");

                that.to = target.parentNode.nextElementSibling.getAttribute("total");

                target.checkbox = target.parentNode.parentNode.firstElementChild.firstElementChild;

                that.setLocal(function(i){
                    that.goods[i].num = that.val;
                });
                that.total = parseInt(that.to.substr(1,that.to.length));
                //计算单个商品的总价格                 
                target.parentNode.nextElementSibling.innerHTML = parseInt(that.to.substr(1,that.to.length)) * parseInt(that.val);

                //判断当前商品为选中时,都要判断所有的商品的状态
                if(target.checkbox.checked == true){
                    //总数量总价格为0；一定要为0；不然会和之前判断全选所计算的总价格和总数量进行累加
                    that.num = 0;
                    that.nums = 0;
                   //遍历每一个复选框进行刷选
                    for(let i=0;i<aSure.length;i++){                          
                        if(aSure[i].checked == true){
                            //获取每一个选中商品的数量和商品总价格
                            aSure.price = parseInt(aSure[i].parentNode.parentNode.lastElementChild.previousElementSibling.innerHTML);
                            aSure.total = parseInt(aSure[i].parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.value);
                            //把所有选中商品当前的数值进行累加获得所有商品的总数量和总价格
                            that.num = that.num + aSure.price;
                            that.nums = that.nums + aSure.total;
                            
                        }
                    }
                    that.oprice.innerHTML = that.num;
                    that.ototal.innerHTML = that.nums;
                }
            }
        })
    }
    setLocal(fn){
        for(let i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
               fn(i);
            }
        }
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }
}
new Car();