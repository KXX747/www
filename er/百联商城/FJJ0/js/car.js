class Car{
	constructor(){
		this.tbody = document.querySelector('tbody');
		this.url = 'http://localhost/FJJ0/data/goods.json';
		this.load();
		this.addEvent();
	}
	addEvent(){
		var that = this
		this.tbody.addEventListener('click',function(eve){
			if(eve.target.className == 'del'){
				that.id = eve.target.parentNode.getAttribute('index');
				eve.target.parentNode.remove();
				that.changeCookie(function(i){
					that.goods.splice(i,1)
				})
			}
		})
		this.tbody.addEventListener("input",function(eve){
			if(eve.target.className == 'num'){
				that.id = eve.target.parentNode.parentNode.getAttribute('index');
				that.num = eve.target.value;
				that.changeCookie(function(i){
					that.goods[i].num = eve.target.value;
				})
			}
		})
	}
	changeCookie(callback){
		var i = 0;
		this.goods.some((vaal,index)=>{
			i = index;
			return val.id== this.id;
		})
		callback(i);
		setCookie("goods",JSON.stringify(this.goods));
	}
	load(){
		var that = this;
		ajaxGet(this.url,function(res){
			that.res = JSON.parse(res);
			that.getCookie()
		})
	}
	getCookie(){
		this.goods = getCookie('goods') ? JSON.parse(getCookie('goods')) : [];
		this.display();
	}
	display(){
		v(ar str = '';
		this.res.forEach((resVal)=>{
			this.goods.forEach(goodsVal)=>{
				if(resVal.g == goodsVal.id){
					str += `<tr index="${resVal.goodsId}">
								<td><img src="${resVal.src}"></td>
								<td><img src="${resVal.des}"></td>
								<td><img src="${resVal.price}"></td>
								<td><input class="num" type='number' value ='${goodsVal.num}' min=1></td>
								<td class='del'>删除</td>
							</tr>`
				}
			})
		})
		this.tbody.innerHTML = str;
	}
}	

new Car;
