document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll('.accordion-item-header');
  headers.forEach((header, index) => {
    header.addEventListener('click', () => toggleAccordion(index + 1));
  });

   new Swiper(".main__page-cards-swiper", {
    slidesPerView: 2,
    spaceBetween: 24,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1920: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  });
});

function toggleAccordion(index) {
  const item = document.querySelectorAll('.accordion-item')[index - 1];
  const content = item.querySelector('.accordion-item-content');
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}


function openPopupMenu(){
  document.querySelector('.menu__popup').classList.add('active')
  document.querySelector('body').style.overflow = 'hidden'
}


function closePopupMenu(){
  document.querySelector('.menu__popup').classList.remove('active')
  document.querySelector('body').style.overflow = 'unset'

}