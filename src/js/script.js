const swiperContent = new Swiper(".main-slide__content .mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".main-slide__content .swiper-button-next",
    prevEl: ".main-slide__content .swiper-button-prev",
  },
  pagination: {
    el: ".main-slide__content .swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const swiperAside = new Swiper(".main-slide__aside .mySwiper", {
  zoom: true,
  navigation: {
    prevEl: ".main-slide__aside .swiper-button-prev",
    nextEl: ".main-slide__aside .swiper-button-next",
  },
  pagination: {
    el: ".main-slide__aside .swiper-pagination",
    clickable: true,
  },
});