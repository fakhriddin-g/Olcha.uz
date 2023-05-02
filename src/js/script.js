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

let body = document.body

function topHeader() {
  
  // a CREATE
  let header = document.createElement('header')
  let top_header = document.createElement('div')
  // let container = document.createElement('div')
  let top_header_menu = document.createElement('div')
  let top_header_nav = document.createElement('nav')
  let ul = document.createElement('ul')

  // ==========================================
  // ==========================================
  // for (let i = 0; i <= 4; i++) {
  //   let li = document.createElement('li')
  // }
  let white_bg_credit = document.createElement('li')
  let a_white_bg_credit = document.createElement('a')
  // let top_header_btn = document.createElement('li')
  let red_bg = document.createElement('li')
  let a_red_bg = document.createElement('a')
  // let top_header_btn = document.createElement('li')
  let white_bg_rozigrish = document.createElement('li')
  let a_white_bg_rozigrish = document.createElement('a')
  // let top_header_btn = document.createElement('li')
  let site_map = document.createElement('li')
  let a_site_map = document.createElement('a')
  // ==========================================
  // ==========================================


  let top_headder_action = document.createElement('div')
  let top_headder_tel = document.createElement('a')
  let top_headder_olcha_business = document.createElement('a')
  let top_headder_language = document.createElement('div')
  let top_headder_language_ul = document.createElement('ul')

  let top_headder_language_uz = document.createElement('li')
  let top_headder_language_oz = document.createElement('li')
  let top_headder_language_active = document.createElement('li')

  let a_top_headder_language_uz = document.createElement('a')
  let a_top_headder_language_oz = document.createElement('a')
  let a_top_headder_language_active = document.createElement('a')


  // for (let i = 0; i <= 3; i++) {
  //   let li = document.createElement('li')
  // }
  
  
  // b STYLING CLASS TEXT
  top_header.classList.add('top__header')
  // container.classList.add('container')
  top_header_menu.classList.add('top-header__menu')
  top_header_menu.classList.add('container')
  top_header_nav.classList.add('top-header__nav')

  // =======================================
  // =======================================
  white_bg_credit.classList.add('white_bg')
  white_bg_credit.classList.add('top-header-btn')
  red_bg.classList.add('red_bg')
  red_bg.classList.add('top-header-btn')
  white_bg_rozigrish.classList.add('white_bg')
  white_bg_rozigrish.classList.add('top-header-btn')
  site_map.classList.add('site-map')

  a_white_bg_credit.innerHTML = '0% Рассрочка'
  a_red_bg.innerHTML = 'Скидки'
  a_white_bg_rozigrish.innerHTML = 'Розыгрыши'
  a_site_map.innerHTML = 'Карта сайта'
  // ==========================================
  // ==========================================


  top_headder_action.classList.add('top-header__action')
  top_headder_tel.classList.add('top-header__tel')
  top_headder_olcha_business.classList.add('top-header__olcha-business')
  top_headder_olcha_business.classList.add('top-header__olcha-business')
  top_headder_language.classList.add('top-header__language')

  top_headder_language_active.classList.add('top-header__language-active')

  a_top_headder_language_uz.innerHTML = 'Ўзб'
  a_top_headder_language_oz.innerHTML = "O'z"
  a_top_headder_language_active.innerHTML = 'Рус'


  // c APPEND
  header.append(top_header)
  top_header.append(top_header_menu)
  top_header_menu.append(top_header_nav, top_headder_action, top_headder_language)
  top_header_nav.append(ul)
  ul.append(white_bg_credit, red_bg, white_bg_rozigrish, site_map)

  
  // ==========================================
  // ==========================================
  white_bg_credit.append(a_white_bg_credit)
  red_bg.append(a_red_bg)
  white_bg_rozigrish.append(a_white_bg_rozigrish)
  site_map.append(a_site_map)
  // ==========================================
  // ==========================================

  top_headder_action.append(top_headder_tel, top_headder_olcha_business)
  top_headder_tel.innerHTML = '+998 (50) 071 141 2'
  top_headder_olcha_business.innerHTML = 'Продавайте на olcha'

  top_headder_language.append(top_headder_language_ul)
  top_headder_language_ul.append(top_headder_language_uz, top_headder_language_oz, top_headder_language_active)

  top_headder_language_uz.append(a_top_headder_language_uz)
  top_headder_language_oz.append(a_top_headder_language_oz)
  top_headder_language_active.append(a_top_headder_language_active)


  body.prepend(header)


}

topHeader()