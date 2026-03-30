function lab04() {
    "use strict";
    
    // Constant Declaration
    const BOUNDS_CHECK = 100;
    
    // Variable Declaration
    let enteredNumber;
    let outputMessage;

    // Variable Assignment
    enteredNumber = prompt("Enter a number:");

    // Validation
    if (isNaN(enteredNumber)) {
        outputMessage = "error, value not a number!";
    }

    enteredNumber = Number(enteredNumber);

    // Logic
    if (enteredNumber === BOUNDS_CHECK) {
        outputMessage = "is Just Right!";
    }

    if (enteredNumber < BOUNDS_CHECK) {
        outputMessage = "is Too Little!";
    }

    if (enteredNumber > BOUNDS_CHECK) {
        outputMessage = "is Too Big!";
    }

    // Display output message
    document.writeln(outputMessage);
}