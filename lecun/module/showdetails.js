define(function(){

	class Show{
			constructor(){
				
				this.url="data/dataIndex.json";
				
				this.cont=$("#content");
				this.load();
				
				
			}
		load(){
				
			var that=this;
				$.ajax({
					type:"get",
					url:this.url,
					success:function(res){
						that.res = res;
						that.judge();
						that.expand();
						that.num();
						
						
					},
					error:function(a,b,c){
						console.log(a,b,c)
					}
				})
		}
		judge(){
			
						var str="";
		
			//console.log(typeof this.res[0].goodsId)
					for(var j=0;j<this.res.length;j++){
						
						if(getCookie("goods")==this.res[j].goodsId){
							
							str+=`<div class="content-del m">
        		<div class="pic-goods">
        			<span></span>
        			<p></p>
        			<img src="${this.res[j].src}">
        			<div class="hidden">
        				<div class="hidden-img">
        					
            				<img src="${this.res[j].src}">
        				</div>
	
            		</div>
        			<ul>
        				<li><img src="http://img.lecuntao.com/data/upload/shop/store/goods/4736/2019/03/02/4736_06048559517964276_60.jpg"></li>
        				<li><img src="http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862917773856680_60.jpg" ></li>
        				<li><img src="http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907597168286250_60.png" ></li>
        				<li><img src="http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907596935235550_60.jpg" ></li>
        			</ul>
        		</div>
        		<div class="info-goods">
        			<div class="name">
		                <h1>${this.res[j].hintro}</h1>
		                <div id="adv_goods" style="color: #e10f12;font-size: large;">拍二套送2套同款</div>
            		</div>
            		<div class="intro">
            			<div class="pic-bac">
            				<img src="http://www.lecuntao.com/shop/templates/default/images/msbg.jpg?v=4ab264ba9c">
            				
            				
            			</div>
            			<h3>运费：由卖家承担</h3>
            			<h4>货物状态：有货</h4>
            			<p><span>购买数量：</span><input type="button" value="-" id="reduce"><input type="text" id="txt" value="1" style="text-align:center"><input type="button" value="+" id="up"></p>
            			<p><input type="button" value="添加购物车" id="buy" gods="${this.res[j].goodsId}"></p>
            		</div>
            		
        			
        		</div>
        	</div>`
						}
					}
				
				this.cont.html(str);
				
		}
		num(){
			this.left=$(".intro p #reduce");
			this.right=$(".intro p #up");
			this.txt=$(".intro p #txt");
			this.buy=$(".intro p #buy")
			this.val=$(".intro p #txt").val()-0;
			this.numEvent()
		}
		numEvent(){
			var that=this;
			var goods=[];
			this.left.on("click",function(){
				
				if(that.val==0){
					alert("商品不能再减少了呦")
				}else{
					that.val--;
				that.txt.val(that.val);
				}
				
			})
			this.right.on("click",function(){
				that.val++;
				that.txt.val(that.val);
				
			})
			this.buy.on("click",function(){
				console.log(1)

//				if(getCookie("user")==""){
//					alert("请先登录!")
//				}else{
//					alert(getCookie("user"))
//				that.setcookie($(this).attr("gods"),$(".intro p #txt").val());
//					
//				}
//				goods.push({
//					id:$(this).attr("gods"),
//					num:$(".intro p #txt").val()
//				})
//				
//				setCookie("god",JSON.stringify(goods));
			})
		}
		setcookie(id,num){
			var id=id;
			var num=num;
			var onoff=true;
				var goods=getCookie("gods");
				//console.log(getCookie("gods"))
				
				if(goods==""){
					goods=[{
						id:id,
						num:num
					}];
				}else{
					//如果不是第一次存数据，判断当前点击的商品是否已被加入购物车
					goods = JSON.parse(goods);
					goods.forEach((v)=>{
						if(v.id==id){
							var a=parseInt(v.num);
							a+=num-0;
							v.num=a;
							onoff=false;
						}
					})
					if(onoff){
						goods.push({
							id:id,
							num:1
						})
					}
				}
				setCookie("gods",JSON.stringify(goods));
		}
		//放大镜
		expand(){
			var p=$(".pic-goods p");
			var box=$(".pic-goods");
			var span=$(".pic-goods span");
			var img=$(".hidden-img img");
			var boximg=$(".hidden");
			this.init({
				p:p,
				box:box,
				span:span,
				img:img,
				boximg:boximg
			})
			
		}
		init(options){
				this.box=options.box;
				this.span=options.span;
				this.p=options.p;
				this.img=options.img;
				this.imgbox=options.boximg;
				
				this.p.on("mouseover",()=>{
					this.show();
				})
				this.p.on("mousemove",(e)=>{
					this.move(e);
				})
				this.p.on("mouseout",()=>{
					this.out();
				})
			}
			show(){
				
				this.span.css({
					display:"block"
				})
				this.imgbox.css({
					display:"block"
				})
			}
			move(e){
				
				this.l=e.offsetX-this.span.outerWidth()/2;
				this.t=e.offsetY-this.span.outerHeight()/2;
				if(this.l<0)this.l=0;
				if(this.t<0)this.t=0;
				if(this.l>this.box.innerWidth()-this.span.outerWidth())this.l=this.box.innerWidth()-this.span.outerWidth();
				if(this.t>this.box.innerHeight()-this.span.outerHeight())this.t=this.box.innerHeight()-this.span.outerHeight();
				this.span.css({
					left:this.l,
					top:this.t
				})
				this.lsize=this.l/this.box.innerWidth();
				this.tsize=this.t/this.box.innerHeight();
				this.img.css({
					left:-this.lsize*this.img.innerWidth(),
					top:-this.tsize*this.img.innerHeight()
				})
				
			}
			out(){
				this.span.css({
					display:"none"
				})
				this.imgbox.css({
					display:"none"
				})
			}
	}
		return Show;
})