/*
	白梦超
	20160530
	公共js方法
*/

//公共js方法
var userControl = {
	init : function (){
		//调用导航条显示隐藏方法
		userControl.mouse_click();
		//调用滚动条回到顶部方法
		userControl.to_top();
	},
	//点击显示、隐藏导航条
	mouse_click : function(){
		var btn=$('section.html_top span.button');
		var oUl=$('section.html_top ul');
		btn.click(function(){
			if (btn.hasClass('out')){
				oUl.removeClass('show');
				btn.removeClass('out').addClass('on');
			}else {
				
				btn.removeClass('on').addClass('out');
				oUl.addClass('show');
			}
		})
	},

	//点击返回顶部
	to_top : function (){
		var btn=$('section.html_to_top');
		var bao=$('section.bao')
		
		btn.click(function(){
			var start=parseInt($('section.bao').scrollTop());
			var dis=parseInt(0-start);
			var count=Math.floor(300/30);
			var n=0;
			clearInterval(btn.timer)
			btn.timer=setInterval(function(){
				n++;
				$('section.bao').scrollTop(start+parseInt(dis/count*n));
				if (n==count){
					clearInterval(btn.timer)
				}
			},30)	
		})

		//当scroll值小于200时隐藏回到顶部按钮方法
		function minScroll(){
			if($('section.bao').scrollTop()<200){
				btn.css('display','none');
			}
			else {
				btn.css('display','block');
			}
		}
		//进入页面时首先判断scroll值是否小于200
		minScroll()
		//scroll事件监听
		$('section.bao').scroll(function(){
			minScroll()
		})
	}
}

$(function(){
	userControl.init();
})