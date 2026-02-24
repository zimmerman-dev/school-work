function divideSafely() {
    "use strict";

    // Declare Constants
    const DIVISION_ERROR = 0;

    // Declare variables
    let numberOne;
    let numberOneEntry;
    let numberTwo;
    let numberTwoEntry;
    let results;

    // Get input from user
    numberOneEntry = prompt("Please enter a number");
    numberTwoEntry = prompt("Please enter another number");

    // Convert input strings to numbers
    if (isNumeric(numberOneEntry)) {
        numberOne = Number(numberOneEntry);
    } else {
        alert("Entered value was not numeric.");
        return;
    }

    if (isNumeric(numberTwoEntry)) {
        numberTwo = Number(numberTwoEntry);
    } else {
        alert("Entered value was not numeric.");
        return;
    }

    if (numberTwo === DIVISION_ERROR) {
        alert("You have entered a zero. Please try again.");
    } else {
        results = numberOne / numberTwo;
        document.write(numberOne + " divided by " + numberTwo + " is "
                + results);
    }
}
