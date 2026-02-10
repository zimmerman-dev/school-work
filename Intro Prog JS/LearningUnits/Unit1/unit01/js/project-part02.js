function part02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let adjective;
    let location;
    let nickName;
    let color;

    // Prompt user, return values store to input variables

    adjective = prompt("Enter an adjective:");
    location = prompt("Enter a location:");
    nickName = prompt("Enter a silly nick-name:");
    color = prompt("Enter a color:");

    // Change strings to uppercase

    adjective = adjective.toUpperCase();
    location = location.toUpperCase();
    nickName = nickName.toUpperCase();
    color = color.toUpperCase();

    // Display madlib with values from output variables

    document.writeln("Last night I walked into a " 
        + adjective + " building near the " + location 
        + ".\nIt was a dive bar called, \"" + nickName 
        + "'s,\" and it had a " + color 
        + "\ndoor with bullet holes in it. It was a crazy night.");
}
