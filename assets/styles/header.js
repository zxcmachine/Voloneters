//HEADER

const authPopup = document.querySelector(".auth-popup")
const regValPopup = document.querySelector(".register-valant-popup")
const regOrgPopup = document.querySelector(".register-org-popup")
const resetPassPopup = document.querySelector(".reset-pass-popup")
const newPassPopup = document.querySelector(".new-pass-popup")

console.log(authPopup)
function openAuthPopup() {
  closeAllHeaderPopups();
  authPopup.classList.add("some-popup_active")
  document.querySelector('body').style.overflow = 'hidden'
}

function goRegValPopup() {
  closeAllHeaderPopups();
  regValPopup.classList.add("some-popup_active");
}

function goRegOrgPopup() {
  closeAllHeaderPopups();
  regOrgPopup.classList.add("some-popup_active");
}

function goResetPassPopup() {
  closeAllHeaderPopups();
  resetPassPopup.classList.add("some-popup_active");
}

function goNewPassPopup() {
  closeAllHeaderPopups();
  newPassPopup.classList.add("some-popup_active");
}

function closeAllHeaderPopups() {
  authPopup.classList.remove("some-popup_active");
  regValPopup.classList.remove("some-popup_active");
  regOrgPopup.classList.remove("some-popup_active");
  resetPassPopup.classList.remove("some-popup_active");
  newPassPopup.classList.remove("some-popup_active");
}
