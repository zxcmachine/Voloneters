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

// const uploadInput = document.getElementById("send-report__file")
let uploadInput = document.querySelector(".send-report_file-el")

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
});

reportLoadFile.addEventListener("drop", function () {
  reportLoadFile.classList.remove('send-report__file_over-active');
  reportLoadFile.innerHTML = '<p class="send-report__file-area-label-first-line text-md text-primary">Перетащите <span class="text-bold">фото</span> или <span class="text-bold">выберите файл</span></p><p class="send-report__file-area-label-second-line text-sm text-primary" > Загрузите не более 5 - и фото</p > '

  file = event.dataTransfer?.files[0]
  if (!file) {
    return
  }

  if (file.type === "image/png" || file.type === "image/jpg") {
    uploadInput.files = event.dataTransfer.files
    console.log(file);
    handleFiles([file])
  } else {
    reportLoadFile.innerHTML = '<p class="send-report__file-area-label-first-line text-md text-primary">Перетащите <span class="text-bold">фото</span> или <span class="text-bold">выберите файл</span></p><p class="send-report__file-area-label-second-line text-sm text-pink" > Поддерживаются только эти форматы: .jpg, .png</p > '
    return false
  }
})


const fileAreaDefault = document.getElementById("send-report__file-area-default");
const fileAreaListFiles = document.getElementById("send-report__file-area-files-list")

console.log(fileAreaListFiles);
let idFile = 0;

async function handleFiles(file) {
  console.log(files);
  uploadInput = document.querySelector(".send-report_file-el")
  const filesLoad = uploadInput.files;

  console.log("8888")
  console.log(file);
  let fileItem = {};
  fileItem.file = file;
  fileItem.id = idFile;
  file.someIdFile = idFile;
  console.log(files);
  console.log("8888")
  files.push(fileItem)
  
  const reader = new FileReader();

  if (files.length) {
    reader.onload = function (e) {
      console.log("-----")
      console.log(e);
      const fileEl = document.createElement("div");
      fileEl.classList.add("send-report__file-area-files-list-item-box");
      fileEl.setAttribute("data-id", idFile);
      fileEl.innerHTML = `
        <img src="${e.target.result}" alt="" class="send-report__file-area-files-list-item-img">
        <img src="../../assets/imgs/icons/XCircle.svg" class="send-report__file-area-files-list-item-box-close" alt="" onclick="deleteFile(this)">
      `
    
      fileAreaDefault.classList.add("send-report__file_over")
      fileAreaListFiles.classList.remove("send-report__file-area-files-list_hidden");

      fileAreaListFiles.insertBefore(fileEl, fileAreaListFiles.firstChild);
      idFile++;
    }
    console.log(files)

    await reader.readAsDataURL(fileItem.file[0]);
  }

}

function deleteFile($el) {
  const $parentEl = $el.parentElement;
  $parentEl.remove();
  $parentEl.classList.remove("send-report__file-area-files-list-item-box");
  const dataId = $parentEl.getAttribute("data-id");
  console.log(dataId);
  console.log($parentEl);
  files = files.filter((file) => file.id != dataId);
  
  console.log(files);
  if(!files.length) {
    fileAreaDefault.classList.remove("send-report__file_over")
    fileAreaListFiles.classList.add("send-report__file-area-files-list_hidden");
  }
 
}

function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

const tabActive = document.getElementById("reports__tabs-list-active");
const tabHistory = document.getElementById("reports__tabs-list-history");


function setToHistory() {
  tabHistory.classList.add("reports__tabs-list-item_active");
  tabActive.classList.remove("reports__tabs-list-item_active")
}

function setToActive() {
  tabHistory.classList.remove("reports__tabs-list-item_active");
  tabActive.classList.add("reports__tabs-list-item_active")


}