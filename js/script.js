var link = document.querySelector(".btn-search");
var popup = document.querySelector(".form-wrapper");
var date = popup.querySelector("[type=text]");
//var quantity = popup.querySelector()
var form = popup.querySelector("form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-wrapper-show");
  date.focus();
});

form.addEventListener("submit", function (evt) {
  if (!date.value) {
    evt.preventDefault();
    console.log("Нужно ввести даты и количество человек");
  }
})
