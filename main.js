const toggleMenuButton = document.querySelector(".toggle-menu");
const mobileMenu = document.querySelector(".mobile-menu");

toggleMenuButton.addEventListener("click", showMenu);

function showMenu() {
  mobileMenu.classList.add("show");
}
