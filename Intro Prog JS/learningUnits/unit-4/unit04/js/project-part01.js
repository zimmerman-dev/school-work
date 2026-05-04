// Global Variable Declaration
let x;
let y;

function userPrompt() {

    // Variable Assignment
    x = prompt("Enter a number");
    y = prompt("Enter another number");
    x = Number(x);
    y = Number(y);
}

function displayResults(enteredNumberX, enteredNumberY) {

    // Scoped Variable Declaration
    let index;
    let product;

    // Display results loop
    for (index = enteredNumberX; index < enteredNumberY; index++) {

        product = index * enteredNumberY;

        document.write(index);
        document.write(" times ");
        document.write(enteredNumberY);
        document.write(" is ");
        document.write(product);
        document.write(".<br>");
    }
}

function part01() {
    "use strict";

    // Prompt user for numbers
    userPrompt();

    // Logic check
    if (x < 0 || y < 0) {
        alert("One of the numbers was less than zero, please try again.");

    } else if (y <= x) {
        alert("The second number has to be bigger than the first, please try again.");

    } else {

        // Display loop
        displayResults(x, y);
    }
}