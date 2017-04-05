/*
陈斌
20160602
旗下产品页js
*/
var Product={
	init:function(){
		//banner插件使用
        Product.banner();
	},
	banner:function(){
        var RotatingBanner_obj = {
            autoPlay: "left", // 自动播放：left/right/null，默认值：null
            box_selector:"body.Product .banner", // 外盒选择器，默认值：section.banner
            point_ul_selector:"", // 圆点li的ul盒选择器，空字符串为无圆点。此盒不必存在于box_selector中。默认值：section.banner ul.point_ul。
            resize_li:false,
            delay: 2000
        };
        var RotatingBanner_1 = new RotatingBanner();
        RotatingBanner_1.init(RotatingBanner_obj);
	}
}