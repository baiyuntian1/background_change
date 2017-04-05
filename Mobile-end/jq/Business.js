/*
	白梦超
	20160608
	点击换验证码
*/

//点击换验证码
var Business = {
	init : function(){
        var opt = {
            selector: "section.bao", // 容器盒选择器（需要在样式表中将此盒定高），无默认值
            scroll: true, // 盒内可滚动，默认true
            resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题
        };
        mobile_stop_moved.init(opt);

        PromptLayer.init();
        //调用切换验证码功能
		Business.click_change();
		//调用ajax方法
		Business.ajax_click();
		//商品页通过商务合作按钮进此页，页面位置
		Business.position();
	},
	//点击图片切换验证码
	click_change : function(){
		$('#Img').click(function(){
			$('#Img').attr('src','/captcha/create?'+ parseInt(Math.random() * 9000 + 1000));
		})
	},

	//商品页通过商务合作按钮进此页，页面位置
	position : function(){
		if (window.location.href.charAt(window.location.href.length-1)==1){
			//获取最终的scroll值
			var top=parseInt($('section.cooperation').offset().top-$('section.html_top').offset().height);
			var count=parseInt(600/30)
			var n=0;
			var timer=null
			clearInterval(timer)
			//设置定时器运动count次停止运动，清除定时器
			timer=setInterval(function(){
				n++;
				$('section.bao').scrollTop(top/count*n);
				if (n==count){
					clearInterval(timer)
				}
			},30)	
		}
	},

	//通过ajax穿数据
	ajax_click : function(){
		function clear(){
			//验证码设置为空
			$('input.code').val('');
			//公司名称设置为空
			$('input.company').val('');
			//电话号码设置为空
			$('input.phone').val('');
			//用户名设置为空
			$('input.name').val('');
			//邮箱地址设置为空
			$('input.email').val('');
			//换验证码
			$('#Img').attr('src','/captcha/create?'+ parseInt(Math.random() * 9000 + 1000));
		}
		$('input.submit_btn').click(function(){
			$.ajax({
				type :'post',
				dataType:'text',
				url: '/Business/submit',
				//传输的数据
				data : { 
						code : $('input.code').val(),
						company: $('input.company').val(),
						phone:$('input.phone').val(),
						name:$('input.name').val(),
						email: $('input.email').val()},
				success: function (data) {
					
				    if(data==1){
				    	var obj= {
				            str: "验证码不正确", //弹出层显示文字内容
				            t: 1, //0 - 2.5s后自动关闭（默认） 1 - 不自动关闭
				        }
				        PromptLayer.show(obj);
				        clear();
					}
					if(data==2){
				    	var obj= {
				            str: "请填写公司名称", //弹出层显示文字内容
				            t: 0, //0 - 2.5s后自动关闭（默认） 1 - 不自动关闭,
				        }
				        PromptLayer.show(obj);
				        clear();
					}
					if(data==3){
				    	var obj= {
				            str: "请填写联系电话", //弹出层显示文字内容
				            t: 0, //0 - 2.5s后自动关闭（默认） 1 - 不自动关闭,
				        }
				        PromptLayer.show(obj);
				        clear();
					}
					if(data==4){
				    	var obj= {
				            str: "请填写联系人", //弹出层显示文字内容
				            t: 0, //0 - 2.5s后自动关闭（默认） 1 - 不自动关闭,
				        }
				        PromptLayer.show(obj);
				        clear();
					}
					if(data==5){
				    	var obj= {
				            str: "请填写邮箱", //弹出层显示文字内容
				            t: 0, //0 - 2.5s后自动关闭（默认） 1 - 不自动关闭,
				        }
				        PromptLayer.show(obj);
				        clear();
					}
					if(data==6){
				    	var obj= {
				            str: "提交成功", //弹出层显示文字内容
				            t: 0, //0 - 2.5s后自动关闭（默认） 1 - 不自动关闭,
				        }
				        PromptLayer.show(obj);
					}
				}
			})		
		})

	}
}