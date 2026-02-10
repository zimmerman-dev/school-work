function part03() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let containerOne;
    let containerTwo;
    let containerThree;

    // Prompt user for flower names, return values get stored into containers

    containerOne = prompt("Enter a flower name: ");
    containerTwo = prompt("Enter another flower name: ");

    // Output the entered values from prompt()

    document.writeln("Strings as entered:");
    document.writeln("containerOne: " + containerOne);
    document.writeln("containertwo: " + containerTwo);
    document.writeln(""); // empty line

    // Value-switch

    containerThree = containerOne;
    containerOne = containerTwo;
    containerTwo = containerThree;

    // Output the values switched

    document.writeln("Switched strings:");
    document.writeln("containerOne: " + containerOne);
    document.writeln("containerTwo: " + containerTwo);
}