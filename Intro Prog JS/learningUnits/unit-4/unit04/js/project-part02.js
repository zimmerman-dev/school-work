function part02() {
    "use strict";

    // Const Initialization
    const TAX_ON_GROSS_PAY = 0.15;
    const OVERTIME_THRESHOLD = 35;
    const OVERTIME_MULTIPLIER = 1.5;

    // Variable Declaration
    let employeeRecords;
    let employeeName;
    let employeeNumber;
    let employeeHoursWorked;
    let employeeHourlyWage;
    let overtimeScaleWage;
    let employeeGrossPay;
    let employeeNetPay;
    let employeePayWithheld;
    let totalGrossPay;
    let totalNetPay;
    let averagePay;
    let count;

    //Variable Assignment
    employeeRecords = openEmployeePayrollRecords();
    totalGrossPay = 0;
    totalNetPay = 0;
    count = 0;
    

    // Display Table Header
    document.writeln("Employee  |   Employee   |   Gross   |   Withholding  |   Net");
    document.writeln("Number    |    Name      |    Pay    |    Amount      |   Pay");
    document.write("<br>");

    // Loop through records
    while (employeeRecords.readNextRecord()) {
        employeeNumber = employeeRecords.getEmployeeNumber();
        employeeName = employeeRecords.getEmployeeName();
        employeeHoursWorked = employeeRecords.getEmployeeHoursWorked();
        employeeHourlyWage = employeeRecords.getEmployeeHourlyWage();


        if (employeeHoursWorked > OVERTIME_THRESHOLD) {
  
            // Calculating how much overtime pay is received
            overtimeScaleWage = (employeeHoursWorked - OVERTIME_THRESHOLD) 
                * (OVERTIME_MULTIPLIER * employeeHourlyWage);
            
            // Gross pay calculation (overtime pay + regular pay)
            employeeGrossPay = (OVERTIME_THRESHOLD * employeeHourlyWage) + overtimeScaleWage;
        
        } else {

            // Calculating Gross pay
            employeeGrossPay = employeeHoursWorked * employeeHourlyWage;
        }
            
        // Calculating pay withheld
        employeePayWithheld = employeeGrossPay * TAX_ON_GROSS_PAY;
            
        // Calculating net pay
        employeeNetPay = employeeGrossPay - employeePayWithheld;
        
        // Display table data
        document.writeln(employeeNumber 
            + "        "
            + employeeName 
            + "        " 
            + "$" + employeeGrossPay.toFixed(2)
            + "        " 
            + "$" + employeePayWithheld.toFixed(2)
            + "        "
            + "$" + employeeNetPay.toFixed(2));

        // Calculating totals
        totalGrossPay += employeeGrossPay;
        totalNetPay += employeeNetPay;
        count++;
    }
    averagePay = totalNetPay / count;

    // Displaying totals
    document.writeln("--------------------------------------------------------------------\n");
    document.writeln("Total Gross Payroll: $" + totalGrossPay.toFixed(2));
    document.writeln("Total Net Payroll: $" + totalNetPay.toFixed(2));
    document.writeln("Average Net Pay: $" + averagePay.toFixed(2));
    
}