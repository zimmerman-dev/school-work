function part01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let firstNumber;
    let secondNumber;
    let sum;
    let difference;
    let product;
    let quotient;

    // Prompt user, return values get stored in input variables

    firstNumber = prompt("Enter the first number: ");
    secondNumber = prompt("Enter the second number: ");

    // Explicit conversion with Number()

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    // Calculations

    sum = firstNumber + secondNumber;
    difference = firstNumber - secondNumber;
    product = firstNumber * secondNumber;
    quotient = firstNumber / secondNumber;

    // Output the values from output variables

    document.writeln("Entered Numbers: " + firstNumber + ", " + secondNumber);
    document.writeln("Sum: " + sum);
    document.writeln("Difference: " + difference);
    document.writeln("Product: " + product);
    document.writeln("Quotient: " + quotient);
}