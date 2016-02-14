var tnum=0;
var dnum=0;
$(function(){
	$('.around ul').append($('.around ul li').eq(0).clone(true));
		//自动轮播
		function autoplay(){
			dnum++;
			if(dnum>4){
				dnum=0
			}
			$('.around ol li').eq(dnum).addClass('current').siblings().removeClass('current');
			tnum++
			if(tnum>5){
				tnum=1
				$('.around ul').css('left','0px')
			}

			var move=tnum*-800;

			$('.around ul').stop().animate({'left':''+move+'px'}, 500)
		}
		// 右箭头
		$('.around-after,.around-shadow-right').click(function(event){
			autoplay()
		});
		// 左箭头
		$('.around-prev,.around-shadow-left').click(function(event){
			
			dnum--
			if(dnum<0){
				dnum=4
			}
			$('.around ol li').eq(dnum).addClass('current').siblings().removeClass('current');
			tnum--
			if(tnum<0){
				tnum=4
				$('.around ul').css('left','-4000px')
			}
			var move=tnum*-800;
			$('.around ul').stop().animate({'left':''+move+'px'}, 500)	
		});
	
	$('.around ol li').mouseover(function(event){
		$(this).addClass('current').siblings().removeClass('current')		
			var circle=$(this).index()*-800;
			// $('.around ul ').eq(tnum).show(1000)
			$(".around ul").stop().animate({"left":""+circle+"px"},600);
				tnum=$(this).index();
				dnum=$(this).index();
	})

	var time=setInterval(function(event){
			autoplay()
	},4000)
	//鼠标经过与离开
	$('.around').hover(function(){
		clearInterval(time);
		$('.around-prev,.around-after,.around-shadow-left,.around-shadow-right').show();

	},function(){
		time=setInterval(autoplay,4000);
		$('.around-prev,.around-after,.around-shadow-left,.around-shadow-right').hide()
	})


	//two-second-view轮播图
	var cnum=0;
	function autoplaysecond(){
			cnum++;
			if(cnum>3){
				cnum=0
			}
			$('.two-second-view a').eq(cnum).stop().animate({'opacity':'1'},1000).siblings().animate({'opacity':'0'},1000);
		}
		var time=setInterval(function(event){
			autoplaysecond()
	},3000)

	$('.click-next').click(function(){
		cnum++;
		if(cnum==4){
			cnum=0;
		}
		$('.two-second-view a').eq(cnum).stop().css('opacity','1').siblings().css('opacity','0')
		
	})
	$('.click-prev').click(function(){
		cnum--;
		if(cnum==-1){
			cnum=3;
		}
		$('.two-second-view a').eq(cnum).stop().css('opacity','1').siblings().css('opacity','0')
	});
	//鼠标经过与离开
	$('.two-second-view,.click-prev,.click-next').hover(function(){
		clearInterval(time);
		$('.click-prev, .click-next').show();

	},function(){
		time=setInterval(autoplaysecond,4000);
		$('.click-prev, .click-next').hide()
	})
});