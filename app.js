const form = document.querySelector("form");
const email = document.querySelector("#email");
const error_message = document.querySelector("#error_message");
const err_icon = document.querySelector("#err_icon");
const aside_img = document.querySelector("#aside_img");

form.addEventListener("submit", e => {
  e.preventDefault();
});

email.addEventListener("invalid", e => {
  e.preventDefault();
});
email.addEventListener("change", e => {
  //checks if the input has valid content
  if (!email.checkValidity()) {
    error_message.style.display = "block";
    err_icon.style.display = "block";
  } else {
    error_message.style.display = "none";
    err_icon.style.display = "none";
  }
});

//changing the hero image src depending on the media query
const mobileMediaQuery = window.matchMedia("(max-width: 375px)");
mobileMediaQuery.addListener(e => {
  if (e.matches) {
    aside_img.setAttribute("src", "./images/hero-mobile.jpg");
  } else {
    aside_img.setAttribute("src", "./images/hero-desktop.jpg");
  }
});
