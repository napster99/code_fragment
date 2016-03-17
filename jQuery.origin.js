

var $ = jQuery = function() {
	return jQuery.fn.init();
};


global.$ = $;


jQuery.fn = jQuery.prototype = {
	//扩展的原型对象
	jquery : '1.7.2',

	init : function() {
		log('>>>', this)
		return this;
	},

	size : function() {
		return this.length;
	}

}


var log = console.log;


var new$ = new $();


log(new$.size())

var str = '[
	AdsTypeInfo[adsType=fcloatClick,adsName=浮窗广告位,adsStatus=1,adsDesc=浮窗广告位,showOrder=<null>,
createTime=2014-07-11  17:08:03,modifyTime=2014-07-23  10:35:05,id=1], 
 AdsTypeInfo[adsType=homeClick,adsName=返回游戏广告位,adsStatus=1,adsDesc=返回游戏广告位,showOrder=<null>,createTime=2014-07-15  15:00:09,modifyTime=2016-03-14  10:08:01,id=2], 
 AdsTypeInfo[adsType=exitClick,adsName=退出游戏广告位,adsStatus=1,adsDesc=退出游戏广告位,showOrder=<null>,createTime=2014-07-14  16:39:04,modifyTime=2014-08-01  14:37:57,id=3], 
 AdsTypeInfo[adsType=thirdTop,adsName=第三方顶部广告条,adsStatus=1,adsDesc=第三方顶部广告条,showOrder=<null>,createTime=2014-11-06  13:30:57,modifyTime=2014-11-06  13:30:57,id=5], 
 AdsTypeInfo[adsType=thirdBottom,adsName=第三方底部广告条,adsStatus=1,adsDesc=第三方底部广告条,showOrder=<null>,createTime=2014-11-06  13:30:57,modifyTime=2014-11-06  13:30:57,id=6], 
 AdsTypeInfo[adsType=notifyPush,adsName=通知栏PUSH广告位,adsStatus=1,adsDesc=通知栏push广告位,showOrder=<null>,createTime=2014-11-20  10:27:48,modifyTime=2014-11-20  10:27:48,id=7], 
 AdsTypeInfo[adsType=thirdHome,adsName=第三方退出广告,adsStatus=1,adsDesc=第三方退出广告,showOrder=<null>,createTime=2015-01-26  18:49:14,modifyTime=2015-01-26  18:49:14,id=11], 
 AdsTypeInfo[adsType=thirdBack,adsName=第三方返回广告,adsStatus=1,adsDesc=第三方返回广告,showOrder=<null>,createTime=2015-01-26  18:49:14,modifyTime=2015-01-26  18:49:14,id=12], 
 AdsTypeInfo[adsType=lockPlaque,adsName=锁屏广告,adsStatus=1,adsDesc=锁屏广告,showOrder=<null>,createTime=2015-01-26  18:49:14,modifyTime=2015-01-26  18:49:14,id=8], 
AdsTypeInfo[adsType=lockCarrier,adsName=锁屏弹窗广告,adsStatus=1,adsDesc=锁屏弹窗广告,showOrder=<null>,createTime=2015-01-26  18:49:14,modifyTime=2015-01-26  18:49:14,id=9], 
AdsTypeInfo[adsType=uninstall,adsName=卸载广告,adsStatus=1,adsDesc=卸载广告,showOrder=<null>,createTime=2015-01-26  18:49:14,modifyTime=2015-01-26  18:49:14,id=10], 
AdsTypeInfo[adsType=slience,adsName=静默,adsStatus=1,adsDesc=静默,showOrder=<null>,createTime=2015-07-29  14:19:30,modifyTime=2015-07-29  14:19:30,id=13], 
AdsTypeInfo[adsType=shortCut,adsName=桌面快捷方式广告位,adsStatus=1,adsDesc=桌面快捷方式广告位,showOrder=<null>,createTime=2015-11-04  18:31:39,modifyTime=2015-11-04  18:31:39,id=14], 
AdsTypeInfo[adsType=lockWap,adsName=锁屏跳转广告位,adsStatus=1,adsDesc=锁屏跳转广告位,showOrder=<null>,createTime=2015-11-04  18:31:39,modifyTime=2015-11-04  18:31:39,id=15], 
AdsTypeInfo[adsType=deskBuoy,adsName=桌面浮标广告位,adsStatus=1,adsDesc=桌面浮标广告位,showOrder=<null>,createTime=2015-11-04  18:31:39,modifyTime=2016-03-14  10:12:39,id=16]
]'


log(str)


