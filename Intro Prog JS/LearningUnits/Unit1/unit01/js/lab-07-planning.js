function lab07() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Declare Variables

    let numberOne;
    let numberTwo;
    let sum;

    // Prompt User for two numbers

    numberOne = prompt("Enter your number:");
    numberTwo = prompt("Enter another number here:");
    
    // Find sum for two numbers

    sum = Number(numberOne) + Number(numberTwo);

    // Output to DOM, both numbers and sum

    document.writeln("Number one: " + numberOne);
    document.writeln("Number two: " + numberTwo);
    document.writeln("Sum: " + sum);
}