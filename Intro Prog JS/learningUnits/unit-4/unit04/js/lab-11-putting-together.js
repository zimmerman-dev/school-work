
/*
    The purpose of this function is to run lab 11 part 1
*/
function lab11Part01() {
    "use strict";

    initializeForLooping();

    while (loopCounter < NUMBER_TIMES_TO_LOOP)  {
        obtainNumberFromUser();
        displayNumberOnWebPage();

        if (userEnteredNumber > 0)  {
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

/*
    The purpose of this function is to run lab 11 part 2
*/
function lab11Part02() {
    "use strict";

    assignInitialValuesToVariables();

    records = openEmployeePayrollRecords();

    while ( records.readNextRecord() ) {
        counter++;
        hourlyWage = records.getEmployeeHourlyWage();
        grandSumHourlyWages += hourlyWage;

        if (hourlyWage < minimumHourlyWage) {
            minimumHourlyWage = hourlyWage;
        }

        // here write the IF to handle max hourly wage

    }

    calculateAverageHourlyWage();

    displayMinimumMaximumAverageHourlyWage();
    
}