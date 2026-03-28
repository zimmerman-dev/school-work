function lab01() {
    "use strict";

    // Const declaration
    const LOOP_MAXIMUM = 5;
    const INITIAL_LOOP_VALUE = 0;
    
    // Variable declaration
    let loopCounter;
    let userString;

    // Assignment Section
    loopCounter = INITIAL_LOOP_VALUE;

    // Loop processing
    while (loopCounter < LOOP_MAXIMUM) {

        // Prompt user for string
        userString = prompt("Enter string:");

        // Display string content for each loop
        document.writeln("You entered: " + userString);

        // loop count increments every loop iteration
        loopCounter++;
    }
}