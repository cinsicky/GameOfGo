//Mobile Menu Slide Toggle
$(".mobile-menu").click(function() {
	$(".mobile-subpage-navsection").slideToggle(800);
});
$(".mobile-menu").click(function() {
	$(".chinese-mobile-navsection").slideToggle(800);
});

//Swiper Part

//Navigation Carousel
var swiper1 = new Swiper('#swiper1', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	hashNavigation: true,
	//	grabCursor: true,
	noSwiping: true,
	//	mousewheel: true,
	//	effect : 'fade',
	//	无障碍阅读
	pagination: '.swiper-pagination',
	a11y: true,
	prevSlideMessage: 'Previous slide',
	nextSlideMessage: 'Next slide',
	firstSlideMessage: 'This is the first slide',
	lastSlideMessage: 'This is the last slide',
	paginationBulletMessage: 'Go to slide {{index}}',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	on: {
		slideChangeTransitionStart: function() {

			$(".carousel-nav-btn .active").removeClass('active');
			$(".carousel-nav-btn div").eq(this.activeIndex).addClass('active');
		}
	},
});

$(".carousel-nav-btn div").on('mouseenter', function(e) {
	e.preventDefault()
	$(".carousel-nav-btn .active").removeClass('active')
	$(this).addClass('active')
	swiper1.slideTo($(this).index())
});

$(".h-logo").click(function() {
	swiper1.slideTo(0, 1000, false); //切换到第一个slide，速度为1秒
	$('.btn1').addClass('active');
	$('.btn2').removeClass('active');
	$('.btn3').removeClass('active');
	$('.btn4').removeClass('active');
});

$(".carousel-nav-btn").hover(function() {
	$(".active div").addClass("mouseenter");
}, function() {
	$(".mouseenter").removeClass("mouseenter")
});

var swiper2 = new Swiper('#swiper2', {
	navigation: {
		nextEl: '#rule-slideN',
		prevEl: '#rule-slideP',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 2,
	spaceBetween: 0,
	centeredSlides: true,
	slideToClickedSlide: true,
	loop: true,
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 600,
		modifier: 1,
		slideShadows: true
	},
	breakpoints: {
		//当宽度小于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		//当宽度小于等于480
		480: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		//当宽度小于等于640
		640: {
			slidesPerView: 1,
			spaceBetween: 30
		}
	}
});