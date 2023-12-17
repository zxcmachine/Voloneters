const sendReportPopup = document.querySelector(".send-report__popup");
const sendReportTooltiop = document.querySelector(".send-report__tooltip");
const acceptReportPopup = document.querySelector(".accept-report__popup");
const pinReportPopup = document.querySelector('.pin-report__popup');
const rejectReportPopup = document.querySelector('.reject-report__popup');

let isShowReportTooltip = false;

function openRejectReportPopup() {
  rejectReportPopup.classList.add("some-popup_active")
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

new Swiper('.pin-report__photo-swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.pin-report__swiper-button-right',
    prevEl: '.pin-report__swiper-button-left',
  },

  spaceBetween: 10,
  speed: 400,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

new Swiper('.pin-report__video-swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.pin-report__video-swiper-button-right',
    prevEl: '.pin-report__video-swiper-button-left',
  },


  spaceBetween: 10,
  speed: 400,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const dragZoneFileDrop = document.querySelector('.send-report__file-area-label')

const reportLoadFile = document.querySelector('.send-report__file_not-over')
const reportLoadFileOver = document.querySelector(".send-report__file_over")

const uploadInput = document.getElementById("send-report__file")
let files = [];

["dragover", "drop"].forEach(function (event) {
  document.addEventListener(event, function (evt) {
    evt.preventDefault()
    return false
  })
})

reportLoadFile.addEventListener('dragenter', function (e) {
  reportLoadFile.classList.add('send-report__file_over-active');
  reportLoadFile.innerHTML = '<p class="send-report__file-area-label-first-line text-md text-primary">Перетащите файл сюда</p><img src = "../../assets/imgs/icons/file-drag.svg" alt = "" class="send-report__file_over" > '
});


reportLoadFile.addEventListener('dragleave', function (e) {
  if (e.target.classList[0] == "send-report__file-area-label-area") {
    reportLoadFile.classList.remove('send-report__file_over-active');
    reportLoadFile.innerHTML = '<p class="send-report__file-area-label-first-line text-md text-primary">Перетащите <span class="text-bold">фото</span> или <span class="text-bold">выберите файл</span></p><p class="send-report__file-area-label-second-line text-sm text-primary" > Загрузите не более 5 - и фото</p > '
  }


  // reportLoadFile.classList.remove("send-report__file-area-label-area_hidden")

});

// reportLoadFile.addEventListener('drop', function (e) {


//   reportLoadFile.classList.remove('send-report__file_over-active');
//   reportLoadFile.innerHTML = '<p class="send-report__file-area-label-first-line text-md text-primary">Перетащите <span class="text-bold">фото</span> или <span class="text-bold">выберите файл</span></p><p class="send-report__file-area-label-second-line text-sm text-primary" > Загрузите не более 5 - и фото</p > '
//   var files = e.dataTransfer.files;
//   handleFiles(files);
// });



reportLoadFile.addEventListener("drop", function () {
  reportLoadFile.classList.remove('send-report__file_over-active');
  reportLoadFile.innerHTML = '<p class="send-report__file-area-label-first-line text-md text-primary">Перетащите <span class="text-bold">фото</span> или <span class="text-bold">выберите файл</span></p><p class="send-report__file-area-label-second-line text-sm text-primary" > Загрузите не более 5 - и фото</p > '

  file = event.dataTransfer?.files[0]
  if (!file) {
    return
  }

  if (file.type === "image/png" || file.type === "image/jpg") {
    uploadInput.files = event.dataTransfer.files
    handleFiles()
  } else {
    reportLoadFile.innerHTML = '<p class="send-report__file-area-label-first-line text-md text-primary">Перетащите <span class="text-bold">фото</span> или <span class="text-bold">выберите файл</span></p><p class="send-report__file-area-label-second-line text-sm text-pink" > Поддерживаются только эти форматы: .jpg, .png</p > '
    return false
  }
})


function handleFiles(file) {
  const filesLoad = uploadInput.files;
  files = [...files, ...filesLoad];
  const reader = new FileReader();

  if (files.length) {
    files.forEach(item => {
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
      }

      reader.readAsDataURL(item);
    })
  }

}