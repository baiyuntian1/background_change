/*
陈斌
20160531
关于我们页js
*/
var AboutUs={
	init:function(){

		//banner插件使用
        AboutUs.banner();
	},
	banner:function(){
        var RotatingBanner_obj = {
            autoPlay: "left", // 自动播放：left/right/null，默认值：null
            box_selector:".central .AboutUs_banner", // 外盒选择器，默认值：section.banner
            point_ul_selector:".central .AboutUs_banner .point_ul", // 圆点li的ul盒选择器，空字符串为无圆点。此盒不必存在于box_selector中。默认值：section.banner ul.point_ul。
            resize_li:false,
            delay: 2000
        };
        var RotatingBanner_1 = new RotatingBanner();
        RotatingBanner_1.init(RotatingBanner_obj);
	}
}