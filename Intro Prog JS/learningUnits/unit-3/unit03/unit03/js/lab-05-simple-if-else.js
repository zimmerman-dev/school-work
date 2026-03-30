function lab05() {
    "use strict";

    // Constant Declaration
    const ERROR_MESSAGE = "Input Error... Try again!";
    
    // Variable Declarations
    let firstString;
    let secondString;
    let outputMessage;

    // Prompt user for variable assignment
    firstString = prompt("Enter a string:");
    secondString = prompt("Enter a string that will sort after the first:");

    // Validation (check for empty strings or prompt cancellation)
    if (firstString === null || firstString.length <= 0 
        || secondString === null || secondString.length <= 0) {
        alert(ERROR_MESSAGE);
        return;
    }

    // Calculation (logic)
    if (firstString < secondString) {
        outputMessage = "Very good, \"" + secondString 
        + "\" comes after \"" + firstString + "\".";
    } else {
        outputMessage = "\"" + secondString 
        + "\" is the same or does not sort after \"" + firstString + "\", Please try again.";
    }

    // Display output
    document.writeln(outputMessage);
}