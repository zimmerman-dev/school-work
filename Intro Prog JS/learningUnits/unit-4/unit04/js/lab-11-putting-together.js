// Global Constants
const NUMBER_TIMES_TO_LOOP = 5;

// Global Variables
let loopCounter;
let sum;
let userEnteredNumber;

// Initialize loop
function initializeForLooping() {
    loopCounter = 0;
    sum = 0;
}

// Prompt user for number
function obtainNumberFromUser() {
    userEnteredNumber = prompt("Enter a number:");
    userEnteredNumber = Number(userEnteredNumber);
}

// Print entered number to screen
function displayNumberOnWebPage() {
    document.writeln("Entered number was: " + userEnteredNumber);
}

// Adding the user entered number to sum
function addPositiveNumberToSum() {
    sum += userEnteredNumber;
}

// Print total
function displayPositiveNumbersSum() {
    document.writeln("Total: " + sum);
}

/*
    The purpose of this function is to run lab 11 part 1
*/
function lab11Part01() {
    "use strict";

    initializeForLooping();

    while (loopCounter < NUMBER_TIMES_TO_LOOP) {
        obtainNumberFromUser();
        displayNumberOnWebPage();

        if (userEnteredNumber > 0) {
            addPositiveNumberToSum();
        }
        loopCounter++;
    }

    displayPositiveNumbersSum();   
}

/*********************************************************
**********************************************************
        Separation comment between Part 1 and Part 2 
**********************************************************
*********************************************************/

// Global Variables
let records;
let hourlyWage;
let counter;
let minimumHourlyWage;
let maximumHourlyWage;
let averageHourlyWage;
let grandSumHourlyWages;

// Function to assign variables
function assignInitialValuesToVariables() {
    counter = 0;
    minimumHourlyWage = Infinity;
    maximumHourlyWage = -Infinity;
    averageHourlyWage = 0;
    grandSumHourlyWages = 0;
}

// Function to calculate average wages
function calculateAverageHourlyWage() {
    averageHourlyWage = grandSumHourlyWages / counter;
    averageHourlyWage = averageHourlyWage.toFixed(2);
}

// Function to display the results
function displayMinimumMaximumAverageHourlyWage() {
    document.writeln("Average Hourly Wage: " + averageHourlyWage);
    document.writeln("Maximum Hourly Wage: " + maximumHourlyWage);
    document.writeln("Minimum Hourly Wage: " + minimumHourlyWage);
}

/*
    The purpose of this function is to run lab 11 part 2
*/
function lab11Part02() {
    "use strict";

    assignInitialValuesToVariables();

    records = openEmployeePayrollRecords();

    while (records.readNextRecord()) {
        counter++;
        hourlyWage = records.getEmployeeHourlyWage();
        grandSumHourlyWages += hourlyWage;

        if (hourlyWage < minimumHourlyWage) {
            minimumHourlyWage = hourlyWage;
        }

        if (hourlyWage > maximumHourlyWage) {
            maximumHourlyWage = hourlyWage;
        }

    }

    calculateAverageHourlyWage();

    displayMinimumMaximumAverageHourlyWage();
    
}