define(function(){
	class Menu{
		constructor(){
			this.url="data/menudata.json"
			this.ul=$(".lnav dt ul");
			this.li=$(".lnav dt ul li")
			this.dd=$(".lnav dd")
			//this.init();
			this.load()
		}
		load(){
			var that=this;
			$.ajax({
					type:"get",
					url:this.url,
					success:function(res){
						that.res = res;
						that.init()
					},
					error:function(a,b,c){
						console.log(a,b,c)
					}
				})
		}
		init(){
			var that=this;
			this.dd.hover(function(){
				that.ul.css({
					display:"block"
				})
				that.ul.hover(function(){
					that.ul.css({
					display:"block"
				})
			
				},function(){
					that.ul.css({
					display:"none"
				})
				})
				that.ul.html(that.res[$(this).index()-1].showchild);
				
				//console.log($(this).index());
			},function(){
				that.ul.css({
					display:"none"
				})
			})
		}
		
	}
	return Menu;
})
