/*
This is file /unit04/knownLoopCount.js
It contains the JavaScript code for

"Looping with a known loop count"
File: /unit04/knownLoopCount.html
*/
function knownLoopCount() {
    "use strict";

    // Your code goes in here.

    document.write("The JavaScript file for this page is: "
            + "\"unit4/unit04/jsFiles/knownLoopCount.js\"");
}

/*
This function is in file /unit04/knownLoopCount.js
It loops five times with a while loop
*/
function whileFiveTimes() {
    "use strict";


    // Declare Constants
    const INITIAL_VALUE = 0;
    const LOOP_LIMIT = 5;

    // Declare Variables
    let counter;

    // Initialize the counter
    counter = INITIAL_VALUE;

    while (counter < LOOP_LIMIT) {
        document.write("This is loop number: " + counter + "<br />");
        counter++;
    }
}

/*
This function is in file /unit04/knownLoopCount.js
It loops five times with a for loop
*/
function forFiveTimes() {
    "use strict";


    // Declare Constants
    const INITIAL_VALUE = 0;
    const LOOP_LIMIT = 5;

    // Declare Variables
    let counter;

    for (counter = INITIAL_VALUE; counter < LOOP_LIMIT; counter++) {
        document.write("This is loop number: " + counter + "<br />");
    }
}
