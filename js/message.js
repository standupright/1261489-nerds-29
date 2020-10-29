var messageLink = document.querySelector(".button-map-description");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup-close");
var popupForm = document.querySelector(".popup-form");
var popupName = document.querySelector(".form-name");
var popupEmail = document.querySelector(".form-email");
var popupMessage = document.querySelector(".form-message");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

messageLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storageName) {
        popupName.value = storageName;
        popupEmail.focus();

    } else {
        popupName.focus();
    }

    if (storageEmail) {
        popupEmail.value = storageEmail;
        popupMessage.focus();
    } else {
        popupName.focus();
    }
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

popupForm.addEventListener("submit" , function(evt){
    if (!popupName.value || !popupEmail.value || !popupMessage.value){
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport){
        localStorage.setItem("name", popupName.value);
        localStorage.setItem("email", poupEmail.value);
        }
        }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });