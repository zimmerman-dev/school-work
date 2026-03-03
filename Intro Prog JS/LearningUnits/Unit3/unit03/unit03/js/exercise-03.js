function exercise03Part1() {
    "use strict";

    // Constant Declaration
    const BOUNDS_CHECK = 100;
    const ERROR_MESSAGE = "Input Error... Try again!";
    
    // Variable Declaration
    let userNumber;
    let outputMessage;

    // Variable Assignment (Prompt user)
    userNumber = prompt("Enter a number:");

    // Validation
    if (userNumber === null || userNumber.length <= 0 || isNaN(userNumber)) {
        alert(ERROR_MESSAGE);
        return;
    }

    userNumber = Number(userNumber);

    // Logic - One
    if (userNumber % 2 === 0) {
        outputMessage = "\n- is an even number.\n";
    } else {
        outputMessage = "\n- is an odd number.\n";
    }

    // Logic - Two
    if (userNumber > BOUNDS_CHECK) {
        outputMessage += "- is greater than 100.\n";
    } else if (userNumber < BOUNDS_CHECK) {
        outputMessage += "- is less than 100.\n";
    } else {
        outputMessage += "- is equal to 100.\n";
    }

    // Logic - Three
    if (userNumber > 0) {
        outputMessage += "- is a positive number.\n";
    } else if (userNumber < 0) {
        outputMessage += "- is a negative number.\n";
    } else {
        outputMessage += "- is equal to 0.\n";
    }

    // Logic - Four
    if (userNumber !== 1991) {
        outputMessage += "- is not the year of my birth.";
    } else {
        outputMessage += "- is the year of my birth.";
    }

    // Display message
    document.writeln("The number " + userNumber + outputMessage);
}

function exercise03Part2() {
    "use strict";

    // Constant Declarations
    const BOUNDS_CHECK = 10;
    const LOWER_BOUNDS = "Algebra";
    const UPPER_BOUNDS = "Singularity";
    const UPPERCASE_CHECK_MIN = "A";
    const UPPERCASE_CHECK_MAX = "Z";
    const LOWERCASE_CHECK_MIN = "a";
    const LOWERCASE_CHECK_MAX = "z";
    const ERROR_MESSAGE = "Input Error... Try again!";

    // Variable Declaration
    let userString;
    let outputMessage;

    // Variable Assignment
    userString = prompt("Enter a single word:");

    // Validation
    if (userString === null || userString.length <= 0 || !isNaN(userString)) {
        alert(ERROR_MESSAGE);
        return;
    }

    // Logic - One
    if (userString.length > BOUNDS_CHECK) {
        outputMessage = "\n- has a length that is greater than 10.\n";
    } else if (userString.length < BOUNDS_CHECK) {
        outputMessage = "\n- has a length that is less than 10.\n";
    } else {
        outputMessage = "\n- has a length of 10.\n";
    }

    // Logic - Two
    if (userString > LOWER_BOUNDS) {
        outputMessage += "- is greater than the word, \"" + LOWER_BOUNDS + "\".\n";
    } else if (userString < LOWER_BOUNDS) {
        outputMessage += "- is less than the word, \"" + LOWER_BOUNDS + "\".\n";
    } else {
        outputMessage += "- is the word \"" + LOWER_BOUNDS + "\".\n";
    }

    // Logic - Three
    if (userString > UPPER_BOUNDS) {
        outputMessage += "- is greater than the word, \"" + UPPER_BOUNDS + "\".\n";
    } else if (userString < UPPER_BOUNDS) {
        outputMessage += "- is less than the word, \"" + UPPER_BOUNDS + "\".\n";
    } else {
        outputMessage += "- is the word, \"" + UPPER_BOUNDS + "\".\n";
    }

    // Logic - Four
    if (userString >= UPPERCASE_CHECK_MIN && userString <= UPPERCASE_CHECK_MAX) {
        outputMessage += "- starts with an uppercase letter";
    } else if (userString >= LOWERCASE_CHECK_MIN && userString <= LOWERCASE_CHECK_MAX) {
        outputMessage += "- starts with a lowercase letter";
    } else {
        outputMessage += "- starts with a character that isn't a letter";
    }

    // Display
    document.writeln("The word, \"" + userString + "\"" + outputMessage);
}
