function exercise06Part1() {
    "use strict";
    // Constant Declaration
    const COUNTY_CHECK_DANE = "dane";
    const COUNTY_CHECK_SAUK = "sauk";
    const ERROR_MESSAGE = "Input Error. Try again.";
    
    // Variable Declaration
    let queriedCounty;
    let outputMessage;
    
    // Prompt user
    queriedCounty = prompt("Enter what county you are from:");

    // Validate
    if (queriedCounty === null || queriedCounty.length <= 0 || isNumeric(queriedCounty)) {
        alert(ERROR_MESSAGE);
        return;
    }

    queriedCounty = queriedCounty.toLowerCase();

    // Logic for county check
    if (queriedCounty === COUNTY_CHECK_DANE || queriedCounty === COUNTY_CHECK_SAUK) {
        outputMessage = "Hello, please donate to the park cleanup fund.";
    } else {
        outputMessage = "Hello, welcome to the county.";
    }

    // Display output message
    document.writeln(outputMessage);

}

function exercise06Part2() {
    "use strict";
    // Constant Declaration
    const ERROR_MESSAGE = "Input Error. Please try again.";
    const BOUNDS_CHECK = 5;
    const CHAR_CHECK_A = "A";
    const CHAR_CHECK_B = "B";

    // Variable Declaration
    let queriedNum;
    let queriedChar;
    let outputMessage;

    // Prompt user
    queriedNum = prompt("Enter a number:");
    queriedChar = prompt("Enter a letter:");

    // Validate
    if (queriedChar === null 
        || queriedChar <= 0 
        || isNumeric(queriedChar)
        
        || queriedNum === null 
        || queriedNum.length <= 0 
        || !isNumeric(queriedNum)) {
        alert(ERROR_MESSAGE);
        return;
    }

    queriedChar = queriedChar.toUpperCase();
    queriedNum = Number(queriedNum);

    // Logic
    if ((queriedChar === CHAR_CHECK_A || queriedChar === CHAR_CHECK_B) 
        && queriedNum < BOUNDS_CHECK) {
        outputMessage = queriedNum + " and " 
        + queriedChar + " are correct";
    } else {
        outputMessage = queriedNum + " and " 
        + queriedChar + " are not correct. Please try again";
    }

    // Display message
    document.writeln(outputMessage);
}

