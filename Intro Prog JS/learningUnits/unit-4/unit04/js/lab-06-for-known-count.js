function lab06Part01() {
    "use strict";

    // Variable Declaration
    let loopCounter;
    let maximumLoop;
    let total;

    // Variable Assignment
    total = 0;

    // Processing Section
    maximumLoop = prompt("How many times should the loop execute:");
    maximumLoop = Number(maximumLoop);

    // Loop Section
    for (loopCounter = 1; loopCounter <= maximumLoop; loopCounter++) {
        total += loopCounter;
        document.writeln("In loop " + loopCounter + " the total is " + total + ".");
    }
    document.writeln("\nThe final total is " + total + ".");
    
}

function lab06Part02() {
    "use strict";

    // Constant Declaration
    const DIVISOR = 1000;
    const MAXIMUM_LOOP_COUNT = 100;

    // Variable Declaration
    let loopCounter;
    let quotient;

    // Looping Section
    for (loopCounter = 1; loopCounter <= MAXIMUM_LOOP_COUNT; loopCounter++) {
        quotient = DIVISOR / loopCounter;
        document.writeln(DIVISOR + " / " + loopCounter + " = " + quotient);
    }
}