


//博客分类列表
var oUl1=document.getElementById('ul1');
var aLi1=oUl1.getElementsByTagName('li');





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

