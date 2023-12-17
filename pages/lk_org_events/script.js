new Swiper(".swiper__history", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-swiper__history",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-history-next",
    prevEl: ".swiper-history-back",
  },
});
new Swiper(".swiper__history-video", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-swiper__history-video",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-history-next.video",
    prevEl: ".swiper-history-back.video",
  },
});

function closeCheckReport() {
  document.getElementById("check-report").classList.remove("some-popup_active")
  document.querySelector('body').style.overflow = 'unset'

}

function openCheckReport() {
  document.getElementById("check-report").classList.add("some-popup_active")
  document.querySelector('body').style.overflow = 'hidden'
}

function closeCheckAcceptReport() {
  document.getElementById("check-report-accept").classList.remove("some-popup_active")
  document.querySelector('body').style.overflow = 'unset'

}

function openCheckAcceptReport() {
  document.getElementById("check-report-accept").classList.add("some-popup_active")
  document.querySelector('body').style.overflow = 'hidden'
}

