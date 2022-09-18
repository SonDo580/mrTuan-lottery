$("section.slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dotsEach: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 4,
    },
  },
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

const winnerCards = document.querySelectorAll("section.result .card-winner");
const winnerNum = winnerCards.length;
setInterval(() => {
  for (let i = 0; i < winnerNum; i++) {
    if (winnerCards[i].classList.contains("active")) {
      winnerCards[i].classList.remove("active");
    }
  }
}, 3000);
