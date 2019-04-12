require.config({
	baseUrl:"module",
	paths:{
		"jq":"../libs/jquery.2.2.4",
		//"cook":"../libs/cookie",
		"log":"login",
		"reg":"register"
		
	}
})
require(["jq","log","reg"],function(_,log,reg){
	//登录
			var name=$("#name");
			var pass=$("#pass");
			var obtn = $("#btnlog");
			var orbtn = $("#btnreg");
			new log({
				name:name,
				pass:pass,
				btn:obtn
			})
			new reg({
				name:name,
				pass:pass,
				btn:orbtn
			})
})