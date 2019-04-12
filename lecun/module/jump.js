define(function(){
	
	class JumpDetail{
		constructor(){
			this.ul=$(".fl-ul");
			this.url="data/dataIndex.json";
			this.init();
			
		}
		init(){
			var that=this;
			this.arr=[]
			this.ul.on("click","li",function(){
				var idn=$(this).attr("goodsId");
				
				setCookie("goods",idn);
				
				//removeCookie(that.id,"ghj",null);
			})
			
			
		}
	}
	return JumpDetail;
})