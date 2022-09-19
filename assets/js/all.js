"use strict";

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
}); // 解決 according 開合取不到高度

var accordionButtons = document.querySelectorAll(".grid-masonry .accordion");
accordionButtons.forEach(function (e) {
  ["hidden.bs.collapse", "shown.bs.collapse"].forEach(function (item) {
    e.addEventListener(item, function () {
      masonry();
    });
  });
}); // 手機版市值
// mobile搜尋框展開

$(".navbar-search").click(function () {
  $(".search-bar-open").toggleClass("d-none");
});
$(".search-bar-back").click(function () {
  $(".search-bar-open").toggleClass("d-none");
}); // Swiper

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 2000,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
}); // 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
// $('.row').imagesLoaded().progress( function() {
// // 渲染整體畫面
// });
// $('.row').masonry();
//# sourceMappingURL=all.js.map
