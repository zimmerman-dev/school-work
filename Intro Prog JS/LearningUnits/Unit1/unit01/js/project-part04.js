function part04() {
    "use strict";

    // Variable Declaration
    let stringOne;
    let stringTwo;
    let stringThree;
    let stringFour;
    let stringFive;
    let lengthTotal;

    // Prompt user for five separate strings
    alert("You will be prompted five times for different strings.");
    stringOne = prompt("Enter string one:");
    stringTwo = prompt("Enter string two:");
    stringThree = prompt("Enter string three:");
    stringFour = prompt("Enter string four:");
    stringFive = prompt("Enter string five:");

    // Calculate string length total
    lengthTotal = stringOne.length + stringTwo.length + stringThree.length 
        + stringFour.length + stringFive.length;

    // Display the length and strings on separate lines, as well as the total length
    document.writeln("Length: " + stringOne.length + ", \"" + stringOne + "\"");
    document.writeln("Length: " + stringTwo.length + ", \"" + stringTwo + "\"");
    document.writeln("Length: " + stringThree.length + ", \"" + stringThree + "\"");
    document.writeln("Length: " + stringFour.length + ", \"" + stringFour + "\"");
    document.writeln("Length: " + stringFive.length + ", \"" + stringFive + "\"");
    document.writeln("------------------");
    document.writeln("total: " + lengthTotal);  
}