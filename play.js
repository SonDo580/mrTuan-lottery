const table1 = document.querySelector(".chooseNumber .table1");
const table2 = document.querySelector(".chooseNumber .table2");

for (let i = 1; i <= 50; i++) {
  const numCell = document.createElement("div");
  numCell.classList.add("num");
  numCell.textContent = i;

  table1.appendChild(numCell);
}

for (let i = 1; i <= 12; i++) {
  const numCell = document.createElement("div");
  numCell.classList.add("num");
  numCell.textContent = i;

  table2.appendChild(numCell);
}
