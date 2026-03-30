function exercise03Part1() {
    "use strict";
    // Variable Declarations
    let enteredNumber;

    // Prompt user for a number and display the result
    enteredNumber = Number(prompt("Enter a number:"));
    document.writeln("You entered the number: " + enteredNumber);

    // Prompt user again
    enteredNumber = Number(prompt("Enter a number:"));
    document.writeln("Then you entered the number: " + enteredNumber);
}

function exercise03Part2() {
    "use strict";

    // Variable Declarations
    let firstName;
    let numberOne;
    let numberTwo;
    let total;

    // Variable Assignment
    firstName = "Fred";
    numberOne = 10;
    numberTwo = 20;

    // Calculations
    total = numberOne + numberTwo;

    // Display all the values collected
    document.writeln("Name: " + firstName);
    document.writeln("First number: " + numberOne);
    document.writeln("Second number: " + numberTwo);
    document.writeln("Total: " + total);
}
