define(function(){
	class Index{
			
			constructor(url){
				this.cont=$(".fl-ul");
				this.url=url;
				this.load();
				//this.addEvent();
				
			}
			load(){
				var that=this;
				$.ajax({
					type:"get",
					url:this.url,
					success:function(res){
						
						that.res = res;
						that.display()
					},
					error:function(a,b,c){
						console.log(a,b,c)
					}
				})
			}
			display(){

				var str="";
				for(var i=0;i<this.res.length;i++){
					str+=`<li goodsId="${this.res[i].goodsId}"><a href="datadetails.html">
                  <h3>${this.res[i].hintro}</h3>
                  <span class="discount">${this.res[i].spanIntro}</span>
                 <div class="flr_ra_img">
                     <img src="${this.res[i].src}">
                  </div>
                   
                   <span class="fr"><span class="price">¥${this.res[i].price}</span><img src="//www.lecuntao.com/homenew/templates/default/images/flr_ua_buy.png"></span>
                  </div>
              	</a></li>`;
				}
				this.cont.html(str);
			
		}
			
			
	}
		
		return Index;
})