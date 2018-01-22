$(function(){
	initMainFocus();// 首页  主 聚焦图 初始化
	initBrandImageFocus();// 品牌形象 3D聚焦图 初始化
	initPhoneAnimate(); // 顶部 电话号码 动画
	initTabCheck();// 加载tab切换效果
	initBroadcastsPic();// 实播栏目鼠标事件
});

// 实播栏目鼠标事件
function initBroadcastsPic(){
	$("#Broadcasts-Columns .tab-content-card .Broadcasts-produck-block").on("mouseenter",function(){
		$("#Broadcasts-Columns .tab-content-card .Broadcasts-produck-block").removeClass("Broadcasts-produck-block-select");
		$(this).toggleClass("Broadcasts-produck-block-select");
	})
}

// 首页  主 聚焦图 初始化
function initMainFocus(){
	var swiper = new Swiper('#main-focus', {
	    pagination: {
			el: '#main-focus-swiper-pagination',
			clickable: true,
		},
	    autoplay:true
	});
}

// 品牌形象 3D聚焦图 初始化
function initBrandImageFocus(){
	var swiper = new Swiper('#brandImage-Focus', {
		effect: 'coverflow',
		initialSlide :3,
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 0,
		    stretch: 200,
		    depth: 100,
		    modifier: 1,
		    slideShadows : true,
		},
		navigation: {
	      nextEl: '#brandImage-Focus .swiper-button-next',
	      prevEl: '#brandImage-Focus .swiper-button-prev',
	    },
		on: {
				init: function(){
					var index = this.activeIndex;
					$($("#brandImage-Focus .swiper-slide")[index]).addClass("swiper-no-opacity");
					$($("#brandImage-Focus .swiper-slide")[index]).find(".blue-shadow").addClass("swiper-no-shadow")
				},
		        slideChangeTransitionEnd: function(){
		          	var index = this.activeIndex;
					$("#brandImage-Focus .swiper-slide").removeClass("swiper-no-opacity");
					$($("#brandImage-Focus .swiper-slide")[index]).addClass("swiper-no-opacity");
					$("#brandImage-Focus .blue-shadow").removeClass("swiper-no-shadow")
					$($("#brandImage-Focus .swiper-slide")[index]).find(".blue-shadow").addClass("swiper-no-shadow")
		    },
		}
    });
}
