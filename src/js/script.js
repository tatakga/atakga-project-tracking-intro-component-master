const burgerToggle = document.getElementById("burgerToggle");
const headerMenu = document.querySelector(".header__menu");
let toggle = false;
burgerToggle.children[0].setAttribute("style", "display: inline-block");
burgerToggle.children[1].setAttribute("style", "display: none");

burgerToggle.addEventListener("click", function () {
  toggle = !toggle;
  if (toggle) {
    this.children[0].setAttribute("style", "display: none");
    this.children[1].setAttribute("style", "display: inline-block");
    headerMenu.classList.add("active");
  } else {
    this.children[0].setAttribute("style", "display: inline-block");
    this.children[1].setAttribute("style", "display: none");
    headerMenu.classList.remove("active");
  }
  // this.children[0]);
});
