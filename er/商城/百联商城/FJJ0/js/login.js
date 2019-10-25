
		class Denglu{
			// 
			constructor(){
				this.user=$("#user");//注册
				this.pass=$("#code");//密码
				this.sub=$("#sub");//登录
				this.state=$("#tep #state");
		
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
				$.ajax({
					url:this.url,
					data:{
						type:"login",
						user:this.user.val(),
						pass:this.pass.val()
					},
					success:(res)=>{
						console.log(res);
						this.res=JSON.parse(res);
						
						if(this.res.code==0){
							this.state.html("不存在此用户,<a href='registor.html'>亲注册</a>");
							
						}else if(this.res.code==1){
							setInterval(()=>{
								location.href="index.html"	;
							},3000)
							localStorage.setItem("logins",JSON.stringify(this.res.msg))
							this.state.html("登录成功3s后跳转,<a href='index.html'>立即跳转</a>");
							console.log(this.res)
							
						}else if (this.res.code==2) {
								this.state.html("账号密码不符，<a href='login.html'>重新登录</a>");
						}
					}
				})
			}
		}
		new Denglu();
