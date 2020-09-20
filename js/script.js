const fixedButton = document.getElementById("fixed-button");
const fixedHeaderOnMobile = document.getElementById("mobile-header");

document.addEventListener("scroll", () => {
  let scrollHeight = document.documentElement.scrollTop;

  if (scrollHeight >= 511) {
    fixedButton.classList.add("js-fixed-button");
    fixedHeaderOnMobile.classList.add("js-header-show");
  } else {
    fixedButton.classList.remove("js-fixed-button");
    fixedHeaderOnMobile.classList.remove("js-header-show");
  }
});