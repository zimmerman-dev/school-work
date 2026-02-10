function part04() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let stringOne;
    let stringTwo;
    let stringThree;
    let stringFour;
    let stringFive;
    let lengthTotal;

    // Prompt user for strings, return values stored to input variables

    alert("You will be prompted five times for different strings.");
    stringOne = prompt("Enter string one:");
    stringTwo = prompt("Enter string two:");
    stringThree = prompt("Enter string three:");
    stringFour = prompt("Enter string four:");
    stringFive = prompt("Enter string five:");

    // Display the output values from output variables
    
    document.writeln("Length: " + stringOne.length + ", \"" + stringOne + "\"");
    lengthTotal = stringOne.length;
    document.writeln("Length: " + stringTwo.length + ", \"" + stringTwo + "\"");
    lengthTotal += stringTwo.length;
    document.writeln("Length: " + stringThree.length 
        + ", \"" + stringThree + "\"");
    lengthTotal += stringThree.length;
    document.writeln("Length: " + stringFour.length 
        + ", \"" + stringFour + "\"");
    lengthTotal += stringFour.length;
    document.writeln("Length: " + stringFive.length 
        + ", \"" + stringFive + "\"");
    lengthTotal += stringFive.length;
    document.writeln("------------------");
    document.writeln("total: " + lengthTotal);  
}