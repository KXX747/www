class Details{
    constructor(){
        this.url = "http://localhost/bailian-2/bailian/datas/goods.json";
        this.dbox = document.querySelector(".dbox");
            this.localNum = 0;
            this.addEvent();
            this.load();
        }
		//ajax请求数据
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
		// 查询本地存储里的身份编码
        getLocal(){
            this.goods2 = localStorage.getItem("goods2") ? JSON.parse(localStorage.getItem("goods2")) : [];
            this.display();
        }
		//拿到身份编码，并判断和json数据的身份编码为一致的情况下才渲染页面
        display(){
            let str = "";
            for(let i=0;i<this.res.length;i++){
                for(let j=0;j<this.goods2.length;j++){
                    // console.log(this.res[i])
                    if(this.res[i].goodsIds == this.goods2[j].ids){
                        str = `<div class="cont" index="${this.res[i].goodsId}">
                                    <div class="box">
                                        <div class="zhu">
                                            <img src="${this.res[i].url}"/>
                                        </div>
                                        <div class="fu">
                                            <img src="${this.res[i].urls}"/>
                                            <img src="${this.res[i].urlss}"/>
                                        </div>
                                    </div>
                                    <div class="xinxi">               
                                        <p>${this.res[i].name}</p>
                                        <u>${this.res[i].price}</u>
                                        <span>上海：虹口</span>
                                        <em>${this.res[i].tip}</em>
                                        <i></i>
                                        <div>
                                            <b>购买数量：</b>
                                            <input type="number" value="1"  class="num" min=1>
                                        </div>
                                        <div class="xiadan">
                                            <div class="goumai">继续购买</div>
                                            <div class="car">加入购物车</div>
                                            <div class="jiezhang">结账</div>
                                        </div>
                                    </div>
                                </div>`;
                    }
                }
            }
                    // console.log(this.goods2)
            this.dbox.innerHTML = str;
        }
		//添加事件
        addEvent(){
			let that = this;
			this.dbox.addEventListener("click",function(eve){
				let e = eve || window.event;
				let target = e.target || e.srcElement;
				if(target.className == "car"){

					that.id = target.parentNode.parentNode.parentNode.getAttribute("index");
					console.log(that.id)
					that.setLocal();
				}
                if(target.className == "goumai"){
                    location = "car-list.html";
                }
                if(target.className == "jiezhang"){
                    location = "car-add.html";
                }

			})
            this.dbox.addEventListener("input",function(eve){
                let e = eve || window.event;
				let target = e.target || e.srcElement;
				if(target.className == "num"){

					that.id = target.parentNode.parentNode.parentNode.getAttribute("index");
					that.localNum = target.value;
                    console.log(that.localNum)
					that.setLocal();
				}
            })
		}
        setLocal(){
			
			this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
			console.log(this.goods)
			if(this.goods.length < 1){
				this.goods.push({
					id:this.id,
					num:this.localNum
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
						num:this.localNum
					})
				}
			}
			localStorage.setItem("goods",JSON.stringify(this.goods));
		}
    }
    new Details();