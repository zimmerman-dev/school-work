function part01() {
    "use strict";

    // Variable Declaration
    let firstNumber;
    let secondNumber;
    let sum;
    let difference;
    let product;
    let quotient;

    // Prompt user for two numbers
    firstNumber = prompt("Enter the first number: ");
    secondNumber = prompt("Enter the second number: ");

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    // Calculate sum, difference, product, and quotient
    sum = firstNumber + secondNumber;
    difference = firstNumber - secondNumber;
    product = firstNumber * secondNumber;
    quotient = firstNumber / secondNumber;

    // Display output variables
    document.writeln("Entered Numbers: " + firstNumber + ", " + secondNumber);
    document.writeln("Sum: " + sum);
    document.writeln("Difference: " + difference);
    document.writeln("Product: " + product);
    document.writeln("Quotient: " + quotient);
}