var body=document.getElementsByTagName("body")[0];
var off=document.getElementById('off');
off.onclick=function(){
	if(off.innerText=="关灯"){
		console.log("关灯")
		body.style.background="#000"
		body.style.color="#fff"
		off.innerText="开灯"
	}else{
		console.log("开灯")
		body.style.background="#ddd"
		body.style.color="#000"
		off.innerText="关灯"
	}
}
