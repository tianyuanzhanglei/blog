// 完美运动框架
function move(obj,json,fnEnd){
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function(){
		var bStop = true; //假设所有值的目标都已经达到

		for(var attr in json){
			
			var current = 0;
			if(attr == "opacity")
			{
				current = Math.round(parseFloat(getStyle(obj,attr))*100); 
			}
			else
			{
				current = parseInt(getStyle(obj,attr));
			}

			var speed = (json[attr] - current)/6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if(current != json[attr])
			{
				bStop = false; //判断所有值是否抵达目标
			}
			
			if(attr == "opacity")
			{
				obj.style.opacity = ( current + speed )/100;
				obj.style.filter = "alpha(opacity:"+ (current + speed) +")";
			}
			else
			{
				obj.style[attr] = current + speed + "px";
			}

		}

		//运动停止条件
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}

	},30);
	
}	

//取非行间样式
function getStyle(obj,name)
{

	if(obj.currentStyle)
	{
		return obj.currentStyle[name]; //兼容IE
	}
	else
	{
		return getComputedStyle(obj,false)[name];  //兼容FF等
	}
}			