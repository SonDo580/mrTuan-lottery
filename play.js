// TICKET RELATED
const ticketOptions = document.querySelectorAll(".chooseTicket li");
let ticketQuantity = 0;
getTicketQuantity();

ticketOptions.forEach((option) =>
  option.addEventListener("click", changeTicketQuantity)
);

function changeTicketQuantity(event) {
  for (const option of ticketOptions) {
    if (option.classList.contains("active")) {
      option.classList.remove("active");
    }
  }

  event.target.classList.add("active");
  ticketQuantity = Number(event.target.getAttribute("data-num"));
  renderCards();
}

function getTicketQuantity() {
  for (const option of ticketOptions) {
    if (option.classList.contains("active")) {
      ticketQuantity = Number(option.getAttribute("data-num"));
    }
  }
}

// RENDER CARDS
const cardContainer = document.querySelector(".chooseNumber .cards");
renderCards();

function renderCards() {
  cardContainer.textContent = "";

  for (let i = 0; i < ticketQuantity; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    const chooseButton = document.createElement("button");
    chooseButton.classList.add("choose");
    chooseButton.textContent = "Chọn nhanh";

    const resetButton = document.createElement("button");
    resetButton.classList.add("reset");
    resetButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    buttonContainer.appendChild(chooseButton);
    buttonContainer.appendChild(resetButton);

    const instruction1 = document.createElement("p");
    instruction1.textContent = "Chọn 5 số";
    const instruction2 = document.createElement("p");
    instruction2.textContent = "Chọn 2 số";

    const table1 = document.createElement("div");
    table1.classList.add("numTable");
    table1.classList.add("table1");
    renderNumTable(table1, 50);

    const table2 = document.createElement("div");
    table2.classList.add("numTable");
    table2.classList.add("table2");
    renderNumTable(table2, 12);

    card.appendChild(buttonContainer);
    card.appendChild(instruction1);
    card.appendChild(table1);
    card.appendChild(instruction2);
    card.appendChild(table2);

    cardContainer.appendChild(card);
  }
}

function renderNumTable(table, length) {
  for (let i = 1; i <= length; i++) {
    const numCell = document.createElement("div");
    numCell.classList.add("num");
    numCell.textContent = i;

    table.appendChild(numCell);
  }
}
