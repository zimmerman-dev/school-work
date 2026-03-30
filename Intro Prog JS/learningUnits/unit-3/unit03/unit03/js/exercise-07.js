function exercise07Part1() {
    "use strict";
    // Constant Declaration
    const ERROR_MESSAGE = "Input error, try again!";

    // Variable Declaration
    let numberOfChildren;
    let numberOfRoom;
    let outputFactor;

    // Prompt User
    numberOfChildren = prompt("How many kids did you grow up with in your house:");
    numberOfRoom = prompt("How many rooms did you have in your house");

    // Validate
    if (numberOfChildren === null
        || numberOfChildren.length <= 0
        || !isNumeric(numberOfChildren) 
        || numberOfRoom === null 
        || numberOfRoom.length <= 0 
        || !isNumeric(numberOfRoom)) {
        alert(ERROR_MESSAGE);
        return;
    }

    numberOfChildren = Number(numberOfChildren);
    numberOfRoom = Number(numberOfRoom);

    // Logic
    if (numberOfChildren === 1) {
        if (numberOfRoom === 1) {
            outputFactor = "lucky";
        } else if (numberOfRoom === 2) {
            outputFactor = "spacious";
        } else if (numberOfRoom >= 3) {
            outputFactor = "empty feeling";
        } else {
            alert(ERROR_MESSAGE);
            return;
        }
    } else if (numberOfChildren === 2) {
        if (numberOfRoom === 1) {
            outputFactor = "cozy";
        } else if (numberOfRoom === 2) {
            outputFactor = "lucky";
        } else if (numberOfRoom >= 3) {
            outputFactor = "spacious";
        } else {
            alert(ERROR_MESSAGE);
            return;            
        }
    } else if (numberOfChildren >= 3) {
        if (numberOfRoom === 1) {
            outputFactor = "crowded";
        } else if (numberOfRoom === 2) {
            outputFactor = "cozy";
        } else if (numberOfRoom >= 3) {
            outputFactor = "lucky";
        } else {
            alert(ERROR_MESSAGE);
            return;
        }
    } else {
        alert(ERROR_MESSAGE);
        return;
    }

    // Display
    document.writeln("With " + numberOfChildren + " Kids and " 
        + numberOfRoom + " bedrooms, you must feel " 
        + outputFactor + "!");
}

function exercise07Part2() {
    "use strict";
    // Constant Declaration
    const ERROR_MESSAGE = "Input error, try again!";
    const WEIGHT_TIER_1 = 2.25;
    const WEIGHT_TIER_2 = 3.50;
    const WEIGHT_TIER_3 = 5.00;
    const WEIGHT_TIER_4 = 7.50;
    const WEIGHT_TIER_5 = 10.00;

    // Variable Declaration
    let packageWeight;
    let outputFactor;

    // Prompt user
    packageWeight = prompt("Enter a package weight:");
    
    // Validate
    if (packageWeight === null || packageWeight.length <= 0 || !isNumeric(packageWeight)) {
        alert(ERROR_MESSAGE);
        return;
    }

    packageWeight = Number(packageWeight);
    
    // Logic
    if (packageWeight <= 2) {
        outputFactor = WEIGHT_TIER_1;
    } else if (packageWeight <= 5) {
        outputFactor = WEIGHT_TIER_2;
    } else if (packageWeight <= 10) {
        outputFactor = WEIGHT_TIER_3;
    } else if (packageWeight <= 20) {
        outputFactor = WEIGHT_TIER_4;
    } else if (packageWeight > 20) {
        outputFactor = WEIGHT_TIER_5;
    } else {
        alert(ERROR_MESSAGE);
        return;
    }

    outputFactor = outputFactor.toFixed(2);

    // Display
    document.writeln("Your package that weighs " + packageWeight 
        + " lbs. will cost $" + outputFactor + " to ship.");
}