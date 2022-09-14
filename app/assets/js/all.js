
// Swiper
var swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	spaceBetween: 10,

	loop: true,
	speed: 2000,
	centeredSlides: true,

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		768: {
		slidesPerView: 1,
		spaceBetween: 20
		},
		1024: {
		slidesPerView: 3,
		spaceBetween: 20,
		}
	}
});

// 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
$('.row').imagesLoaded().progress( function() {
// 渲染整體畫面
});
$('.row').masonry(); 

