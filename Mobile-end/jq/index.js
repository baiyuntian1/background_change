/*
	白梦超
	20160603
*/

//首页动态效果
var index = {

	//调用方法
	init : function(){
		var opt = {
            selector: "section.bao", // 容器盒选择器（需要在样式表中将此盒定高），无默认值
            scroll: true, // 盒内可滚动，默认true
            resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题
        };
    	mobile_stop_moved.init(opt);
		//banner部分四张小电脑图运动
		index.banner_move();
		//进入页面时执行一次运动
		index.marketing_move();
		//执行运动
		index.scroll_listener();
		//resize事件监听
		index.resize_listener();
	},
	//banner部分四张小电脑图运动
	banner_move : function(){
		$('section.banner div').addClass('show');
	},
	//scroll监听
	scroll_listener: function() {
        $('section.bao').scroll(function() {
            index.marketing_move();
        });
    },

    //resize事件监听
	resize_listener: function() {
        $(window).resize(function() {
        	$('*').removeClass('show');
        	index.banner_move();
            index.marketing_move();
        });
    },

	marketing_move : function(){
		//定义运动的方法
		function moveing(obj,num){  //obj运动的对象，num执行的运动的方法，根据num值判断要不要执行show方法
			var scroll_top =$('section.bao').scrollTop();  //获取scroll的值
			var obj_height_px=obj.height();  //执行运动对象的高度
			var obj_top_px=parseInt(obj.offset().top);  //获取obj的顶部相对于section.bao 的值
			var obj_bot_px=parseInt(obj.offset().top+obj.height()); //获取obj的底部相对于section.bao 的值
			var window_hei=parseInt($(window).height());//获取屏幕可视区域的高度值
		
			if (obj_bot_px > 0 && obj_top_px < window_hei){
				if (obj.find('p').hasClass('show'))
					return false;
				obj.find('h2').addClass('show')
				obj.find('p').addClass('show')
				obj.find('div').addClass('show')
				if (num==2){
					index.show();
				}
			}else if (obj_bot_px > window_hei || obj_bot_px < 0) {
				if (!obj.find('p').hasClass('show'))
					return false;
				obj.find('h2').removeClass('show')
				obj.find('p').removeClass('show')
				obj.find('div').removeClass('show')
				obj.find('li').removeClass('show').addClass('hide');	
			}
		}
		//marketing部分的运动
		moveing($('section.marketing'),1);
		//marketing部分的运动
		moveing($('section.spread'),2);
		//marketing部分的运动
		moveing($('section.ad'),3);
		//marketing部分的运动
		moveing($('section.data'),3);
	},
	//页面上的14张性别图案添加
	show : function (){
		var delay = 100; //时间间隔
        var oDiv = $('section.spread li'); //取所有隐藏的性别对象

        var doShow = function() {
            oDiv.eq(Math.floor(Math.random() * (oDiv.length))).addClass('show').removeClass('hide'); //在所有隐藏的性别图像里面随机选取一个显示
            oDiv = $('section.spread li.hide');
            if (oDiv.length>0){
	            delay -= 5;
	            setTimeout(doShow, delay);
            }
        }

        setTimeout(doShow, delay);
	}
}