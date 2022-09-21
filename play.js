const cardContainer = document.querySelector(".chooseNumber .cards");

const card = document.createElement("div");
card.classList.add("card");

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttons");

const chooseButton = document.createElement("button");
chooseButton.classList.add("choose");
chooseButton.textContent = "Chọn nhanh";
buttonContainer.appendChild(chooseButton);

const resetButton = document.createElement("button");
resetButton.classList.add("reset");
resetButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
buttonContainer.appendChild(resetButton);

const instruction1 = document.createElement("p");
instruction1.textContent = "Chọn 5 số";
const instruction2 = document.createElement("p");
instruction2.textContent = "Chọn 2 số";

const table1 = document.createElement("div");
table1.classList.add("numTable");
table1.classList.add("table1");

for (let i = 1; i <= 50; i++) {
  const numCell = document.createElement("div");
  numCell.classList.add("num");
  numCell.textContent = i;

  table1.appendChild(numCell);
}

const table2 = document.createElement("div");
table2.classList.add("numTable");
table2.classList.add("table2");

for (let i = 1; i <= 12; i++) {
  const numCell = document.createElement("div");
  numCell.classList.add("num");
  numCell.textContent = i;

  table2.appendChild(numCell);
}

card.appendChild(buttonContainer);
card.appendChild(instruction1);
card.appendChild(table1);
card.appendChild(instruction2);
card.appendChild(table2);

cardContainer.appendChild(card);
