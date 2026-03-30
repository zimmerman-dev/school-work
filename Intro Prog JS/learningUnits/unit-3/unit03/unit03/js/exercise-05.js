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
    userNumTwo = prompt("Enter another number:");

    // Validate userNumOne
    if (userNumOne === null || userNumOne.length <= 0
        || !isNumeric(userNumOne) || userNumTwo === null
        || userNumTwo.length <= 0 || !isNumeric(userNumTwo)) {
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
    // Const Declaration
    const ERROR_MESSAGE = "Input Error. Try again.";
    const USER_NAME = "john";

    // Variable Declaration
    let queriedName;
    let outputMessage;

    // Prompt for name
    queriedName = prompt("Enter a name:");

    // validation
    if (queriedName === null || queriedName.length <= 0 || isNumeric(queriedName)) {
        alert(ERROR_MESSAGE);
        return;
    }

    queriedName = queriedName.toLowerCase();

    // Logic
    if (queriedName === USER_NAME) {
        outputMessage = "That's my name!";
    } else {
        outputMessage = "That's not my name.";
    }

    // Display message
    document.writeln(outputMessage);

}
