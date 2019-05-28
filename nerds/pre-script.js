var link = document.querySelector(".button-address"),
    popup = document.querySelector(".modal-login"),
    close = popup.querySelector(".modal-close");
link.addEventListener("click", function(e) {
    e.preventDefault(), popup.classList.add("modal-show")
}), close.addEventListener("click", function(e) {
    e.preventDefault(), popup.classList.remove("modal-show")
}), window.addEventListener("keydown", function(e) {
    27 === e.keyCode && popup.classList.contains("modal-show") && popup.classList.remove("modal-show")
});