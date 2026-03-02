function exercise03Part1() {
    "use strict";

    // Constant Declaration
    const BOUNDS_CHECK = 100;
    const ERROR_MESSAGE = "Input Error... Try again!";
    
    // Variable Declaration
    let userNumber;
    let outputMessageOne;
    let outputMessageTwo;
    let outputMessageThree;
    let outputMessageFour;

    // Variable Assignment (Prompt user)
    userNumber = prompt("Enter a number:");

    // Validation
    if (userNumber === null || userNumber.length <= 0 || !isNumeric(userNumber)) {
        alert(ERROR_MESSAGE);
        return;
    }

    userNumber = Number(userNumber);

    // Calculations - One
    if (userNumber % 2 === 0) {
        outputMessageOne = "- is an even number.";
    } else {
        outputMessageOne = "- is an odd number.";
    }

    // Calculations - Two
    if (userNumber > BOUNDS_CHECK) {
        outputMessageTwo = "- is greater than 100.";
    } else if (userNumber < BOUNDS_CHECK) {
        outputMessageTwo = "- is less than 100.";
    } else {
        outputMessageTwo = "- is equal to 100.";
    }

    // Calculations - Three
    if (userNumber > 0) {
        outputMessageThree = "- is a positive number.";
    } else if (userNumber < 0) {
        outputMessageThree = "- is a negative number.";
    } else {
        outputMessageThree = "- is equal to 0.";
    }

    // Calculations - Four
    if (userNumber !== 1991) {
        outputMessageFour = "- is not the year of my birth.";
    } else {
        outputMessageFour = "- is the year of my birth.";
    }

    // Display messages
    document.writeln("The number " + userNumber);
    document.writeln(outputMessageOne);
    document.writeln(outputMessageTwo);
    document.writeln(outputMessageThree);
    document.writeln(outputMessageFour);
}

function exercise03Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Delete this line before starting (for testing purposes)
    document.write("Exercise for lab 3, Part 2");
}
