function processInventoryRecords() {
    "use strict";

    let currentName;
    let currentScore;
    let studentRecords;

    // Open the Student Enrollment Records and make them
    // available to the script
    studentRecords = openStudentExamRecords();

    //output a header with field names
    document.write("<h3>Student Exam Record Set</h3><strong>Student "
            + "Name\tExam Score</strong><br />");

    // Read the next record, test to see if there
    // is a next record and then output it

    while (studentRecords.readNextRecord()) {
        currentName = studentRecords.getStudentName();
        currentScore = studentRecords.getStudentScore();
        document.write(currentName + "\t" + currentScore + "<br />");
    }
}