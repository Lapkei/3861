$(function(){
	initMainFocus()
	initBrandImageFocus()
});

function initMainFocus(){
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    spaceBetween: 30,
	});
}

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
