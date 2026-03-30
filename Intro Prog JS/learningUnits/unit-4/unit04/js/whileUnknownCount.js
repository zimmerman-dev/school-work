/*
This is file /unit04/whileUnknownCount.js
It contains the JavaScript code for

"A while loop with unknown loop count"
File: /unit04/whileUnknownCount.html
*/
function whileUnknownCount() {
    "use strict";

    // Your code goes in here.

    document.write("The JavaScript file for this page is: " +
        "\"unit4/unit04/jsFiles/whileUnknownCount.js\"");
}

/*
This function is in file /unit04/whileUnknownCount.js
It loops until the user enters "quit"
*/
function askForNumbers() {
    "use strict";


    // Declare Constants
    const INITIAL_VALUE = 0;
    const QUIT_CODE = "quit";

    // Declare Variables
    let number;
    let total;

    // Assign initial values for variables
    total = INITIAL_VALUE;

    while (number !== QUIT_CODE) {
        number = prompt("Enter a number or \"quit\"");

        if (number !== QUIT_CODE) {
            number = Number(number);
            total += number;
            document.write("You entered: " + number + "<br />");
        }
    }

    document.write("Your total is: " + total + "<br />Goodbye!");

}

/*
This function is in file /unit04/whileUnknownCount.js
It loops until the user enters 5
*/
function lookForFive() {
    "use strict";


    // Declare Constants
    const INITIAL_VALUE = 1;
    const QUIT_CODE = "5";

    // Declare Variables
    let number;
    let counter;

    // Assign initial values for variables
    counter = INITIAL_VALUE;

    while (number !== QUIT_CODE) {
        number = prompt("Enter the number " + counter);
        document.write("You entered " + number + "<br />");

        counter++;
    }

    document.write("Bye, bye!");
}

function quickExamScoresExample() {
    "use strict";

    let results;

    results = openStudentExamRecords();

    while (results.readNextRecord()) {
        document.write(results.getStudentName() + ", " +
            results.getStudentScore() + "<br />");
    }
}


/*
Stopping a loop with a comparison
*/
function comparison() {
    "use strict";


    // Declare Constants
    const INITIAL_VALUE = 0;
    const TARGET_NUMBER = 100;

    // Declare Variables
    let enteredNumber;

    // Assign initial values for variables
    enteredNumber = INITIAL_VALUE;

    while (TARGET_NUMBER > enteredNumber) {
        enteredNumber = prompt("Enter a Number Less than" + TARGET_NUMBER);
        enteredNumber = Number(enteredNumber);
        document.write("Entered Number: " + enteredNumber + "<br />");
    }
}


/*
Stopping a loop by comparing characters
*/
function comparisonCharacters() {
    "use strict";


    // Declare Constants
    let QUIT_CODE = "Z";

    // Declare Variables
    let enteredCharacter;

    enteredCharacter = prompt("Enter a letter that is less than 'Z'");

    while (enteredCharacter < QUIT_CODE) {
        document.write(enteredCharacter + " is less than " + QUIT_CODE +
            "<br />");
        enteredCharacter = prompt("Enter a letter that is less than 'Z'");
    }

    document.write(enteredCharacter + " is bigger than " + QUIT_CODE);
}