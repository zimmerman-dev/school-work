function exercise06Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let myString;

    // Prompt user, it's return value gets stored

    myString = prompt("Write a test sentence: ");

    // Ouput to DOM

    document.writeln("The text you entered was:");
    document.writeln("\"" + myString + "\"");
}

function exercise06Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let myStringOne;
    let myStringTwo;

    // Prompt user, return value is stored in var

    myStringOne = prompt("Enter some text:");
    myStringTwo = prompt("Enter some more text:");

    // Output to DOM

    document.writeln("Your entered text was: \"" 
        + myStringOne + "\" and \""
        + myStringTwo + "\"");
}
function exercise06Part3() {
    "use strict";
    // PART 3: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration
    
    let firstName;
    let lastName;
    let dogName;

    // Prompt user, assign return values to variables

    firstName = prompt("Enter your first name:");
    lastName = prompt("Enter your last name");
    dogName = prompt("Enter your dog's name:");

    // output to DOM

    document.writeln(firstName + " " + lastName + "'s"
        + " dog is named, \"" + dogName + "\".");

    // Line Break
    document.writeln();
    // Or

    // String interpolation :)
    document.writeln(`${firstName} ${lastName}'s dog is named, "${dogName}".`);

}
