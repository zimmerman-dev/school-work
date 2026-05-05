// Const Initialization
const TAX_ON_GROSS_PAY = 0.15;
const OVERTIME_THRESHOLD = 35;
const OVERTIME_MULTIPLIER = 1.5;

// Global Variables
let employeeRecords;
let employeeName;
let employeeNumber;
let employeeHoursWorked;
let employeeHourlyWage;
let overtimeScaleWage;
let employeeGrossPay;
let employeeNetPay;
let employeePayWithheld;

// Allows the records to read through
function initializeEmploymentRecords() {
    employeeRecords = openEmployeePayrollRecords();
}

// Display function for table header
function tableHeader() {
    document.writeln("Employee  |   Employee   |   Gross   |   Withholding  |   Net");
    document.writeln("Number    |    Name      |    Pay    |    Amount      |   Pay");
    document.write("<br>");
}

// Logical process for calculating scale
function processRecords() {
    if (employeeHoursWorked > OVERTIME_THRESHOLD) {

        overtimeScaleWage = (employeeHoursWorked - OVERTIME_THRESHOLD)
            * (OVERTIME_MULTIPLIER * employeeHourlyWage);

        employeeGrossPay = (OVERTIME_THRESHOLD * employeeHourlyWage) + overtimeScaleWage;

    } else {
        employeeGrossPay = employeeHoursWorked * employeeHourlyWage;
    }
    employeePayWithheld = employeeGrossPay * TAX_ON_GROSS_PAY;
    employeeNetPay = employeeGrossPay - employeePayWithheld;
}

// displays table data for each record
function displayTableData() {
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
}

// displays final totals
function displayTotals(totalGrossPay, totalNetPay, count) {
    let averagePay = totalNetPay / count;

    // Displaying totals
    document.writeln("--------------------------------------------------------------------\n");
    document.writeln("Total Gross Payroll: $" + totalGrossPay.toFixed(2));
    document.writeln("Total Net Payroll: $" + totalNetPay.toFixed(2));
    document.writeln("Average Net Pay: $" + averagePay.toFixed(2));
}

// Main
function part02() {
    "use strict";

    // Variable Declaration
    let totalGrossPay;
    let totalNetPay;
    let count;

    //Variable Assignment
    totalGrossPay = 0;
    totalNetPay = 0;
    count = 0;

    initializeEmploymentRecords();

    // Display table head
    tableHeader();

    // Loop through records
    while (employeeRecords.readNextRecord()) {
        employeeNumber = employeeRecords.getEmployeeNumber();
        employeeName = employeeRecords.getEmployeeName();
        employeeHoursWorked = employeeRecords.getEmployeeHoursWorked();
        employeeHourlyWage = employeeRecords.getEmployeeHourlyWage();

        // Logical process for pay scale
        processRecords();

        // Main data display
        displayTableData();


        // Calculating totals
        totalGrossPay += employeeGrossPay;
        totalNetPay += employeeNetPay;
        count++;
    }

    // Display final totals
    displayTotals(totalGrossPay, totalNetPay, count);
}