//设置cookie时考虑设置的名和值，还有设置到哪里（路径），保存多长时间
function setCookie(key,value,all){
	all=all||{};
	var d=new Date();
	d.setDate(d.getDate()+all.expires);
	var time=all.expires==undefined?"":";expires="+d;
	var path=all.path==undefined?"":";path="+all.path;
	document.cookie=key+"="+value+time+path;
}
//删cookie要考虑删哪个cookie（key），删哪里的cookie（path）；
function removeCookie(key,value,all){
	all=all||{};
	var str=all.path==undefined?"":";path="+all.path;
	setCookie(key,value,{expires:-1,path:str});
}
//拿cookie，哪里（path），哪个（key）,因为拿最近的 ，所以可以不用设路径（暂时）,最终拿到的是value
function getCookie(key){
	var str=document.cookie;
	var arr=str.split("; ");
	for(i=0;i<arr.length;i++){
		if(arr[i].split("=")[0]==key){
			return arr[i].split("=")[1];
		}
	}
	return "";
}
