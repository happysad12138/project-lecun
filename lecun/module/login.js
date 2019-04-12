define(function(){
//	class Login{
//		constructor(options){
//			this.name=options.name;
//			this.pass=options.pass;
//			this.btn=options.btn;
//			this.init()
//		}
//		init(){
//			var that=this;
//			this.btn.on("click",function(){
//				$.ajax({
//					type:"get",
//					url:"http://localhost:8181/login",
//					data:{
//						user:that.name.val(),
//						pass:that.pass.val()
//					},
//					success:function(res){
//						alert(res);
//						setTimeout(function(){
//							location.href="index.html";
//						},3000);
//					},
//					error:function(a,b,c){
//						console.log(a,b,c)
//					}
//				})
//			})
//		}
//	}
//	return Login;








class Login{
			constructor(options){
			this.name=options.name;
			this.pass=options.pass;
			
			this.btn=options.btn;
			
				this.url="http://www.icodeilife.cn/ctrl/login.php";
				this.init();
			}
			init(){
				var that=this;
				this.btn.click(function(){
					that.load();
				})
			}
			load(){
				var that=this;
				$.ajax({
					url:this.url,
					data:{
						user:this.name.val(),
						pass:this.pass.val()
					},
					success:function(res){
						switch(res){
							case "0":
							alert("用户名密码不符");break;
							case "1":
							alert("重新登录");break;
							default:
							alert("登录成功，3秒后跳转到首页");
								//console.log(that.name.val());
								that.setCookie("user",that.name.val());
							setTimeout(()=>{
									location.href = "index.html";
								},3000)
							that.res=JSON.parse(res);
							console.log(that.res);
							break;
						}
					}
					
				})
			}
			setCookie(key,value,all){
				all=all||{};
				var d=new Date();
					d.setDate(d.getDate()+all.expires);
					var time=all.expires==undefined?"":";expires="+d;
					var path=all.path==undefined?"":";path="+all.path;
					document.cookie=key+"="+value+time+path;
			}
		}
		return Login;
})