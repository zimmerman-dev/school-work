function exercise07Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:
    
    // Variable Declaration for userName

    let userName;

    // Prompt User for name, store return value to userName

    userName = prompt("Enter your name:");

    // Output to Dom
    
    document.writeln("\"Hi, \"" + userName + "\". How are you?\"");
}

function exercise07Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let numOne;
    let numTwo;
    let numThree;
    let result;

    // Prompt user for numbers, return values stored in variables

    numOne = prompt("Enter first number:");
    numTwo = prompt("Enter second number:");
    numThree = prompt("Enter third number");
   
    // Type conversion & calculate result

    numOne = Number(numOne);
    numTwo = Number(numTwo);
    numThree = Number(numThree);

    result = numOne * numTwo / numThree;

    // Output to DOM

    document.writeln("First Number: " + numOne);
    document.writeln("Second Number: " + numTwo);
    document.writeln("Third Number: " + numThree);
    document.writeln(numOne + " * " + numTwo + " / "
        + numThree + " = " + result
    );   
}
