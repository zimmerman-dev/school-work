function exercise04Part1() {
    "use strict";
    // Declare Constant
    const ERROR_MESSAGE = "Not a number. Try again!";
    // Declare Variables
    let userNumOne;
    let userNumTwo;
    let outputMessage;

    // Prompt for first number
    userNumOne = prompt("Enter a number:");

    // Validate
    if (userNumOne === null || userNumOne.length <= 0 || !isNumeric(userNumOne)) {
        alert(ERROR_MESSAGE);
        return;
    }

    // Prompt for second number
    userNumTwo = prompt("Enter another number:");

    // Validate
    if (userNumTwo === null || userNumTwo.length <= 0 || !isNumeric(userNumTwo)) {
        alert(ERROR_MESSAGE);
        return;
    }

    userNumOne = Number(userNumOne);
    userNumTwo = Number(userNumTwo);

    // Logic
    if (userNumOne > userNumTwo) {
        outputMessage = "The number " + userNumOne + " is bigger than " 
        + userNumTwo + ".";
    }
    
    if (userNumOne < userNumTwo) {
        outputMessage = "The number " + userNumOne + " is smaller than " 
        + userNumTwo + ".";
    }
    
    if (userNumOne === userNumTwo) {
        outputMessage = userNumOne + " and " + userNumTwo + " are the same.";
    }

    // Display
    document.writeln(outputMessage);
}

function exercise04Part2() {
    "use strict";
    // Const Declaration 
    const ERROR_MESSAGE = "Input Error. Try again";
    const STRING_CHECK = "Hello";

    // Variable Declaration
    let userString;
    let outputMessage;

    // Prompt user for string
    userString = prompt("Enter a string:");

    // Validate
    if (userString === null || userString.length <= 0 || isNumeric(userString)) {
        alert(ERROR_MESSAGE);
    }

    // Logic
    if (userString === STRING_CHECK) {
        outputMessage = "Hello is the right word.";
    }
    
    if (userString !== STRING_CHECK) {
        outputMessage = "Please try again.";
    }

    // Display outputMessage
    document.writeln(outputMessage);
}
