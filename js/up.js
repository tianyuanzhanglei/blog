
//小火箭
var up=document.getElementById("up");
up.onclick=function ( ) {
	var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;

	var	timer=setInterval(function ( ) {
		var speed=0;
		var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;	
		speed=oScrollTop/10;
		speed=Math.ceil(speed);
		if (speed==0) {
			clearInterval(timer);
		}
		document.documentElement.scrollTop=document.body.scrollTop=oScrollTop-speed;
	
	},30)
	
}
//分类列表展示
window.onscroll=window.onresize=function ( ) {
	var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;

	if(oScrollTop>=200){
		move(up,{opacity:100,top:500+oScrollTop})
	}else{
		move(up,{opacity:0})
	}

}
