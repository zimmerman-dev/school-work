function lab07() {
    "use strict";

    // Variable Declaration 
    let enteredNumber;
    let previousNumber;

    // Variable Assignment
    previousNumber = 0;
    
    // Loop
    while (true) {
        enteredNumber = prompt("Enter a number:");
        enteredNumber = Number(enteredNumber);

        if (enteredNumber > previousNumber) {
            document.writeln(enteredNumber + " is bigger than " + previousNumber);
            previousNumber = enteredNumber;
        } else if (enteredNumber < previousNumber) {
            document.writeln(enteredNumber + " is smaller than " + previousNumber);
            break;
        } else {
            document.writeln(enteredNumber + " is equal to " + previousNumber);
            break;
        }
    }
    
    // Final display message
    document.writeln("Good bye!");
}