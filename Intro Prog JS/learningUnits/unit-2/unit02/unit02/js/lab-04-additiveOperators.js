function lab04() {
    "use strict";

    // Variable Declarations
    let addTotal;
    let subtractTotal;
    let total;
    let numberOne;
    let numberTwo;
    let numberThree;
    let numberFour;

    // Assign variables with prompt function
    numberOne = Number(prompt("Enter a value for numberOne:"));
    numberTwo = Number(prompt("Enter a value for numberTwo:"));
    numberThree = Number(prompt("Enter a value for numberThree:"));
    numberFour = Number(prompt("Enter a value for numberFour:"));

    // Calculate totals
    addTotal = numberOne + numberTwo;
    subtractTotal = numberThree - numberFour;
    total = addTotal + subtractTotal;

    // Output section, display totals
    document.writeln("addTotal: " + addTotal);
    document.writeln("subtractTotal: " + subtractTotal);
    document.writeln(""); // empty line
    document.writeln("total: " + total);
}