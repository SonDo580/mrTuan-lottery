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

  for (let i = 0; i < numWinners; i += 2) {
    if (!winnerCards[i].classList.contains("active")) {
      continue;
    }

    winnerCards[i].classList.remove("active");
    if (i + 1 <= numWinners - 1) {
      winnerCards[i + 1].classList.remove("active");
    }

    if (i === numWinners - 1 || i === numWinners - 2) {
      winnerCards[0].classList.add("active");
      winnerCards[1].classList.add("active");
      return;
    }

    if (i + 2 <= numWinners - 1) {
      winnerCards[i + 2].classList.add("active");
    }
    if (i + 3 <= numWinners - 1) {
      winnerCards[i + 3].classList.add("active");
    }

    return;
  }
}, 3000);
