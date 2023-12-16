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

function playHistory(elem, url, isTagVideo) {
  if (isTagVideo) {
    elem.innerHTML = `<video src="${url}"></video>`;
  } else {
    elem.innerHTML = `<iframe width="100%" height="100%" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }
}

function toggleHistoryAccordion(elem) {
  elem.classList.toggle("active");
  if (elem.classList.contains("active")) {
    elem.querySelector("p").innerText = "Скрыть";
  } else {
    elem.querySelector("p").innerText = "Читать далее...";
  }
  const content = document.querySelector(".detail__content-right-accordion");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
