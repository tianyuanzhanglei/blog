var page=document.getElementById("page");
var title_register=document.getElementById("title_register");
var form_register=document.getElementById("form_register");

//图片动画
var oUl2=document.getElementById('ul2');
var aLi2=oUl2.getElementsByTagName('li');
var oMarkLeft=document.getElementById('markLeft');
var oMarkRight=document.getElementById('markRight');
var oLeft=document.getElementById('left');
var oRight=document.getElementById('right');
var nowzindex=1;
var now=0;

//博客分类列表
var oUl1=document.getElementById('ul1');
var aLi1=oUl1.getElementsByTagName('li');
//选项卡
var oCard = document.getElementById('login');
var cardLi = oCard.getElementsByTagName('li');
var cardDiv = oCard.getElementsByTagName('div');
//取消注册按钮
var cancel=document.getElementById("cancel");
var cancel_img=document.getElementById("cancel_img");

var submit=document.getElementById("submit");
//选项卡
for(var i=0;i<cardLi.length;i++)
{
	cardLi[i].index = i;
	cardLi[i].onclick = function(){
		for(var j=0;j<cardLi.length;j++)
		{
			cardLi[j].className = "";
			cardDiv[j].style.display = "none";
		}
		this.className = "active";
		cardDiv[this.index].style.display = "block";
	}
}

//遮罩
title_register.onclick=function(){
	page.className="page";
	move(form_register,{top:100});
}

//取消按钮
cancel.onmouseover=function(){
	cancel_img.src="img/x_select.png"
}
cancel.onmouseout=function(){
	cancel_img.src="img/x.png"
}
submit.onclick=cancel.onclick=function(){
	page.className="";
	move(form_register,{top:-600});
}

//选择不同分类
for(i=0;i<aLi1.length;i++){
	aLi1[i].index=i;
	aLi1[i].onmouseover=function(){
		// console.log(this.index)
		aLi1[this.index].style.background="red"
	}
	aLi1[i].onmouseout=function(){
		// console.log(this.index)
		aLi1[this.index].style.background="#000"
	}
}



//动画
oMarkLeft.onmouseover=oLeft.onmouseover=function ( ) {
   move(oLeft,{opacity:100});
}
oMarkLeft.onmouseout=oLeft.onmouseout=function ( ) {
   move(oLeft,{opacity:0});
}
oMarkRight.onmouseover=oRight.onmouseover=function ( ) {
   move(oRight,{opacity:100});
}
oMarkRight.onmouseout=oRight.onmouseout=function ( ) {
   move(oRight,{opacity:0});
}

   
oLeft.onclick=function(){
	now--;
	if (now==-1) {
	    now=aLi2.length-1;
	}
	nowzindex++;
	aLi2[now].style.zIndex=nowzindex;
}

oRight.onclick=function(){
	now++;
	if (now==aLi2.length) {
	    now=0;
	}
	nowzindex++;
	
	aLi2[now].style.zIndex=nowzindex;
}
var timer=setInterval(oRight.onclick,3000);
oUl2.onmouseover=function ( ) {
       clearInterval(timer);
    }
    oUl2.onmouseout=function ( ) {
       timer=setInterval(oRight.onclick,3000);
}
//分类列表展示
window.onscroll=window.onresize=function ( ) {
	var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	// console.log(oScrollTop);
	var a=50-oScrollTop;
	
	if (oScrollTop>=50) {
		oUl1.style.top=0;
		
	}else{
		oUl1.style.top=a+"px";
	}
		
}


history.pushState(null, null, document.URL);window.addEventListener('popstate', function () {    history.pushState(null, null, document.URL);});