function exercise08Part1() {
    "use strict";

    // Const Initialization
    const LOOP_MAXIMUM = 1000;

    // Variable Declaration
    let index;
    let evenTotal;
    let oddTotal;

    // Variable Assignment
    evenTotal = 0;
    oddTotal = 0;

    // Loop
    for (index = 0; index < LOOP_MAXIMUM; index++) {
        if (index % 2 === 0) {
            evenTotal += index;    
        } else {
            oddTotal += index;   
        }
    }

    // Display totals
    document.writeln("Even total: " + evenTotal);
    document.writeln("Odd total: " + oddTotal);
}

function exercise08Part2() {
    "use strict";
    
    // Const Initialization
    const PAY_UPPER_THRESHOLD = 1000;

    // Variable Declaration
    let records;
    let employeePaycheck;
    let employeeName;
    let employeeHours;
    let employeeWage;
    let employeeNumber;

    records = openEmployeePayrollRecords();

    // Loop to go through the employee records
    while (records.readNextRecord()) {

        // Variable Assignment
        employeeNumber = records.getEmployeeNumber();
        employeeName = records.getEmployeeName();
        employeeHours = records.getEmployeeHoursWorked();
        employeeWage = records.getEmployeeHourlyWage();
        employeePaycheck = employeeHours * employeeWage;
        
        // Logic for the paycheck threshold validation
        if (employeePaycheck > PAY_UPPER_THRESHOLD) {

            // Display records with format function String() and padding method
            document.write(String(employeeNumber).padEnd(4)
                + String(employeeName).padEnd(16)
                + String(employeeWage).padEnd(4) 
                + String(employeeHours).padEnd(4) 
                + employeePaycheck + "<br>");
        }
    }
}
