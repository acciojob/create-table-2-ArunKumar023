function createTable() {
    //Write your code here

  let rows = prompt("Input number of rows");
	let cols = prompt("Input number of columns");

	for(let i = 0; i < rows; i++){
		let row = document.createElement("tr");
		for(let j = 0; j < cols; j++){
			let col = document.createElement("td");
			col.innerText = `Row-${i} Column-${j}`;
			row.appendChild(col);
		}
		table.appendChild(row);
	}

}