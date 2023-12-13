const mainPopup = document.querySelector(".motivation__popup-1");
const successPopup = document.querySelector(".motivation-popup__success");
const submitPopup = document.querySelector(".motivation-popup__submit")
const thirdPopup = document.querySelector(".motivation__popup-3");

const firstStepPopup = document.querySelector(".first-popup");
const secondStepPopup = document.querySelector(".second-popup");
const thirdStepPopup = document.querySelector(".third-popup");

function openMainPopup() {
  mainPopup.classList.add("some-popup_active")
  document.querySelector('body').style.overflow = 'hidden'
}

function closeMainPopup() {
  mainPopup.classList.remove("some-popup_active")
  document.querySelector('body').style.overflow = 'unset'
}

function orderProduct() {
  mainPopup.classList.remove("some-popup_active")
  successPopup.classList.add("some-popup_active")
}

function submitProduct() {
  successPopup.classList.remove("some-popup_active")
  submitPopup.classList.add("some-popup_active");
}

function allClosePopup() {
  mainPopup.classList.remove("some-popup_active")
  successPopup.classList.remove("some-popup_active")
  submitPopup.classList.remove("some-popup_active");
  document.querySelector('body').style.overflow = 'unset'
}