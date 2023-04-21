const createTableBtn = document.getElementById("createTableBtn");
const myTable = document.getElementById("myTable");

function createTable() {
  const numRows = prompt("Input number of rows");
  const numCols = prompt("Input number of columns");

  for (let i = 0; i < numRows; i++) {
    const row = myTable.insertRow(i);
    for (let j = 0; j < numCols; j++) {
      const cell = row.insertCell(j);
      cell.innerHTML = `Row-${i} Column-${j}`;
    }
  }
}

createTableBtn.addEventListener("click", createTable);
