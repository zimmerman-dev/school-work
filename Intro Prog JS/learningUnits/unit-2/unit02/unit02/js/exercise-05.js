function exercise05Part1() {
    "use strict";

    // Variable Declarations
    let firstNumber;
    let secondNumber;
    let product;
    let quotient;

    // Variable Assignments
    firstNumber = prompt("Enter a value for the first number:");
    secondNumber = prompt("Enter a value for the second number:");

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    // Calculations
    product = firstNumber * secondNumber;
    quotient = firstNumber / secondNumber;

    // Display input variables with calculations
    document.writeln("First Number: " + firstNumber);
    document.writeln("Second Number: " + secondNumber + "\n");
    document.writeln("Calculations:");
    document.writeln(firstNumber + " * " + secondNumber + " = " + product);
    document.writeln(firstNumber + " / " + secondNumber + " = " + quotient);
}

function exercise05Part2() {
    "use strict";

    // Variable Declarations
    const DIVISOR = 2;
    let dividendOne;
    let dividendTwo;
    let dividendThree;
    let dividendFour;
    let dividendFive;

    // Prompt user for 5 numbers that are assigned to the input variables
    dividendOne = Number(prompt("Enter first value:"));
    dividendTwo = Number(prompt("Enter second value:"));
    dividendThree = Number(prompt("Enter third value:"));
    dividendFour = Number(prompt("Enter fourth value:"));
    dividendFive = Number(prompt("Enter fifth value:"));

    // Display remainder for each calculation when divided by our const DIVISOR
    document.writeln("Modulo: \n");
    document.writeln("(" + dividendOne + " % 2) is " + (dividendOne % DIVISOR));
    document.writeln("(" + dividendTwo + " % 2) is " + (dividendTwo % DIVISOR));
    document.writeln("(" + dividendThree + " % 2) is " + (dividendThree % DIVISOR));
    document.writeln("(" + dividendFour + " % 2) is " + (dividendFour % DIVISOR));
    document.writeln("(" + dividendFive + " % 2) is " + (dividendFive % DIVISOR));
}