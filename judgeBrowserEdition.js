/*
	白梦超
	20160909
	判断浏览器版本
*/
//根据所船参数判断浏览器版本，参数值为0，IE7浏览器返回true，参数为1，IE7,8,浏览器返回true，参数为其他值时，IE7,8,9,浏览器返回true
var judgeBrowserEdition = {
	init : function(opt){
		var _opt = {
			num : 1		//判断，执行哪一个函数,值为0执行jude_brower0 判断ie7及以下版本，值为1执行jude_brower1 判断ie8及以下版本，其他执行jude_brower2 判断ie9及以下版本
		}

		_opt = $.extend(_opt, opt);

		if (_opt.num==0){
			return judgeBrowserEdition.jude_brower0();
		}
		else if(_opt.num==1) {
			return judgeBrowserEdition.jude_brower1();
		}
		else {
			return judgeBrowserEdition.jude_brower2();
		}
	},
	//判断浏览器是否是ie7
	jude_brower0 : function(){
		if (window.navigator.userAgent.indexOf('MSIE 7.0')!=-1){
			return true;
		}else{
			return false;
		}
	},
	//判断浏览器是否是ie7,8
	jude_brower1 : function(){
		if (window.navigator.userAgent.indexOf('MSIE 7.0')!=-1 || window.navigator.userAgent.indexOf('MSIE 8.0')!=-1){
			return true;
		}else{
			return false;
		}
	},
	//判断浏览器是否是ie7,8,9
	jude_brower2 : function(){
		if (window.navigator.userAgent.indexOf('MSIE 7.0')!=-1 || window.navigator.userAgent.indexOf('MSIE 8.0')!=-1 || window.navigator.userAgent.indexOf('MSIE 9.0')!=-1){
			return true;
		}else{
			return false;
		}
	}
}

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return judgeBrowserEdition;
    });
}
