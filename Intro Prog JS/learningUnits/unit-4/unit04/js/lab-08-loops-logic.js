function lab08Part01() {
    "use strict";

    // Const Declaration
    const LOOP_MAXIMUM = 10;
    const NOT_NUMERIC_MESSAGE = "Thats not a number!";

    // Variable Declaration
    let enteredNumber;
    let counter;
    let total;

    // Variable Assignment
    counter = 0;
    total = 0;

    // Looping Section
    while (counter < LOOP_MAXIMUM) {
        enteredNumber = prompt("Enter a number:");
        
        if (isNumeric(enteredNumber)) {
            enteredNumber = Number(enteredNumber);
            total += enteredNumber;
        } else {
            alert(NOT_NUMERIC_MESSAGE);
            break;
        }
        counter++;
    }

    // Display results
    document.writeln("The number of loops: " + counter);
    document.writeln("The total: " + total);
    
}

function lab08Part02() {
    "use strict";

    // Variable Declarations
    let wageFifteen;
    let wageTwenty;
    let wageTwentyFive;
    let wageThirty;
    let hourlyWage;
    let records;

    // Variable Assignments
    wageFifteen = 0;
    wageTwenty = 0;
    wageTwentyFive = 0;
    wageThirty = 0;
    records = openEmployeePayrollRecords();

    // Display Table Header
    document.writeln("Hourly Wage \tCount");

    // Looping section
    while (records.readNextRecord()) {
        hourlyWage = records.getEmployeeHourlyWage();
        hourlyWage = Number(hourlyWage);
        
        if (hourlyWage === 15) {
            wageFifteen++;
        } else if (hourlyWage === 20) {
            wageTwenty++;
        } else if (hourlyWage === 25) {
            wageTwentyFive++;
        } else if (hourlyWage === 30) {
            wageThirty++;
        } 
    }
    // Display Table Contents
    document.writeln(15 + "\t\t" + wageFifteen);
    document.writeln(20 + "\t\t" + wageTwenty);
    document.writeln(25 + "\t\t" + wageTwentyFive);
    document.writeln(30 + "\t\t" + wageThirty);
}