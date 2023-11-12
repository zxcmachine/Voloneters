document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll('.accordion-item-header');
  headers.forEach((header, index) => {
    header.addEventListener('click', () => toggleAccordion(index + 1));
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