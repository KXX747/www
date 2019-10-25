		function Banner(){
//			1.获取元素
			this.left = document.getElementById("left")
			this.right = document.getElementById("right")
			this.imgbox = document.querySelector(".imgbox")
			this.img = this.imgbox.children;
			
//			要进来的,其实就是当前索引
			this.index = 0;
//			要走的：其实就是上一张索引
			this.iPrev = this.img.length-1;

//			2.绑定事件
			this.addEvent()
		}
		Banner.prototype.addEvent = function(){
			var that = this;
//			事件
			this.left.onclick = function(){
//				3.计算索引
				that.changeIndexLeft()
			}
			this.right.onclick = function(){
//				3.计算索引
				that.changeIndexRight()
			}
		}
		Banner.prototype.changeIndexLeft = function(){
			if(this.index == 0){
				this.index = this.img.length-1;
				this.iPrev = 0;
			}else{
				this.index--;
				this.iPrev = this.index+1;
			}
			this.displayLeft();
		}
		Banner.prototype.changeIndexRight = function(){
//			计算
			if(this.index == this.img.length - 1){
				this.index = 0;
				this.iPrev = this.img.length-1;
			}else{
				this.index++;
				this.iPrev = this.index - 1;
			}
//			4.根据索引显示图片
			this.displayRight();
		}
		Banner.prototype.displayLeft = function(){
//			要走的
//			从哪走
			this.img[this.iPrev].style.left = 0;
//			走到哪
			move(this.img[this.iPrev],{left:this.img[0].offsetWidth})
			
//			要进来的
//			从哪进来
			this.img[this.index].style.left = -this.img[0].offsetWidth + "px";
//			进到哪
			move(this.img[this.index],{left:0})
		}
		Banner.prototype.displayRight = function(){
//			要走的
//			从哪走
			this.img[this.iPrev].style.left = 0;
//			走到哪
			move(this.img[this.iPrev],{left:-this.img[0].offsetWidth})
			
//			要进来的
//			从哪进来
			this.img[this.index].style.left = this.img[0].offsetWidth + "px";
//			进到哪
			move(this.img[this.index],{left:0})
		}
		
//		最后一步：启动
		new Banner();

//	$(".banner1").banner({
//	        items:$(".banner1").find("img"),        //必传
//	        left:$(".banner1").find("#left"),       //可选
//	        right:$(".banner1").find("#right"),     //可选
//	        autoPlay:true,                          //可选，默认有自动播放
//	        delayTime:2000,                         //可选，默认2000
//	        moveTime:300,                          //可选，默认300
//	        index:0,                                //可选，默认0
//	    })
// 