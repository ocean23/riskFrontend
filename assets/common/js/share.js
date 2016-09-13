var shareUrl = location.href.split('#')[0];
var dataObject = {
	url: shareUrl
};
$(document).ready(function() {
	$.ajax({
  type: "POST",
  url: 'web/sharing/signWxshare/54f1b82a58f24d7d16c18888.json',
  data: JSON.stringify(dataObject),
  contentType:"application/json; charset=utf-8",
  dataType:"json",
  success: function(result) {
	    wx.config({
	        debug: false ,
	        appId: result.data.appId,
	        timestamp: result.data.timestamp,
	        nonceStr: result.data.nonceStr,
	        signature: result.data.signature,
	        jsApiList: [
	            'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo'
	        ]
	    });
	    wx.ready(function() {
	        // 在这里调用 API
	        wx.onMenuShareTimeline({
	            title: '打开藏宝图，开启零下8度的寻宝之旅', // 分享标题
	            link: shareUrl, // 分享链接
	            imgUrl: 'http://oa9futkbr.bkt.clouddn.com/sharespace.jpg', // 分享图标
	            success: function() {
	                // 用户确认分享后执行的回调函数
	                momentsCountIncrease();
	            },
	            cancel: function() {
	                // 用户取消分享后执行的回调函数
	                // $('.close-bt').click();
	            }
	        });
	        wx.onMenuShareAppMessage({

	            title: '打开藏宝图，开启零下8度的寻宝之旅', // 分享标题
	            desc: '欢乐海岸椰林沙滩7月15日-9月12日，零下8度的海盗冰雪王国，冰封的宝藏等你来寻!',
	            link: shareUrl, // 分享链接
	            imgUrl: 'http://oa9futkbr.bkt.clouddn.com/sharespace.jpg', // 分享图标
	            type: '', // 分享类型,music、video或link，不填默认为link
	            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	            success: function() {
	                // 用户确认分享后执行的回调函数
	                friendsCountIncrease();
	            },
	            cancel: function() {
	                // 用户取消分享后执行的回调函数

	            }
	        });
	    });
  	}
	});
})
