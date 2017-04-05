/*
	白梦超
	20160606
	404页页面功能
*/

//404页刷新页面功能
var p404 = {
	init : function(){
		p404.refresh();
		p404.change();
	},
	//刷新页面
	refresh : function(){
		$('div.refresh').click(function(){
			window.location.reload(true);
		})
	},
	//由于页面高度较低，在此页面改变底部公共样式的位置
	change : function(){
		$('section.html_foot').css('position','absolute');
		$('section.html_foot').css('left','0');
		$('section.html_foot').css('bottom','0');
	}
}