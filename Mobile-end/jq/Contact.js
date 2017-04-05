/*
	陈斌
	20160606
	联系我们页底部公共样式位置设置
*/

//联系我们页底部公共样式位置设置
var Contact = {
	init : function(){

        var opt = {
            selector: "section.bao", // 容器盒选择器（需要在样式表中将此盒定高），无默认值
            scroll: true, // 盒内可滚动，默认true
            resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题
        };
        mobile_stop_moved.init(opt);

		//调用公共样式设置方法
		Contact.change();

		//地图显示及隐藏
		Contact.map_showOrHide();
	},
	//联系我们页底部公共样式位置设置
	change : function(){
		$('section.html_foot').css('position','fixed');
		$('section.html_foot').css('left','0');
		$('section.html_foot').css('bottom','0');
	},

	//设置全局变量判断是否加载地图
	key : true,
	//地图显示及隐藏
	map_showOrHide : function(){
		
		$('a.show').click(function(){
			$('section.map').css('height',$(window).height()+'px');
			$('div.bg').css('height',$(window).height()+'px');
			$('section.map').css('display','block');

	        var opt = {
	            selector: "section.bao", // 容器盒选择器（需要在样式表中将此盒定高），无默认值
	            scroll: false, // 盒内可滚动，默认true
	            resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题
	        };
			mobile_stop_moved.init(opt);
			if (Contact.key){
				var baidu_map_para = {
		            map_obj_id: "baidu_map", // 地图容器ID。无默认值。
		            enableScrollWheelZoom: false, // 允许滚轮缩放。默认值：true
		            NavigationControl: true, // 左上角缩放尺。默认值：true
		            ScaleControl: false, // 左下角比例尺。默认值：true
		            OverviewMapControl: false, // 右下角小地图：true
		            CurrentCity: "北京", // 当前城市。默认值：北京
		            MapTypeControl: false, // 右上角地图种类，仅当设置当前城市后可用。默认值：true
		            PointKeywords: "北京东城区银河SOHO", // 定点标注搜索。无默认值
		            PointBounce: true, // 定点标注跳动。默认值：true
		            PointClick: function(e) {}, // 定点标注点击回调。无默认值。
		            // SearchKeywords: "礼士宾馆", // 搜索关键词。无默认值
		            Zoom: 16 // 默认缩放比例。默认值：16
		        };
				baidu_map.init(baidu_map_para);
				Contact.key=false;
			}
		})
		$('div.close').click(function(){
			$('section.map').css('display','none');

	        var opt = {
	            selector: "section.bao", // 容器盒选择器（需要在样式表中将此盒定高），无默认值
	            scroll: true, // 盒内可滚动，默认true
	            resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题
	        };
			mobile_stop_moved.init(opt);
		})
	}
}