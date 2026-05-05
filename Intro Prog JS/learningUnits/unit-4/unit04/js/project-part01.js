// Global Variable Declaration
let userNumberOne;
let userNumberTwo;

function userPrompt() {

    // Variable Assignment
    userNumberOne = prompt("Enter a number");
    userNumberTwo = prompt("Enter another number");
    userNumberOne = Number(userNumberOne);
    userNumberTwo = Number(userNumberTwo);
}

function displayResults(enteredNumberOne, enteredNumberTwo) {

    // Scoped Variable Declaration
    let index;
    let product;

    // Display results loop
    for (index = enteredNumberOne; index < enteredNumberTwo; index++) {

        product = index * enteredNumberTwo;

        document.write(index);
        document.write(" times ");
        document.write(enteredNumberTwo);
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
    if (userNumberOne < 0 || userNumberTwo < 0) {
        alert("One of the numbers was less than zero, please try again.");

    } else if (userNumberTwo <= userNumberOne) {
        alert("The second number has to be bigger than the first, please try again.");

    } else {

        // Display loop
        displayResults(userNumberOne, userNumberTwo);
    }
}