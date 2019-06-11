function my$(id) {
    return document.getElementById(id);
}

var header=my$("header");
//var arr=my$("arr");
var left=my$("arr-l");
var right=my$("arr-r");
var img=header.style.backgroundImage;
var cir=document.getElementsByTagName("ol");
var lcir=cir[0].getElementsByTagName("li");

var current=my$("current");
var arrImg=["../img/bg.jpg","../img/bg2.jpg","../img/bg3.jpg","../img/bg4.jpg"];
//全局变量
var num=0;

//鼠标进入到box的div显示左右焦点的div
header.onmouseover = function () {
    left.style.display = "block";
    right.style.display = "block";
};
//鼠标离开到box的div隐藏左右焦点的div
header.onmouseout = function () {
    left.style.display = "none";
	right.style.display = "none";
};


//通用函数
function Tab(){
	for(var i=0;i<arrImg.length;i++){
		img="url("+arrImg[num]+")";
		lcir[i].removeAttribute("class");
		lcir[num].className='current';
	}
}

//向前
left.onclick=function(){
	num--;
	for(var i=0;i<arrImg.length;i++){
		img="url("+arrImg[num]+")";
		//移除ol中所有li的颜色
		lcir[i].removeAttribute("class");
		//设置当前li颜色
		lcir[num].className='current';
	}
	if(num==-1){
		alert('不能往前');
		num=0;
	}
};

//向后
right.onclick=function(){
	num++;
	for(var i=0;i<arrImg.length;i++){
		img="url("+arrImg[num]+")";
		//移除ol中所有li的颜色
		lcir[i].removeAttribute("class");
		//设置当前li颜色
		lcir[num].className='current';
	}
	if(num==arrImg.length){
		alert('不能往后');
		num=0;
	}
};

