define(function(){
//	class Register{
//		constructor(options){
//			this.name=options.name;
//			this.pass=options.pass;
//			this.btn=options.btn;
//			this.init()
//			
//		}
//		init(){
//			var that=this;
//			this.btn.on("click",function(){
//			
//				$.ajax({
//					type:"post",
//					url:"http://localhost:8181/register",
//					data:{
//						user:that.name.val(),
//						pass:that.pass.val()
//					},
//					success:function(res){
//						alert(res);
//						setTimeout(function(){
//							location.href="login.html"
//						},3000);
//					},
//					error:function(a,b,c){
//						console.log(a,b,c)
//						
//					}
//				})
//			})
//		}
//	}
//	return Register;



class Register{
			constructor(options){
			this.name=options.name;
			this.pass=options.pass;
			this.btn=options.btn;
				this.url = "http://www.icodeilife.cn/ctrl/register.php";
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
					success:function(res){
						switch(res){
							case "0":
								alert("用户名重复");break;
							case "1":
								alert("注册成功，5秒后跳转到登录");
								//json.push({
									//that.name.val()
									
								//})
								//setCookie("msg",json);
								setTimeout(()=>{
									location.href = "login.html";
								},5000)
								break;
							case "2":
								alert("数据不全");
								break;
						}
					},
//					5.发送数据
					
					data:{
						tel:this.name.val(),
						pass:this.pass.val()
					},
//					6.发送之前loading
					
				});
			}
		}
		return Register;
})