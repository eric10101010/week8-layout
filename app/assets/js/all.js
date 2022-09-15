var gridMasonry = document.querySelector(".grid-masonry");

function masonry() {
	var msnry = new Masonry(gridMasonry, {
		itemSelector: ".grid-masonry-item"
	});
	imagesLoaded(gridMasonry).on("progress", function () {
		msnry.layout();
	});
	}

	if (gridMasonry) {
	window.addEventListener("load", function () {
		masonry();
	});
	} // 解決瀑布流 tab 切換取不到高度


var dataTabs = document.querySelectorAll("button[data-bs-toggle=tab]");
dataTabs.forEach(function (dataTab) {
	dataTab.addEventListener("shown.bs.tab", function () {
    masonry();
	});
}); 

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
// $('.row').imagesLoaded().progress( function() {
// // 渲染整體畫面
// });
// $('.row').masonry(); 


