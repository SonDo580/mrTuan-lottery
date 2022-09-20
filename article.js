const scrollBackButton = document.querySelector(".fixed .scrollBack");

window.addEventListener("scroll", displayButton);

function displayButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBackButton.style.display = "block";
  } else {
    scrollBackButton.style.display = "none";
  }
}

scrollBackButton.addEventListener("click", scrollBackToTop);

function scrollBackToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
