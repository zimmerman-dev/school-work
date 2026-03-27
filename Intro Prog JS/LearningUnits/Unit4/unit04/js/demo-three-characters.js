// Declare the variables that all the
// functions will need to share.
let character1; // Note this is a Global variable
let character2; // Note this is a Global variable
let character3; // Note this is a Global variable
let swap; // Note this is a Global variable

/*
	The purpose of this function is to
	sort the three characters that were entered by the viewer.
*/
function sortThreeCharacters() {
	"use strict";

	if (character1 > character2) {
		swap = character1;
		character1 = character2;
		character2 = swap;
	}

	if (character2 > character3) {
		swap = character2;
		character2 = character3;
		character3 = swap;
	}

	if (character1 > character2) {
		swap = character1;
		character1 = character2;
		character2 = swap;
	}
}

/*
	The purpose of this function is to
	receive the input of three characters.
*/
function readThreeCharacters() {
	"use strict";

	character1 = prompt("Enter one character (1 of 3) "
			+ "or 'XXX' to quit.");
	character2 = prompt("Enter one character (2 of 3) "
			+ "or 'XXX' to quit.");
	character3 = prompt("Enter one character (3 of 3) "
			+ "or 'XXX' to quit.");
}

/*
	The purpose of this function is to
	display the three characters on the Web page.
*/
function printThreeCharacters() {
	"use strict";

	document.write("character1: " + character1 + "<br/>");
	document.write("character2: " + character2 + "<br/>");
	document.write("character3: " + character3);
}

/*
	The purpose of this main function is to
	coordinate the overall processing required to
	repeated read, sort, and display three characters
	input by the viewer.
*/
function processThreeCharacters() {
	"use strict";

	readThreeCharacters();

	while (character1 !== 'XXX'
			&& character2 !== 'XXX'
			&& character1 !== 'XXX') {
		sortThreeCharacters();
		printThreeCharacters();
		readThreeCharacters();
	}
}