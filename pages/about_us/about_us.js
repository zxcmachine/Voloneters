const currentSlidesEl = document.querySelector(".swiper-pagination__current-slide");

const totalSlidesEl = document.querySelector(".swiper-pagination__total-slide");
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  renderCustom: function (swiper, current, total) {
    console.log(current,);
  },

  spaceBetween: 30,
  speed: 400,
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  on: {
    init: function (sw) {
      currentSlidesEl.innerHTML = sw.activeIndex + 1;
      totalSlidesEl.innerHTML = "/" + sw.slides.length;
    },
    slideChange: function (sw) {
      currentSlidesEl.innerHTML = sw.activeIndex + 1;
      totalSlidesEl.innerHTML = "/" + sw.slides.length;
    }
  }

});



// swiper.on('transitionEnd', function () {
//   console.log('*** mySwiper.realIndex', swiper.activeIndex);
// });