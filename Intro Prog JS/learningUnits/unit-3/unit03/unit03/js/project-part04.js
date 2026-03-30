function part04() {
    "use strict";

    // Const Declaration
    const BUILDING_COST_LOWER_THRESHOLD = 5000;
    const BUILDING_COST_UPPER_THRESHOLD = 80000;
    const BUILDING_COST_INITIAL_RATE = 0.08;
    const REMAINDER_RATE_LOWER = 0.025;
    const REMAINDER_RATE_UPPER = 0.03;
    const ERROR_MESSAGE = "Input Error! Try again...";

    // Variable Declaration
    let buildingCost;
    let buildingCostRemainder;
    let totalFee;
    let initialFee;
    let extraFee;

    // Prompt user and variable assignment
    buildingCost = prompt("Enter the total cost of the building:");

    if (buildingCost === null 
        || buildingCost.length <= 0 
        || !isNumeric(buildingCost) 
        || Number(buildingCost) <= 0) {
            alert(ERROR_MESSAGE);
            return;
        }

    buildingCost = Number(buildingCost);

    buildingCostRemainder = buildingCost - BUILDING_COST_LOWER_THRESHOLD;

    // Logic calculations
    if (buildingCost <= BUILDING_COST_LOWER_THRESHOLD) {
        initialFee = buildingCost * BUILDING_COST_INITIAL_RATE;
        extraFee = 0;
    
    } else if (buildingCost > BUILDING_COST_LOWER_THRESHOLD && buildingCostRemainder <= BUILDING_COST_UPPER_THRESHOLD) {
        initialFee = BUILDING_COST_LOWER_THRESHOLD * BUILDING_COST_INITIAL_RATE;
        extraFee = buildingCostRemainder * REMAINDER_RATE_UPPER;

    } else {
        initialFee = BUILDING_COST_LOWER_THRESHOLD * BUILDING_COST_INITIAL_RATE;
        extraFee = buildingCostRemainder * REMAINDER_RATE_LOWER;
    }

    // Sum the total architects fee
    totalFee = initialFee + extraFee;

    // Display building cost and architects fee
    document.writeln("For a building that costs $" + buildingCost 
        + ", the architect's fee will be $" + totalFee.toFixed(2) + "."); 
}