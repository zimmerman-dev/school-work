function part03() {
    "use strict";

    // Variable Declaration
    let flowerPotOne;
    let flowerPotTwo;
    let temporaryPlanter;

    // Prompt user for two flower names
    flowerPotOne = prompt("What's in your first flower pot?");
    flowerPotTwo = prompt("What's in your second flower pot?");

    // Display the flowers before swapping
    document.writeln("Strings as entered:");
    document.writeln("flowerPotOne: " + flowerPotOne);
    document.writeln("flowerPotTwo: " + flowerPotTwo);
    document.writeln(""); // empty line for space

    // swap values around using the tempororyPlanter
    temporaryPlanter = flowerPotOne;
    flowerPotOne = flowerPotTwo;
    flowerPotTwo = temporaryPlanter;

    // Display switched values without moving the variables. 
    document.writeln("Switched strings:");
    document.writeln("flowerPotOne: " + flowerPotOne);
    document.writeln("flowerPotTwo: " + flowerPotTwo);
}