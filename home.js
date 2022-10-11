// CONTROL SLIDER
$("section.slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dotsEach: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    900: {
      items: 4,
    },
    700: {
      items: 3,
    },
    0: {
      items: 2,
      margin: 40,
    },
  },
});

// ALTERNATE WINNER DISPLAY
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

// CONTROL MOBILE UI
const showTicketButton = document.querySelector(".changeUI .showTicket");
const showResultButton = document.querySelector(".changeUI .showResult");
const ticketSection = document.querySelector("section.ticket");
const mobileResultSection = document.querySelector("section.mobile-result");

showTicketButton.addEventListener("click", showTicket);
showResultButton.addEventListener("click", showResult);

function showTicket() {
  if (showTicketButton.classList.contains("active")) {
    return;
  }

  showTicketButton.classList.add("active");
  ticketSection.classList.add("active");

  showResultButton.classList.remove("active");
  mobileResultSection.classList.remove("active");
}

function showResult() {
  if (showResultButton.classList.contains("active")) {
    return;
  }

  showTicketButton.classList.remove("active");
  ticketSection.classList.remove("active");

  showResultButton.classList.add("active");
  mobileResultSection.classList.add("active");
}
