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
const numWinners = winnerCards.length;
setInterval(() => {
  if (numWinners <= 2) {
    return;
  }

  for (let i = 0; i < numWinners; i++) {
    if (winnerCards[i].classList.contains("active")) {
      winnerCards[i].classList.remove("active");
      winnerCards[(i + 1) % numWinners].classList.remove("active");
      winnerCards[(i + 2) % numWinners].classList.add("active");
      winnerCards[(i + 3) % numWinners].classList.add("active");
      return;
    }
  }
}, 3000);
