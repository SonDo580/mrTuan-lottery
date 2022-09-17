$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

const bannerImages = document.querySelectorAll("section.banner img");
setInterval(() => {
  for (let image of bannerImages) {
    if (image.classList.contains("active")) {
      image.classList.remove("active");
    } else {
      image.classList.add("active");
    }
  }
}, 3000);
