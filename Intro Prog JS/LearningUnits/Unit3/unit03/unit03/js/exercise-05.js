function exercise05Part1() {
    "use strict";
    // Const Declaration
    const ERROR_MESSAGE = "Input Error. Try again.";

    // Variable Declaration
    let userNumOne;
    let userNumTwo;
    let outputMessage;

    // Prompt User
    userNumOne = prompt("Enter a number:");

    // Validate userNumOne
    if (userNumOne === null || userNumOne.length <= 0 || !isNumeric(userNumOne)) {
        alert(ERROR_MESSAGE);
    }

    // Prompt User
    userNumTwo = prompt("Enter another number:");

    // Validate userNumTwo
    if (userNumTwo === null || userNumTwo.length <= 0 || !isNumeric(userNumTwo)) {
        alert(ERROR_MESSAGE);
    }

    userNumOne = Number(userNumOne);
    userNumTwo = Number(userNumTwo);

    // Logic
    if (userNumOne >= userNumTwo) {
        outputMessage = userNumOne + " is greater than or equal to " + userNumTwo;
    } else {
        outputMessage = userNumOne + " is less than " + userNumTwo;
    }

    // Display
    document.writeln(outputMessage);
}

function exercise05Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Delete this line before starting (for testing purposes)
    document.write("Exercise for lab 5, Part 2");
}
