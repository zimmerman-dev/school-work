function exercise07Part1() {
    "use strict";
    
    // Const Initialization
    const UPPER_THRESHOLD = 1000;

    // Variable Declaration
    let enteredNumber;
    let total;

    // Variable Assignment
    total = 0;

    // Loop for displaying entered numbers and totals
    while (total <= UPPER_THRESHOLD) {
        enteredNumber = prompt("Enter a number");
        enteredNumber = Number(enteredNumber);
        total += enteredNumber;
        document.writeln("Entered Number: " + enteredNumber + ", Current Total: " + total);
    }

    // display final total
    document.writeln("\nThe final total is: " + total);
}

function exercise07Part2() {
    "use strict";
    
    // Const Initialization
    const EVEN_NUMBER_MESSAGE = " is an even number";
    const ODD_NUMBER_MESSAGE = " isn't an even number";

    // Variable Declaration
    let enteredNumber;

    // Variable Assignment
    enteredNumber = 0;

    // Even number validation loop
    while (enteredNumber % 2 === 0) {
        enteredNumber = prompt("Enter an even number");
        enteredNumber = Number(enteredNumber);
        
        // Logic for displaying the correct message
        if (enteredNumber % 2 === 0) {
            document.writeln(enteredNumber + EVEN_NUMBER_MESSAGE);
        } else {
            document.writeln(enteredNumber + ODD_NUMBER_MESSAGE);
        }
    }
}
