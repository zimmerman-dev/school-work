function lab02() {
    "use strict";

    // Constant declaration
    const LOOP_MAXIMUM = 5;
    const INITIAL_LOOP_VALUE = 0;

    // Variable declaration
    let loopCounter;
    let userString;

    // Loop Section
    for (loopCounter = INITIAL_LOOP_VALUE; loopCounter < LOOP_MAXIMUM; loopCounter++) {

        // Prompt user for string each loop
        userString = prompt("Enter a string:");

        // Display statement for each loop
        document.writeln("You entered: " + userString);
    }
}