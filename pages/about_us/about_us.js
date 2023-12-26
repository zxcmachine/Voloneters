const currentSlidesEl = document.querySelector(".swiper-pagination__current-slide");

const totalSlidesEl = document.querySelector(".swiper-pagination__total-slide");
const swiper = new Swiper('.about-us__about-swiper', {
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

function openPopupMenu() {
  document.querySelector('.menu__popup').classList.add('active')
  document.querySelector('body').style.overflow = 'hidden'
}


function closePopupMenu() {
  document.querySelector('.menu__popup').classList.remove('active')
  document.querySelector('body').style.overflow = 'unset'
}



// swiper.on('transitionEnd', function () {
//   console.log('*** mySwiper.realIndex', swiper.activeIndex);
// });  

function closeStaffListPopup() {
  document.querySelector('#staff-list').classList.remove('some-popup_active')
  document.querySelector('body').style.overflow = 'unset'
}

function openStaffListPopup() {
  document.querySelector('#staff-list').classList.add('some-popup_active')
  document.querySelector('body').style.overflow = 'unset'
}

function closeStaffListItemPopup() {
  document.querySelector('#staff-item').classList.remove('some-popup_active')
  document.querySelector('body').style.overflow = 'unset'
}

function openStaffListItemPopup() {
  document.querySelector('#staff-list').classList.remove('some-popup_active')

  document.querySelector('#staff-item').classList.add('some-popup_active')
  document.querySelector('body').style.overflow = 'unset'
}


new Swiper('.running-list__list-swiper', {
  loop: true,
  freeMode: true,
  direction: 'horizontal',
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  speed: 1000,
  slidesPerView: 5
});

const runLineReverse = document.querySelector(".running-line__list-revert");
const runLineItemsReverse = document.querySelectorAll(".running-line__list-revert-item");


runLineReverse.innerHTML = ""

for (let i = 0; i < 3; i ++) {
  runLineItemsReverse.forEach((item, index) => {
    if (index !== 0) {
      runLineReverse.prepend(item.cloneNode(true));
    }
    runLineReverse.appendChild(item.cloneNode(true));

  })
}

const runLine = document.querySelector(".running-list__list-norm");
const runLineItem = document.querySelectorAll(".running-list__list-norm .running-line__list-item")

runLine.innerHTML = ""

for (let i = 0; i < 6; i ++) {
  runLineItem.forEach((item, index) => {
    runLine.prepend(item.cloneNode(true));

  })
}

const runLineReverseC = document.querySelector(".running-line__list-revert_company");
const runLineItemsReverseC = document.querySelectorAll(".running-line__list-revert-item_company");


runLineReverseC.innerHTML = ""

for (let i = 0; i < 3; i ++) {
  runLineItemsReverseC.forEach((item, index) => {
    if (index !== 0) {
      runLineReverseC.prepend(item.cloneNode(true));
    }
    runLineReverseC.appendChild(item.cloneNode(true));

  })
}

const runLineC = document.querySelector(".running-list__list-norm_company");
const runLineItemC = document.querySelectorAll(".running-list__list-norm_company .running-line__list-item")

runLineC.innerHTML = ""

for (let i = 0; i < 3; i ++) {
  runLineItemC.forEach((item, index) => {
    runLineC.prepend(item.cloneNode(true));

  })
}