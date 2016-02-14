// 鼠标经过third-menu 改变字体大小和颜色和选项卡
// window.onload=function(){
// 	var n=14;
// 	var m=18;
// 	var menu=document.getElementById('third-menu');
// 	var menuli=menu.getElementsByTagName('li');
// 	var menulia=menu.getElementsByTagName('a');
// 	 var thirdview=document.getElementById('thirdview');
// 	 var thirdviewul= thirdview.getElementsByClassName('third-view')
 	
	
// 	for(i=0;i<menulia.length;i++){
// 		menulia[i].index=i;
// 		menulia[i].onmouseover=function(){
// 			for(i=0;i<menulia.length;i++){
// 				menulia[i].className='';
// 				menulia[i].style.fontSize=n+'px';
// 				thirdviewul[i].style.display='none';
// 			}
// 			this.className='third-menu-first-a';
// 			this.style.fontSize=m+'px';
// 			thirdviewul[this.index].style.display='block';
// 		}
// 	}
// 	var thirdviewfirst=document.getElementById('thirdviewfirst')
//  	var  thirdviewfirstimg=thirdviewfirst.getElementsByTagName('img')
// 	for(j=0;j<thirdviewfirstimg.length;j++){
// 		thirdviewfirstimg[j].onmouseover=function(){
// 			for(j=0;j<thirdviewfirstimg.length;j++){
// 				this.style.opacity=1;
// 			}
// 		}
// 		thirdviewfirstimg[j].onmouseout=function(){
// 			for(j=0;j<thirdviewfirstimg.length;j++){
// 				this.style.opacity=0.7;
// 			}
// 		}
// 	}
// 	var thirdviewsecond=document.getElementById('thirdviewsecond')
//  	var  thirdviewsecondimg=thirdviewsecond.getElementsByTagName('img')
// 	for(j=0;j<thirdviewsecondimg.length;j++){
// 		thirdviewsecondimg[j].onmouseover=function(){
// 			for(j=0;j<thirdviewsecondimg.length;j++){
// 				this.style.opacity=1;
// 			}
// 		}
// 		thirdviewsecondimg[j].onmouseout=function(){
// 			for(j=0;j<thirdviewsecondimg.length;j++){
// 				this.style.opacity=0.7;
// 			}
// 		}
// 	}
// 	var thirdviewthird=document.getElementById('thirdviewthird')
//  	var  thirdviewthirdimg=thirdviewthird.getElementsByTagName('img')
// 	for(j=0;j<thirdviewthirdimg.length;j++){
// 		thirdviewthirdimg[j].onmouseover=function(){
// 			for(j=0;j<thirdviewthirdimg.length;j++){
// 				this.style.opacity=1;
// 			}
// 		}
// 		thirdviewthirdimg[j].onmouseout=function(){
// 			for(j=0;j<thirdviewthirdimg.length;j++){
// 				this.style.opacity=0.7;
// 			}
// 		}
// 	}
// 	var thirdviewfourth=document.getElementById('thirdviewfourth')
//  	var  thirdviewfourthimg=thirdviewfourth.getElementsByTagName('img')
// 	for(j=0;j<thirdviewfourthimg.length;j++){
// 		thirdviewfourthimg[j].onmouseover=function(){
// 			for(j=0;j<thirdviewfourthimg.length;j++){
// 				this.style.opacity=1;
// 			}
// 		}
// 		thirdviewfourthimg[j].onmouseout=function(){
// 			for(j=0;j<thirdviewfourthimg.length;j++){
// 				this.style.opacity=0.7;
// 			}
// 		}
// 	}

// }
window.onload=function(){
	// alert(document.documentElement.offsetHeight)
	var n=14;
	var m=18;
	var menu=document.getElementById('third-menu');
	var menuli=menu.getElementsByTagName('li');
	var menulia=menu.getElementsByTagName('a');
	 var thirdview=document.getElementById('thirdview');
	 var thirdviewul= thirdview.getElementsByClassName('third-view')
	 // var twosecondview=document.getElementById('two-second-view');
	 // var twosecondviewimg=twosecondview.getElementsByTagName('img')
	 // var clickprev=document.getElementsByClassName('click-prev')[0];
	 // var clicknext=document.getElementsByClassName('click-next')[0];
	 // var nowzindex=1;
	 // 	for(i=0;i<twosecondviewimg.length;i++){
	 // 		twosecondviewimg[i].index=i;
	 // 		clicknext.onclick=function(){
	 // 			for(i=0;i<twosecondviewimg.length;i++){	 	
	 // 			if(nowzindex==twosecondviewimg.length){
	 // 				nowzindex=0;
	 // 			}
	 // 			twosecondviewimg[i].style.zIndex=nowzindex++;
	 // 			twosecondviewimg(this.index).style.zIndex=nowzindex++;
	 // 		}
	 		
	 // 	}
	 // }
	//鼠标移动到菜单转换选项卡
	for(i=0;i<menulia.length;i++){
		menulia[i].index=i;
		menulia[i].onmouseover=function(){
			for(i=0;i<menulia.length;i++){
				menulia[i].className='';
				menulia[i].style.fontSize=n+'px';
				thirdviewul[i].style.display='none';
			}
			this.className='third-menu-first-a';
			this.style.fontSize=m+'px';
			thirdviewul[this.index].style.display='block';
		}
	}
	//鼠标移动到图片的效果
	var thirdviewli=thirdview.getElementsByTagName('li');
	var  thirdviewimg=thirdview.getElementsByTagName('img');
		for(i=0;i<thirdviewli.length;i++){
			for(j=0;j<thirdviewimg.length;j++){
				thirdviewimg[j].index=j;
				thirdviewimg[j].onmouseover=function(){
					change(this,'opacity',100)
				}
				thirdviewimg[j].onmouseout=function(){
					change(this,'opacity',80)
				}
			}
		}
	//获取当前样式的函数
	function getStyle(obj,name){
		if(obj.currentStyle){
			return obj.currentStyle[name]
		}else{
			return getComputedStyle(obj)[name];
		}
	
}
//运动框架
function change(obj,attr,iTarget){
	 var twosecondview=document.getElementById('two-second-view');
	 var twosecondviewimg=twosecondview.getElementsByTagName('img')
	 var clickprev=document.getElementsByClassName('click-prev')[0];
	 var clicknext=document.getElementsByClassName('click-next')[0];
	var thirdview=document.getElementById('thirdview');
	var thirdviewli=thirdview.getElementsByTagName('li');
	var  thirdviewimg=thirdview.getElementsByTagName('img');
	clearInterval(obj.time);
	obj.time=setInterval(function(){
		var cur=0;
		if(attr=='opacity'){
			cur=Math.round(parseFloat(getStyle(obj,'opacity'))*100);
		}else{
			cur=parseInt(getStyle(obj,'attr'));
		}
		
		var speed=(iTarget-cur)/5;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(cur==iTarget){
			clearInterval(obj.time)
		}else{
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:(cur+speed))'
			obj.style.opacity=(cur+speed)/100;
		}else{
			obj.style[attr]=cur+speed+'px';
			
		}
		}
	},30)
}
//two-first-view的事件 
	var twofirstview=document.getElementById('two-first-view');
	var twofirstviewli=twofirstview.getElementsByTagName('li');
	var twofirstviewplay=twofirstview.getElementsByClassName('play');
	for(var i=0;i<twofirstviewli.length;i++){
		twofirstviewli[i].index=i;
	//鼠标移入two-first-view的事件 
			twofirstviewli[i].addEventListener('mouseover',function(){
				for(var j=0;j<twofirstviewplay.length;j++){
				twofirstviewplay[j].index=j;
				twofirstviewplay[this.index].style.display='block';
			}
		},true)
	//鼠标移出two-first-view的事件
		twofirstviewli[i].addEventListener('mouseout',function(){
				for(var j=0;j<twofirstviewplay.length;j++){
				twofirstviewplay[j].index=j;
				twofirstviewplay[this.index].style.display='none';
			}
		},true)
	}



	//CSS样式转换
	var time=null;
		function Move(iTarget){
			clearInterval(time)
			var speed=0;
			if(headerbg.offsetTop<iTarget){
				speed=10;
			}else{
				speed=-10;
			}
			time=setInterval(function(){
				if(headerbg.offsetTop==iTarget){
					clearInterval(time);
				}else{
					headerbg.style.top=headerbg.offsetTop+speed+'px';
				}
			},30)
		}
	//更换背景图片
	var headerbg=document.getElementById('header-bg')
	var headerbghr=document.getElementById('header-bg-hr');
	headerbghr.addEventListener('mouseover',function(){
				Move(0)
	},true)
	headerbghr.addEventListener('click',function(){
				
				Move(-140)
	},true)
	var headerbg=document.getElementById('header-bg');
	var headerbglione=headerbg.getElementsByClassName('header-bg-first')[0];
	var headerbglitwo=headerbg.getElementsByClassName('header-bg-second')[0];
	var headerbglithree=headerbg.getElementsByClassName('header-bg-third')[0];
	var headerbglifour=headerbg.getElementsByClassName('header-bg-fourth')[0];
	var headerbglifive=headerbg.getElementsByClassName('header-bg-fifth')[0];
	var headerbglisix=headerbg.getElementsByClassName('header-bg-sixth')[0];
	var container=document.getElementById('container');
	headerbglione.addEventListener('click',function(){
		container.style.backgroundImage='url(modelpic/fresh1.jpg)';
		Move(-140);
		
	},true)
	headerbglitwo.addEventListener('click',function(){
		container.style.backgroundImage='url(modelpic/fresh2.jpg)';
		Move(-140);
		
	},true)
	headerbglithree.addEventListener('click',function(){
		container.style.backgroundImage='url(modelpic/fresh3.jpg)';
		Move(-140);
		
	},true)
	headerbglifour.addEventListener('click',function(){
		container.style.backgroundImage='url(modelpic/fresh4.jpg)';
		Move(-140);
		
	},true)
	headerbglifive.addEventListener('click',function(){
		container.style.backgroundImage='url(modelpic/fresh5.jpg)';
		Move(-140);
		
	},true)
		headerbglisix.addEventListener('click',function(){
		container.style.backgroundImage='url(modelpic/fresh6.jpg)';
		Move(-140);
		
	},true)
		
	// for(i=0;i<headerbgli.length;i++){
	// 	headerbgli[i].onclick=function(){
	// 		for(i=0;i<headerbgli.length;i++){
	// 			container.style.backgroundColor=
	// 		}
	// 	}
	// }
}	