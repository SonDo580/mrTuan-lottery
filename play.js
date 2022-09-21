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
    chooseButton.addEventListener("click", quickPick);

    const resetButton = document.createElement("button");
    resetButton.classList.add("reset");
    resetButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    resetButton.addEventListener("click", resetSelection);

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
    numCell.addEventListener("click", selectNumber);

    table.appendChild(numCell);
  }
}

// NUMBER SELECTION
function selectNumber(event) {
  const selectedCell = event.target;
  const table = selectedCell.parentNode;
  const tableActiveCellNumber = table.querySelectorAll(".active").length;

  const card = table.parentNode;
  const cardActiveCellNumber = card.querySelectorAll(".active").length;

  if (selectedCell.classList.contains("active")) {
    selectedCell.classList.remove("active");

    if (card.classList.contains("done")) {
      card.classList.remove("done");
    }
    return;
  }

  if (
    (table.classList.contains("table1") && tableActiveCellNumber === 5) ||
    (table.classList.contains("table2") && tableActiveCellNumber === 2)
  ) {
    return;
  }

  selectedCell.classList.add("active");
  if (cardActiveCellNumber === 6) {
    card.classList.add("done");
  }
}

function resetSelection(event) {
  const card = event.target.parentNode.parentNode;
  const activeCells = card.querySelectorAll(".numTable .active");
  activeCells.forEach((cell) => cell.classList.remove("active"));
}

const resetAllButton = document.querySelector("button[data-function=resetAll]");
resetAllButton.addEventListener("click", resetAll);

function resetAll() {
  if (!confirm("Bạn có thực sự muốn xoá hết?")) {
    return;
  }

  const activeCells = document.querySelectorAll(".numTable .active");
  activeCells.forEach((cell) => cell.classList.remove("active"));
}

// PICK RANDOM NUMBER
function getRandomNumber(quantity, min, max) {
  const arr = [];
  while (arr.length < quantity) {
    const num = Math.floor(min + (max - min + 1) * Math.random());

    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
}

function quickPick(event) {}
