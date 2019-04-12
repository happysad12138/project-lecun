require.config({
	baseUrl:"module",
	paths:{
		"jq":"../libs/jquery.2.2.4",
		"json":"../libs/ajax",
		"cook":"../libs/cookie",
		"floor":"floor",
		//"log":"login",
		//"reg":"register",
		"addInd":"adddataInd",
		"det":"goodslist",
		"jump":"jump",
		"show":"showdetails",
		"menu":"menu",
		"buy":"buy",
		"sear":"search",
		
		"jump-list":"jump-goodslist"
		
		
	}
})
require(["jq","json","cook","floor","addInd","det","jump","show","menu","buy","sear","jump-list"],function(_,j,c,floor,adInd,det,jump,show,menu,bu,sea,jl){
	//floor楼层
	var ali=$(".floor").find("li");
	//登录
//			var name=$("#name");
//			var pass=$("#pass");
//			var obtn = $("#btnlog");
//			var orbtn = $("#btnreg");
//			new login({
//				name:name,
//				pass:pass,
//				btn:obtn
//			})
//			new reg({
//				name:name,
//				pass:pass,
//				btn:orbtn
//			})
	new floor(ali);
	
	//首页数据
	var url="data/dataIndex.json";
	new adInd(url);
	//跳转到商品详情
	var jup=new jump;
//	console.log(jup)
	
	
	new show();
	
	//二级菜单
	new menu;
	new bu;
	//搜索框
	new sea;
	//初始化商品列表
	new det;
	//再跳商品详情
	new jl;
	//console.log(jup.arr[jup.arr.length-1])
//	var ban=$(".bannerp");
//	var a=$(".bannerp .imgbox a");
//	new banner({
//		ban:ban,
//		a:a
//	})

	
})