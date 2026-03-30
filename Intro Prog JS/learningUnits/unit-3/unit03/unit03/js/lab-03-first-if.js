function lab03() {
    "use strict";

    // Declare Constants
    const ERROR_MESSAGE = "Entered Number not greater than 10!";
    const LOWER_BOUNDARY = 10;

    // Declare Variables
    let enteredNumber;
    
    // Assign enteredNumber with prompt
    enteredNumber = Number(prompt("Enter a number greater than 10:"));

    // If num is less than or equal to 10, display error. Display num
    if (enteredNumber <= LOWER_BOUNDARY) {
        document.writeln(ERROR_MESSAGE);
    }
    document.writeln("Entered Number: " + enteredNumber);
}