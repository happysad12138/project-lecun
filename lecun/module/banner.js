define(function(){

	class Banner{
		constructor(options){
			this.ban=options.ban;
			this.a=options.a;
			this.init()
		}
		init(){
			this.ban.banner({
				items:this.a,
				isList:false,						//可选，是否需要自动生成list
			autoPlay:true,						//可选，是否需要自动轮播
			delayTime:3000,						//可选，自动轮播时，没两张图片的间隔时间
			moveTime:300
			})
		}
	}
	return Banner;
})