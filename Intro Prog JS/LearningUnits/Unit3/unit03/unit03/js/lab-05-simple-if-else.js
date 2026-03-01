function lab05() {
    "use strict";

    // Constant Declaration
    const ERROR_MESSAGE = "Input Error... Try again!";
    
    // Variable Declarations
    let firstString;
    let secondString;
    let outputMessage;

    // Variable Assignment
    firstString = prompt("Enter a string:");
    secondString = prompt("Enter a string that will sort after the first:");

    // Validation (check for empty strings)
    if (firstString === null || firstString.length <= 0 
        || secondString === null || secondString.length <= 0) {
        alert(ERROR_MESSAGE);
        return;
    }

    // Calculation
    if (firstString < secondString) {
        outputMessage = "Very good, \"" + secondString 
        + "\" comes after \"" + firstString + "\".";
    } else {
        outputMessage = "\"" + secondString 
        + "\" is the same or does not sort after \"" + firstString + "\".";
    }

    // Display
    document.writeln(outputMessage);
}