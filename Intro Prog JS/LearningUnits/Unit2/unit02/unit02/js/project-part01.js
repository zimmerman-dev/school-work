function part01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    //-------------------------------------------------------------------------------
    // The purpose of this program is take in from the viewer an investment amount
    // (the principle) and an annual interest rate (expressed as a percentage).
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

    // Declare all variables
    let principle;                        // will receive content from user
    let annualInterestPercentage;         // will receive content from user
    let annualInterestDecimalFormat;      // calculated within program
    let interestEarned                    // calculated within the program
    let principleWithAnnualEarnings       // calculated within the program

    // Obtain investment amount and interest rate
    principle = prompt("Enter the investment amount"
            + "\n\t- Use no dollar signs nor commas"
            + "\n\t- Example, for ten thousand dollars, enter 10000.00");
    annualInterestPercentage = prompt("Enter the annual interest rate"
            + "\n\t- Example: if rate is 5.3%, enter 5.3");

    // Convert invested amount and interest rate to numeric format
    principle                = Number(principle);
    annualInterestPercentage = Number(annualInterestPercenteage);


    // Convert interest percentage to decimal form
    annualInterestDecimalFormat = annualInterestPercentage / 100;


    // Calculate interest earned in one year
    interestEarned = principle * annualInterstDecimalFormat;

    // Calculate New Principle Amount now with annual earnings
    principleWithAnnualEarnings = principle + interestEarned;


    // Display initial principle, interest rate, earned interest, and new principle
    document.write("Results of your Investment Scenario are shown below");
    document.write("<br />");
    document.write("-------------------------------------------");
    document.write("<br /><br />");
    document.write("If you invested $"
            + principle
            + " at an annual rate of "
            + annualInterestPercentage
            + "%, then you would earn $"
            + interestEarned
            + " in one year.");
    document.write("<br />);
    document.write("You would then have a total of $"
            + principleWithAnnualEarnings
            + " at the end of the year!");
    document.write("<br />");
    
}