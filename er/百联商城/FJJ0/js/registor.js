//	var txt1 = document.getElementById("username");
//  var txt2 = document.getElementById("phone");
//  var txt3 = document.getElementById("scroe");
//  var s1 = document.querySelector(".s1");
//  var s2 = document.querySelector(".s2");
//  var s3 = document.querySelector(".s3");
//  var sp1 = document.querySelector(".sp1");
//  var sp2 = document.querySelector(".sp2");
//  var sp3 = document.querySelector(".sp3");
//  var butn = document.getElementById("butn");
//   var time;
//   var Opass = document.getElementById('pass');
//   var q1=q2=q3=q4=0;
//
//  // 设置状态
//  var useronoff = telonoff = yzonoff = false;
//  // 用户名验证
//  function userName() {
//      var re = /^[a-zA-Z][\wa-zA-Z0-9]{5,19}$/;
//      if (re.test(txt1.value)) {
//          s1.style.color = "green";
//          s1.innerHTML = "用户名可用";
//          useronoff = true;
//      } else {
//          s1.style.color = "red";
//          s1.innerHTML = "用户名格式错误";
//          
//          useronoff = false;
//      }
//  }
//  Opass.onblur = function(){
//					var passval = this.value;//从新声明
//					if (passval.length>=6 && passval.length<=20) {
//						var a=0,b=0,c=0;//设置都为0 的状态
//						var reg=/\d+/;
//						a = reg.test(passval) ? 1 : 0;
//						var reg1=/[a-zA-Z+]/
//						b = reg1.test(passval) ? 1 : 0;
//						var reg2=/[^a-zA-Z\d+]/
//						c = reg2.test(passval) ? 1 : 0;//成功返回第一个值，否返回第二个值
//						
//						var str='';//空字符，用来接受
//						switch(a+b+c){
//							case 1:
//							str='弱'
//							break;
//							case 2:
//							str="中"
//							break;
//							case 3:
//							str="强"
//							break;
//							
//						}
//						this.nextElementSibling.innerHTML = str;
//							 y =true;
//					} else{
//						this.nextElementSibling.innerHTML="密码长度不够"
//							 y =false;
//					}
//				}
//				
//  
//
//			
//			
//  // 手机号验证
//  function phone() {
//      var re = /^1(3|4|5|7|8)\d{9}$/;
//      if (re.test(txt2.value)) {
//          s2.style.color = "green";
//          s2.innerHTML = "手机号正确";
//          telonoff = true;
//      } else {
//          s2.style.color = "red";
//          s2.innerHTML = "手机号错误";
//         
//          telonoff = false;
//      }
//  }
//
//	function scroe() {
//	        var re = /^[a-zA-Z0-9]{4,6}$/;
//	        if (re.test(txt3.value)) {
//	            s3.style.color = "green";
//	            s3.innerHTML = "验证码正确";
//	            yzonoff = true;
//	        } else {
//	            s3.style.color = "red";
//	            s3.innerHTML = "验证码错误";
//	            
//	            yzonoff = false;
//	        }
//	    }
//	zhuce.onclick=function(){
//			
//			if(q1&&q2&&q3&&q4){
//							
//			}
//		}
class Zhuce{
				constructor(){
					this.user=$("#user");
					this.pass=$("#code");
					this.repeat=$("#repeat");
					this.tel=$("#tel");
					this.email=$("#email");
					this.sub=$("#sub");
					this.state=$("#state");
			
	    	this.url = "http://api.icodeilife.cn:81/user";
			this.addEvent();
		}
		addEvent(){
			var that=this;
			this.sub.click(function(){
				that.load();
			})
		}
		load(){
			console.log(1)
			$.ajax({
				url:this.url,
				data:{
					type:"register",
					user:this.user.val(),
					pass:this.pass.val(),
					repeat:this.repeat.val(),
					tel:this.tel.val(),
					
				},
				success:(res)=>{
					console.log(res)
					res=JSON.parse(res)
					if(res.code==0){
						this.state.html("注册失败，<a href='registor.html'>请重新注册</a>")
					}
					if(res.code==1){
						setInterval(()=>{
							location.href="login.html"
						},1000)
						this.state.html("1s后跳转，<a href='login.html'>立即跳转</a>")
					}
				}
			})
		}
	}
	new Zhuce();
	
	

