// MOBILE MENU
const showMenuButton = document.querySelector(".show-menu");
const closeMenuButton = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

showMenuButton.addEventListener("click", showMenu);
closeMenuButton.addEventListener("click", closeMenu);

function showMenu() {
  mobileMenu.classList.add("show");
}

function closeMenu() {
  mobileMenu.classList.remove("show");
}

// MESSAGE ICON
const showIconButton = document.querySelector(".fixed .showIcon");
showIconButton.addEventListener("click", showFixedIcons);

const fixedIcons = document.querySelector(".fixed .icons");

function showFixedIcons() {
  fixedIcons.classList.add("active");
}
