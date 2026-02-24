function part03() {
    "use strict";

    // Declare constants
    const DAYS_IN_YEAR = 365;
    const AVERAGE_DAYS_IN_MONTH = 30.4;

    // Declare Variables
    let ageYears;
    let remainingMonths;
    let ageDays;

    // Variable assignment (prompt user)
    ageYears = Number(prompt("Enter your age in years as a whole number:"));
    remainingMonths = Number(prompt("Enter the remaining months of your age:"));

    // Calculate the age in days
    ageDays = (ageYears * DAYS_IN_YEAR) + (AVERAGE_DAYS_IN_MONTH * remainingMonths);

    // Display the starting age and the age in days
    document.writeln("You are " + ageYears + " years and " + remainingMonths + " months old.");
    document.writeln("That's " + ageDays + " days! Wow!");
}