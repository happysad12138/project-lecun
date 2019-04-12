define(function(){
	class car{
			constructor(){
				this.url="data/dataIndex.json";
				//console.log(getCookie("god"))

				this.table=$("table");
				this.tbody=$("tbody");
				this.selall=$("thead tr input");
				//console.log(this.selall)
				this.tfoot=$("tfoot");
				
				this.load();
				//this.remove();
				
			}
			load(){
				var that=this;
				$.ajax({
					type:"get",
					url:this.url,
					success:function(res){
						that.res = res;
						that.judge();
						//that.tbody.append();
						that.numEvent();
						that.check();
						
					},
					error:function(a,b,c){
						console.log(a,b,c)
					}
				})

			}
			judge(){
				var that=this;
				var str="";
				var num=0;
				var s=0;
				var ts=0
				var sum=0;
				this.data=JSON.parse(getCookie("gods"));
				for(var i=0;i<this.data.length;i++){
					for(var j=0;j<this.res.length;j++){
						if(this.data[i].id==this.res[j].goodsId){
							
							
							sum=(this.res[j].price-0)*this.data[i].num;
							ts+=sum;
							sum=sum.toFixed(1)
							num+=this.data[i].num;
							
							str+=`<tr>
        					<td><input type="checkbox" class="sel" onoff=false></td>
        					<td class="gds"><span><img src="${this.res[j].src}"></span><span><a href="#">${this.res[j].hintro}</a></span></td>
        					<td>￥${this.res[j].price}</td>
        					<td  self="${this.res[j].goodsId}"><input type="button" value="-" id="reduce"><input type="text" id="txt" value="${this.data[i].num}" style="text-align:center"><input type="button" value="+" id="up"></td>
        					<td>￥${sum}</td>
        					<td class="delete"  self="${this.res[j].goodsId}">删除</td>
        				</tr>`
						}
					}
				}
				s=s.toFixed(1);
				ts=ts.toFixed(1);
				str+=`<tr><td colspan="2"><h2 >商品（件）</h2><h1 style="color:red">${num}</h1></td><td colspan="2"><h2>总价（元）</h2><h1 style="color:red">${s}</h1></td><td colspan="2"><h2 style="color:red;cursor:pointer">去结算</h2></td></tr>`
				this.tbody.html(str);
				//全选事件
				this.input=$("tbody tr .sel");
				
				this.table.on("click",function(eve){
					
					if($(eve.target).attr("class")=="sell"){
						if(that.input.prop("checked")){
							
						that.input.prop("checked",false);
						that.tbody.children("tr:last").children().eq(1).children().eq(1).html(0)
						
						}else{
						that.input.prop("checked",true);
						that.tbody.children("tr:last").children().eq(1).children().eq(1).html(ts);
							
						}
							
						
					}
					if($(eve.target).attr("class")=="sel"){
						if(!($(eve.target).prop("checked"))){
							
							that.selall.prop("checked",false)
						}
					}
				})
				
			}
			//复选
			check(){
				var that=this;
				var sss=0;
				var onoff=true;
				this.sel=$("tbody tr .sel");
				
				this.tbody.on("click","tr",function(eve){
                  
					if($(eve.target).attr("class")=="sel"&&$(eve.target).prop("checked")){
						if(onoff){
							sss=0;
							var ss=Number($(this).children().eq(4).html().slice(1));
						sss+=ss;
						that.tbody.children("tr:last").children().eq(1).children().eq(1).html(sss);
						onoff=false;
						}else{
						var ss=Number($(this).children().eq(4).html().slice(1));
						sss+=ss;
						that.tbody.children("tr:last").children().eq(1).children().eq(1).html(sss);
						//onoff=true
						}
					}
					if($(eve.target).attr("class")=="sel"&&(!$(eve.target).prop("checked"))){
						onoff=true;							
						var tt=Number($(this).children().eq(4).html().slice(1))
						var re=Number(that.tbody.children("tr:last").children().eq(1).children().eq(1).html());
						
						var redd=re-tt;
						var er=redd.toFixed(1)
						that.tbody.children("tr:last").children().eq(1).children().eq(1).html(er);
						
						
					}
				})

			}
			//计数计件
		numEvent(){
			
				var that=this;
				
				this.tbody.on("click",function(eve){
					if($(eve.target).attr("class")=="delete"){
						$(eve.target).parent("tr").remove();
						var idd=$(eve.target).attr("self");
						for(i=0;i<that.data.length;i++){
							if(idd==that.data[i].id){
								that.data.splice(i,1);
						setCookie("gods",JSON.stringify(that.data));
						break;
							}
						}

					}
					if($(eve.target).attr("id")=="reduce"){
						
						var idt=$(eve.target).parent("td").attr("self");
						var b=$(eve.target).siblings("#txt").val()-0;
						b--;
						if(b==0){
							alert("商品不能再减少了呦")
						}else{
							
						$(eve.target).siblings("#txt").val(b);
						
						for(i=0;i<that.data.length;i++){
							if(idt==that.data[i].id){
								that.data[i].num--;
						setCookie("gods",JSON.stringify(that.data));
						break;
							}
						}
						}
					}
					if($(eve.target).attr("id")=="up"){
						
						var idr=$(eve.target).parent("td").attr("self");
						
						var c=$(eve.target).siblings("#txt").val()-0;
						c++;
						$(eve.target).siblings("#txt").val(c);
						for(i=0;i<that.data.length;i++){
							if(idr==that.data[i].id){
								that.data[i].num++;
						setCookie("gods",JSON.stringify(that.data));
						break;
							}
						}


				}
			})
	
		}
	}
	return car;
})