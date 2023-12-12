const sendReportPopup = document.querySelector(".send-report__popup");
const sendReportTooltiop = document.querySelector(".send-report__tooltip");
const acceptReportPopup = document.querySelector(".accept-report__popup");
const pinReportPopup = document.querySelector('.pin-report__popup');
const rejectReportPopup = document.querySelector('.reject-report__popup');

let isShowReportTooltip = false;

function openRejectReportPopup() {
  rejectReportPopup.classList.add("some-popup_active")
  console.log("open");
  document.querySelector('body').style.overflow = 'hidden'

}

function closeRejectReportPopup() {
  rejectReportPopup.classList.remove("some-popup_active")
  document.querySelector('body').style.overflow = 'unset'
}

function openPinReportPopup() {
  pinReportPopup.classList.add("some-popup_active")
  document.querySelector('body').style.overflow = 'hidden'

}

function closePinReportPopup() {
  pinReportPopup.classList.remove("some-popup_active")
  document.querySelector('body').style.overflow = 'unset'
}

function closeSendReportPopup() {
  sendReportPopup.classList.remove("some-popup_active");
  document.querySelector('body').style.overflow = 'unset'
}

function openSendReportPopup() {
  sendReportPopup.classList.add("some-popup_active");
  document.querySelector('body').style.overflow = 'hidden'
}

function openSendReportTooltip() {
  if (!isShowReportTooltip) {
    sendReportTooltiop.classList.add("send-report__tooltip_active");
    document.querySelector('body').style.overflow = 'hidden'
  } else {
    sendReportTooltiop.classList.remove("send-report__tooltip_active");
    document.querySelector('body').style.overflow = 'unset'
  }

  isShowReportTooltip = !isShowReportTooltip;
}

function closeSendReportTooltip() {
  sendReportTooltiop.classList.remove("send-report__tooltip_active");
  document.querySelector('body').style.overflow = 'unset'

}

function closeAcceptReport() {
  acceptReportPopup.classList.remove("some-popup_active")
  document.querySelector('body').style.overflow = 'unset'

}

function openAcceptReport() {
  acceptReportPopup.classList.add("some-popup_active")
  document.querySelector('body').style.overflow = 'hidden'

}

console.log(document.querySelector(".pin-report__photo-swiper"));

new Swiper('.pin-report__photo-swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.pin-report__swiper-button-right',
    prevEl: '.pin-report__swiper-button-left',
  },
  // renderCustom: function (swiper, current, total) {
  //   console.log(current,);
  // },

  spaceBetween: 10,
  speed: 400,
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // on: {
  //   init: function (sw) {
  //     currentSlidesEl.innerHTML = sw.activeIndex + 1;
  //     totalSlidesEl.innerHTML = "/" + sw.slides.length;
  //   },
  //   slideChange: function (sw) {
  //     currentSlidesEl.innerHTML = sw.activeIndex + 1;
  //     totalSlidesEl.innerHTML = "/" + sw.slides.length;
  //   }
  // }
});

new Swiper('.pin-report__video-swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.pin-report__video-swiper-button-right',
    prevEl: '.pin-report__video-swiper-button-left',
  },
  // renderCustom: function (swiper, current, total) {
  //   console.log(current,);
  // },

  spaceBetween: 10,
  speed: 400,
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // on: {
  //   init: function (sw) {
  //     currentSlidesEl.innerHTML = sw.activeIndex + 1;
  //     totalSlidesEl.innerHTML = "/" + sw.slides.length;
  //   },
  //   slideChange: function (sw) {
  //     currentSlidesEl.innerHTML = sw.activeIndex + 1;
  //     totalSlidesEl.innerHTML = "/" + sw.slides.length;
  //   }
  // }
});
