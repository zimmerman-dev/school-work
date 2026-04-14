function lab05Part01() {
    "use strict";

    // Variable Declarations
    let loopCounter;
    let maximumLoop;
    let total;

    // Variable Assignment
    loopCounter = 1;
    total = 0;

    maximumLoop = prompt("How many times should the loop execute:");
    maximumLoop = Number(maximumLoop);

    // Processing Section
    while (loopCounter <= maximumLoop) {
        total += loopCounter;
        document.writeln("In loop " + loopCounter + " the total is " + total + ".");
        loopCounter++;     
    }

    // Final Display
    document.writeln("\nThe final total is " + total + ".");
}

function lab05Part02() {
    "use strict";

    // Constant Declarations
    const LOOP_MAXIMUM = 20;
    const MULTIPLIER = 7;
    
    // Variable Declarations
    let loopCounter;
    let product;

    // Variable Assignment
    loopCounter = 1;

    // Looping Section
    while (loopCounter <= LOOP_MAXIMUM) {
        product = loopCounter * MULTIPLIER;
        document.writeln(MULTIPLIER + " x " + loopCounter + " = " + product);
        loopCounter++;
    }
}
