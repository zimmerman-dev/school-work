function lab06() {
    "use strict";

    // Constant Declaration
    const MIN_VALUE = 1;
    const MAX_VALUE = 100;
    const ERROR_MESSAGE = "Input Error... Try again!";

    // Variable Declarations
    let userNumber;
    let outputMessage;

    // Variable Assignment
    userNumber = prompt("Enter a number between 1 and 100 exclusive:");

    // Validation (check for cancel, empty string, and isNumeric)
    if (userNumber === null || userNumber.length <= 0 || !isNumeric(userNumber)) {
        alert(ERROR_MESSAGE);
        return;
    }

    userNumber = Number(userNumber);

    // Calculations (logic)
    if (userNumber > MIN_VALUE && userNumber < MAX_VALUE) {
        outputMessage = "The number " + userNumber 
        + " is within the correct range.";
    } else {
        outputMessage = "The number " + userNumber 
        + " is not within the correct range, try again.";
    }

    // Display result
    document.writeln(outputMessage);
}
