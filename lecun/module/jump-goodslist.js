define(function(){
	
	class JumpList{
		constructor(){
			this.ul=$(".goods");
			this.url="data/dataIndex.json";
			this.init();
			
		}
		init(){
			var that=this;
			
			this.ul.on("click","li",function(){
				var idn=$(this).attr("index");
				
				setCookie("goods",idn);
				
				//removeCookie(that.id,"ghj",null);
			})
			
			
		}
	}
	return JumpList;
})