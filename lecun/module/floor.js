//$("#list").children("li").on("click",function(){
//			var ind=$(this).index()
//			var t=$("#box"+(ind+1)).offset().top
//			$("html").animate({
//				scrollTop:t
//			})
//		})
define(function(){
	class Floor{
		constructor(ali){
			this.ali=ali;
			this.init();
		}
		init(){
			var that=this;
			this.ali.on("click",function(){
				var ind=$(this).index();
			
				if(ind==that.ali.length-1){
					$("html").animate({
					scrollTop:0
				})
				}else{
					
				var t=$(".data-"+(ind+1)).offset().top;
				$("html").animate({
					scrollTop:t
				})
				}
				
			})
		}
	}
	return Floor;
})