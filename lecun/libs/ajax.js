function ajaxGet(url,callback,data){
	data = data == undefined ? {} : data;
	var ajax=new XMLHttpRequest();
	var d=new Date();
	var str="";
	for(var i in data){
		str+=i+"="+data[i]+"&";	
	}	
	ajax.open("GET",url+"?"+str+"yyt_="+d.getTime(),true);
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4&&ajax.status==200){
			callback(ajax.responseText);
		}
		
	}
	ajax.send(null);
	
}
function ajaxPOST(url,callback,data){
	data = data == undefined ? {} : data;
	var ajax=new XMLHttpRequest();
	var str="";
	for(var i in data){
		str+=i+"="+data[i]+"&";
	}
	ajax.open("POST",url,true);
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4&&ajax.status==200){
			callback(ajax.responseText);
		}
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send(str);
}

function jsonp(url,callback,data){
	var str="";
	data=data==undefined?{}:data;
	for(var i in data){
		str+=i+"="+data[i]+"&";
	}
	str=str.slice(0,str.length-1);
	window[data[data._name]]=function(res){
		callback(res);
	}
	url=url+"?"+str;
	var script=document.createElement("script");
	script.src=url;
	document.body.appendChild(script);
}
