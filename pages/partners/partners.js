function togglePartnerPopup(flag) {

    if (flag) {
        document.querySelector('.partners-popup').classList.add('partners-popup_active');
            document.querySelector('body').style.overflow = 'hidden'


    } else {
        document.querySelector('.partners-popup').classList.remove('partners-popup_active');
  document.querySelector('body').style.overflow = 'unset'

    }
}