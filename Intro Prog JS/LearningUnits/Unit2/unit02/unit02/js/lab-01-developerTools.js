function lab01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let time;
    let distance;
    let pace;

    // Prompt user, return values stored in variables

    time = prompt("How long did you walk/run for (in hours)?");
    distance = prompt("How far did you walk/run (in miles).")

    // Explicit conversion

    time = Number(time);
    distance = Number(distance);

    // Calculate mph and assign to pace

    pace = distance / time;

    // Output to DOM

    document.writeln("Your pace was " + pace + " mph!");

    // END OF YOUR CODE

}