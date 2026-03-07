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
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Delete this line before starting (for testing purposes)
    document.write("Exercise for lab 6, Part 2");
}

