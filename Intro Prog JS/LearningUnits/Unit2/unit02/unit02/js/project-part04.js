function part04() {
    "use strict";

    // Constant Declarations
    const RATE_10_PERCENT = 0.10;
    const RATE_12_5_PERCENT = 0.125;
    const RATE_15_PERCENT = 0.15;
    const RATE_17_5_PERCENT = 0.175;
    const RATE_20_PERCENT = 0.20;
    
    // Variable Declarations
    let mealCost;
    let mealTip10Percent;
    let mealTip12Point5Percent;
    let mealTip15Percent;
    let mealTip17Point5Percent;
    let mealTip20Percent;
    let subtotal10Percent;
    let subtotal12Point5Percent;
    let subtotal15Percent;
    let subtotal17Point5Percent;
    let subtotal20Percent;

    // Prompt user for meal cost
    mealCost = Number(prompt("Enter the total cost of meal:"));

    // Calculate for tips
    mealTip10Percent = mealCost * RATE_10_PERCENT;
    mealTip12Point5Percent = mealCost * RATE_12_5_PERCENT;
    mealTip15Percent = mealCost * RATE_15_PERCENT;
    mealTip17Point5Percent = mealCost * RATE_17_5_PERCENT;
    mealTip20Percent = mealCost * RATE_20_PERCENT;

    // Calculate subtotals
    subtotal10Percent = mealCost + mealTip10Percent;
    subtotal12Point5Percent = mealCost + mealTip12Point5Percent;
    subtotal15Percent = mealCost + mealTip15Percent;
    subtotal17Point5Percent = mealCost + mealTip17Point5Percent;
    subtotal20Percent = mealCost + mealTip20Percent;

    // Display the meal cost, tips, and subtotals
    document.writeln("Cost of meal: $" + mealCost);
    document.writeln();
    document.writeln("Tip %\t   Tip\t    Final Cost");
    document.writeln("==============================");
    
    document.writeln("10%\t   $" 
        + mealTip10Percent.toFixed(2) 
        + "\t$" 
        + subtotal10Percent.toFixed(2));

    document.writeln("12.5%\t   $" 
        + mealTip12Point5Percent.toFixed(2) 
        + "\t$" 
        + subtotal12Point5Percent.toFixed(2));

    document.writeln("15%\t   $" 
        + mealTip15Percent.toFixed(2) 
        + "\t$" 
        + subtotal15Percent.toFixed(2));

    document.writeln("17.5%\t   $" 
        + mealTip17Point5Percent.toFixed(2) 
        + "\t$" 
        + subtotal17Point5Percent.toFixed(2));
        
    document.writeln("20%\t   $" 
        + mealTip20Percent.toFixed(2) 
        + "\t$" 
        + subtotal20Percent.toFixed(2));
}