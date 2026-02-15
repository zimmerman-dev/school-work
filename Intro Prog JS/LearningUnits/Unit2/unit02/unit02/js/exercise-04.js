function exercise04Part1() {
    "use strict";

    // Variable Declarations
    let firstName;
    let middleInitial;
    let lastName;
    let fullName;

    // Variable Assigments
    firstName = prompt("Enter first name:");
    middleInitial = prompt("Enter middle initial:");
    lastName = prompt("Enter last name:");

    // Processing Section
    fullName = firstName + " " + middleInitial + ". " + lastName;

    // Display fullName
    document.writeln(fullName);
}

function exercise04Part2() {
    "use strict";

    // Variable Assignment
    let firstNumber;
    let secondNumber;
    let total;

    // Variable Assignments
    firstNumber = prompt("Enter a number:");
    secondNumber = prompt("Enter a second Number:");
    
    // Calculate total
    total = Number(firstNumber) + Number(secondNumber);

    // Display output variables
    document.writeln("First Number: " + firstNumber);
    document.writeln("Second Number: " + secondNumber);
    document.writeln("Concatenation: " + firstNumber + secondNumber);
    document.writeln("Addition Total: " + total);
}
