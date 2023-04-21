// Get the button element
var button = document.querySelector("input[type='button']");

// Get the table element
var table = document.getElementById("myTable");

// Add a click event listener to the button
button.addEventListener("click", createTable);

function createTable() {
  // Get the number of rows from the user
  var numRows = prompt("Input number of rows:");

  // Get the number of columns from the user
  var numCols = prompt("Input number of columns:");

  // Create the table rows and cells
  for (var i = 0; i < numRows; i++) {
    var row = table.insertRow(i);
    for (var j = 0; j < numCols; j++) {
      var cell = row.insertCell(j);
      cell.innerHTML = "Row-" + i + " Column-" + j;
    }
  }
}
