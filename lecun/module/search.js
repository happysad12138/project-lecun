define(function(){
	class Search{
		constructor(){
			this.txt=$("#search-txt");
			this.list=$(".list-search");
			this.url="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
			this.addEvent();
		}
		addEvent(){
			var that=this;
			document.onkeyup=function(){
				that.val=that.txt.val();
				that.onload();
			}
		}
		onload(){
			var that=this;
						jsonp(this.url,function(res){
				that.res=res;
				that.display();
			},{
				_name:"cb",
				cb:"asdasgtdsa",
				wd:this.val
			})
		}
		display(){
			var str="";
			this.res.s.forEach(function(v){
				str+=`<li>${v}</li>`;
			})
			this.list.html(str);

		}
	}
	return Search;
})