//服务器模块
let http = require("http");
//文件模块
let fs = require("fs");
//post接收数据,解析模块
let querystring = require("querystring");
//url模块用来解析url
let url = require("url");

//这是模拟的数据库,用来存放用户注册的信息
let arr = [];


//开启服务
http.createServer((req,res)=>{	//req表示前端过来的数据,res表示给前端的数据
	if(req.url != "/favicon.ico"){
		var urlObj = url.parse(req.url,true);
		
		
		
		switch(urlObj.pathname){
			case "/login":
				login(req,res,urlObj);
				break;
			case "/goods":
				getgoods(req,res,urlObj);
				break;
			case "/register":
				register(req,res);
				break;
			default:
				fs.readFile("../"+req.url,(error,data)=>{
					
					if(error == null){
						res.write(data);
					}else{
						res.write("404")
						
					}
					res.end();
				})
		}
	}
}).listen("8181","localhost",()=>{		//监听端口和地址
	console.log("服务器开启成功")
})


function login(req,res,url){
//	准备做一个get请求的接口响应---登录
//	url.query就是前端发送过来的get数据
	
	var onoff = true;
//	准备验证数据是否正确,遍历现存数据
	for(var i=0;i<arr.length;i++){
//		发现用户名和密码相同
		if(arr[i].user == url.query.user && arr[i].pass == url.query.pass){
//			返回成功的信息
			res.write('登录成功');
			
			onoff = false;
			break;
		}
	}
//	结束之后,没有发现相同,返回失败的信息
	if(onoff){
		res.write('登录失败')
	}
	
	res.end();
}



function register(req,res){
//	准备做一个post请求的接口响应---注册

//	post方式的数据不在url上面，
	var str = "";
	var i=0;
//	找到req身上的data事件（会多次触发）
	req.on("data",(msg)=>{
		str += msg;
		i++;
	})
//	还需要找到end事件，发送结束会触发end，获取所有数据
	req.on("end",()=>{
//		console.log("接收到的数据次数为："+i)		//测试
//		借助解析字符模块,解析接收到的数据为对象
		var obj = querystring.parse(str);
		var onoff = true;
//		查询初始用户库中是否有数据
		for(var i=0;i<arr.length;i++){
//			有相同数据,就报错
			if(arr[i].user == obj.user){
				res.write('重名')
				onoff = false;
				break;
			}
		}
//		没有相同数据,就添加数据
		if(onoff){
			res.write('注册成功')
			arr.push(obj);
			//console.log(arr)
			//res.write(JSON.stringify(arr));
		}
		res.end();
	})
}
