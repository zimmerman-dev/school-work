function lab01() {
    "use strict";

    // Variable Declaration
    let time;
    let distance;
    let pace;

    // Prompt user for values for time and distance variables                             
    time = prompt("How long did you walk/run for (in hours)?");
    distance = prompt("How far did you walk/run (in miles).");

    time = Number(time);
    distance = Number(distance);

    // Calculate pace by dividing time by distance
    pace = distance / time;

    // Display pace
    document.writeln("Your pace was " + pace + " mph!");
}