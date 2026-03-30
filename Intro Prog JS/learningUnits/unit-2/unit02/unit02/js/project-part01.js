function part01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    //-------------------------------------------------------------------------------
    // The purpose of this program is take in from the viewer an investment amount
    // (the principal) and an annual interest rate (expressed as a percentage).
    // It then calculates the amount of interest that would be earned, and the total
    // amount the viewer would then have at the end of the year after the interest
    // earnings had been added to the original investment amount.
    //
    // The results are then to be displayed in the format as shown in to sample output.
    //
    //
    // The program assumes the interest is credited only at the end of the year, and
    // doesn't need to consider taxes nor inflation.  It also assumes that the viewer
    // did enter numbers for the two inputs--no need to guard against the situation in
    // which the viewer does not enter numbers.  Also, there is no need to round anything
    // in this program.
    //--------------------------------------------------------------------------------

    // Declare Constants
    const PERCENT_DIVISOR = 100;           // constant for converting percents to decimals

    // Declare all variables
    let principal;                         // will receive content from user
    let annualInterestPercentage;          // will receive content from user
    let annualInterestDecimalFormat;       // calculated within program
    let interestEarned;                    // calculated within the program
    let principalWithAnnualEarnings;       // calculated within the program

    // Obtain investment amount and interest rate
    principal = prompt("Enter the investment amount"
            + "\n\t- Use no dollar signs nor commas"
            + "\n\t- Example, for ten thousand dollars, enter 10000.00");
    annualInterestPercentage = prompt("Enter the annual interest rate"
            + "\n\t- Example: if rate is 5.3%, enter 5.3");

    // Convert invested amount and interest rate to numeric format
    principal = Number(principal);
    annualInterestPercentage = Number(annualInterestPercentage);

    // Convert interest percentage to decimal form
    annualInterestDecimalFormat = annualInterestPercentage / PERCENT_DIVISOR;

    // Calculate interest earned in one year
    interestEarned = principal * annualInterestDecimalFormat;

    // Calculate New principal Amount now with annual earnings
    principalWithAnnualEarnings = principal + interestEarned;

    // Display initial principal, interest rate, earned interest, and new principal
    document.write("Results of your Investment Scenario are shown below");
    document.write("<br />");
    document.write("--------------------------------------------------");
    document.write("<br /><br />");
    document.write("If you invested $"
            + principal
            + " at an annual rate of "
            + annualInterestPercentage
            + "%, then you would earn $"
            + interestEarned
            + " in one year.");
    document.write("<br />");
    document.write("You would then have a total of $"
            + principalWithAnnualEarnings
            + " at the end of the year!");
    document.write("<br />");
}