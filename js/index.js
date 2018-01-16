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
		on: {
		        slideChangeTransitionEnd: function(){
		          // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
		    },
		}
    });
}
