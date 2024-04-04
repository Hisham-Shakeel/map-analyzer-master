// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on
let row, column;
let outputEl = document.getElementById("currentTile");

// Solution Functions...
function level1Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 4) {
		outputEl.innerHTML = 'sand';
	} else {
		outputEl.innerHTML = 'water';
	}
}

function level2Solution() {
	// USE CHAINED IF STATEMENT
	if (column >= 8) {
		outputEl.innerHTML = "water";
	} else if (column >= 3) {
		outputEl.innerHTML = "sand";
	} else {
		outputEl.innerHTML = "hills";
	}
}

function level3Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 2 || column >= 8) {
		outputEl.innerHTML = "hills";
	} else {
		outputEl.innerHTML = "sand";
	}
}

function level4Solution() {
	// USE BINARY IF STATEMENT
	if (row <= 2) {
		outputEl.innerHTML = "hills";
	} else {
		outputEl.innerHTML = "sand";
	}
}

function level5Solution() {
	// USE CHAINED IF STATEMENT
	if (row <= 2) {
		outputEl.innerHTML = "hills";
	} else if (row >= 6) {
		outputEl.innerHTML = "water";
	} else {
		outputEl.innerHTML = "sand";
	}
}

function level6Solution() {
	// USE BINARY IF STATEMENT
	if (row <= 1 || row >= 6) {
		outputEl.innerHTML = "water";
	} else {
		outputEl.innerHTML = "sand";
	}
}

function level7Solution() {
	// USE BINARY IF STATEMENT
	if (column == 7 && row == 4) {
		outputEl.innerHTML = "water";
	} else {
		outputEl.innerHTML = "sand";
	}
}

function level8Solution() {
	// USE BINARY IF STATEMENT
	if (column == 2 || row == 5) {
		outputEl.innerHTML = "tree";
	} else {
		outputEl.innerHTML = "sand";
	}
}

function level9Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 5 && row <= 5) {
		outputEl.innerHTML = "water";
	} else {
		outputEl.innerHTML = "sand";
	}
}

function level10Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 1) {
		outputEl.innerHTML = "hills";
	} else if (column <= 3) {
		outputEl.innerHTML = "tree";
	} else if (column >= 8) {
		outputEl.innerHTML = "water";
	} else {
		outputEl.innerHTML = "sand";
	}
}

function level11Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 5 && row <= 3) {
		outputEl.innerHTML = "water";
	} else if (column >= 6 && row <= 3) {
		outputEl.innerHTML = "hills";
	} else if (column >= 6) {
		outputEl.innerHTML = "tree";
	} else {
		outputEl.innerHTML = "sand";
	}
}

function level12Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 5 && row <= 4 || column >= 6 && row >= 5) {
		outputEl.innerHTML = "water";
	} else {
		outputEl.innerHTML = "sand";
	}
}

function level13Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 9 && row <= 5 && column >= 4 && row >= 2) {
		outputEl.innerHTML = "sand";
	} else {
		outputEl.innerHTML = "tree";
	}
}

function level14Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 10 && row <= 5 && column >= 7 && row >= 3) {
		outputEl.innerHTML = "water";
	} else if (column <= 4 && row <= 5 && column >= 2 && row >= 1) {
		outputEl.innerHTML = "tree";
	} else {
		outputEl.innerHTML = "sand";
	}
}
