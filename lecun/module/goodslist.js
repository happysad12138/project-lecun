define(function(){
	class List{
		constructor(){
		                  
	        this.url="data/dataIndex.json";
			this.load();
			}
		load(){
			$.ajax({
				url:this.url,
				success:(res)=>{
					this.res=res;
					this.display();
					}
				});
			}
		display(){
			var str="";
			for(var i=0;i<5;i++){
						str+=`<li index="${this.res[i].goodsId}"><a href="datadetails.html">
								<img src="${this.res[i].src}" />
								<div class="goods-msg">
									<p class="goods-msg-t">${this.res[i].hintro}</p>
									<p class="goods-msg-c">${this.res[i].spanIntro}</p>
									<p class="goods-msg-b">￥${this.res[i].price}</p>
							</div>
						</a></li>`;
					}
					$("#cont").children("ul").html(str);
				}		
			}			
	return List;

})
