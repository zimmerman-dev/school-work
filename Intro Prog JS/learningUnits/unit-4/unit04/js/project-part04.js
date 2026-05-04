// Global Constant Init
const ZIP_CODE_53711 = 53711;
const ZIP_CODE_53712 = 53712;
const ZIP_CODE_53713 = 53713;
const ZIP_CODE_53714 = 53714;
const ZIP_CODE_53716 = 53716;
const PART_TIME = "PT";

// Global Variables Declarations
let zipCode;
let studentStatus;
let records;
let partTimeCount53711;
let partTimeCount53712;
let partTimeCount53713;
let partTimeCount53714;
let partTimeCount53716;
let fullTimeCount53711;
let fullTimeCount53712;
let fullTimeCount53713;
let fullTimeCount53714;
let fullTimeCount53716;
let partTimeTotal;
let fullTimeTotal;

// Global Variable Assignment
partTimeCount53711 = 0;
partTimeCount53712 = 0;
partTimeCount53713 = 0;
partTimeCount53714 = 0;
partTimeCount53716 = 0;

fullTimeCount53711 = 0;
fullTimeCount53712 = 0;
fullTimeCount53713 = 0;
fullTimeCount53714 = 0;
fullTimeCount53716 = 0;

// Function opens records
function initializeEnrollmentRecords() {
    records = openStudentEnrollmentRecords();
}

// Function runs the logic checks
function processRecords(zipCodeRecord) {

    if (zipCodeRecord === ZIP_CODE_53711) {
        if (studentStatus === PART_TIME) {
            partTimeCount53711++;
        } else {
            fullTimeCount53711++;
        }
    
    } else if (zipCodeRecord === ZIP_CODE_53712) {
        if (studentStatus === PART_TIME) {
            partTimeCount53712++;
        } else {
            fullTimeCount53712++;
        }
    
    } else if (zipCodeRecord === ZIP_CODE_53713) {
        if (studentStatus === PART_TIME) {
            partTimeCount53713++;
        } else {
            fullTimeCount53713++;
        }
   
    } else if (zipCodeRecord === ZIP_CODE_53714) {
        if (studentStatus === PART_TIME) {
            partTimeCount53714++;
        } else {
            fullTimeCount53714++;
        }
    
    } else if (zipCodeRecord === ZIP_CODE_53716) {
        if (studentStatus === PART_TIME) {
            partTimeCount53716++;
        } else {
            fullTimeCount53716++;
        }
    }
}

// Function loops through each record
function loopRecords() {
    while (records.readNextRecord()) {
        zipCode = records.getStudentZipCode();
        studentStatus = records.getStudentStatus();

        processRecords(zipCode);
    }
}

function printResults() {
    document.writeln(ZIP_CODE_53711
        + ": Part Time: " + partTimeCount53711
        + "  Full Time: " + fullTimeCount53711);

    document.writeln(ZIP_CODE_53712
        + ": Part Time: " + partTimeCount53712
        + " Full Time: " + fullTimeCount53712);

    document.writeln(ZIP_CODE_53713
        + ": Part Time: " + partTimeCount53713
        + "  Full Time: " + fullTimeCount53713);

    document.writeln(ZIP_CODE_53714
        + ": Part Time: " + partTimeCount53714
        + "  Full Time: " + fullTimeCount53714);

    document.writeln(ZIP_CODE_53716
        + ": Part Time: " + partTimeCount53716
        + "  Full Time: " + fullTimeCount53716);
    
    // Add all the counts for the totals
    partTimeTotal = partTimeCount53711 + partTimeCount53712
        + partTimeCount53713 + partTimeCount53714 + partTimeCount53716;

    fullTimeTotal = fullTimeCount53711 + fullTimeCount53712
        + fullTimeCount53713 + fullTimeCount53714 + fullTimeCount53716;

    document.writeln(""); // br
    document.writeln("Total Full Time: " + fullTimeTotal);
    document.writeln("Total Part Time: " + partTimeTotal);
}

function part04() {
    "use strict";

    // Call function to open enrollment records
    initializeEnrollmentRecords();

    // Call function to loop through records
    loopRecords();

    // Print the final data
    printResults();
}