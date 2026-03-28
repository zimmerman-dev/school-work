function lab04() {
    "use strict";

    // Declare variables
    let currentNumber;
    let currentName;
    let studentRecords;

    studentRecords = openStudentEnrollmentRecords();

    // Loop processing 
    while (studentRecords.readNextRecord()) {
        currentNumber = studentRecords.getStudentNumber();
        console.log(currentNumber);
        currentName = studentRecords.getStudentName();
        console.log(currentName);

        // Display records
        document.writeln("Student " + currentNumber + ":\n" + currentName); 
        document.writeln("-------------");
    }
}