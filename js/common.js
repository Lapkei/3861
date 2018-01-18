/*    通用JS方法     */

//回到顶部
function backToTop(){
	document.documentElement.scrollTop = document.body.scrollTop =0;
}

// 加载tab切换效果
function initTabCheck(){
	initTabCheck_Core("#news-consultation-block");
	initTabCheck_Core("#Broadcasts-Columns");
	initTabCheck_Core("#Brand-image");
	initTabCheck_Core("#product-center");
}

// tab切换 核心方法
function initTabCheck_Core(parentId){
	var title = $( parentId + " .tab-title-sons");
	var card = $( parentId + " .tab-content-card");
	title.on("mouseenter",function(){
		var index= $(this).index();
		title.removeClass("tab-title-sons-select");
		$(this).addClass("tab-title-sons-select");
		if( index > card.length - 1 ){
			return false;
		}		
		card.removeClass("tab-card-show");
		$(card[index]).addClass("tab-card-show");
	})
}

// 顶部 电话号码 动画
function initPhoneAnimate(i){
	var node = $(".phone-animate span");
	var length = node.length;
	var index = ( ( i < length ) ? i : 0 ) || 0;
	node.removeClass("font-size-18");
	$(node[index]).addClass("font-size-18");
	setTimeout(function(){
		initPhoneAnimate( index+=1 );
	},500)
}