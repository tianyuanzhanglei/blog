var tip=document.getElementById("tip")
var tip_content=document.getElementById("tip_content")
var tip_img=document.getElementById("tip_img")

// tip_content.innerText="用户名已存在"

var text=tip_content.innerText
console.log(text)

if( text== '注册成功'){
	console.log(typeof(tip_content.innerText),tip_content.innerText.length,typeof("注册成功"))
	tip.style.display="block"
	tip_img.src="img/succ.png"
	setTimeout(function(){tip.style.display="none";},4000);

}else if(text == "用户名已存在"){
	console.log("tip_content.innerText")
	tip.style.display="block"
	tip_img.src="img/error.png"
	setTimeout(function(){tip.style.display="none";},4000);
}else{
	alert("ii")
}