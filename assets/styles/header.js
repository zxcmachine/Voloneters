//HEADER

const authPopup = document.querySelector(".auth-popup")
const regValPopup = document.querySelector(".register-valant-popup")
const regOrgPopup = document.querySelector(".register-org-popup")
const resetPassPopup = document.querySelector(".reset-pass-popup")
const newPassPopup = document.querySelector(".new-pass-popup")

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
  if(document.querySelector('.history_score_no_empty')){
    document.querySelector('.history_score_no_empty').classList.remove('some-popup_active')
  }

  document.querySelector('body').style.overflow = "unset"
}
function openUnversalFilter(el){
  el.querySelector('.universal__filter-items').classList.toggle('active')
  el.classList.toggle('active')
 }

 function openHistoryScore(){
  document.querySelector('.history_score_no_empty').classList.add('some-popup_active')
 }

 function history_score_how_to_balance(){
  document.querySelector('.history_score_how_to_balance').classList.add('some-popup_active')
 }

 function history_score_how_to_rating(){
  document.querySelector('.history_score_how_to_rating').classList.add('some-popup_active')
 }

