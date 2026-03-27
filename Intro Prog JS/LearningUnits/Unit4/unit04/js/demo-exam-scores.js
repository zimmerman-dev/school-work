function processExamRecords() {
    "use strict";


    // Declare Constants
    let INITIAL_VALUE = 0;

    // Declare variables
    let studentName;
    let studentScore;
    let totalStudents = INITIAL_VALUE;
    let totalScore = INITIAL_VALUE;
    let averageScore;
    let records;

    // Open the Student Exam Record set
    records = openStudentExamRecords();

    // Output heading
    document.write("<h3>Student Exam Records</h3>");
    document.write("<b>Student Name\tExam Score</b><br/>");

    // Loop through the records
    while (records.readNextRecord()) {
        totalStudents++;

        // if (totalStudents > 5) {
        //     break;
        // }
        studentName = records.getStudentName();
        studentScore = records.getStudentScore();
        totalScore += studentScore;
        document.write(studentName + ":\t" + studentScore + "<br />");
    }

    // Calculate and print the average if there
    // were students in the record set
    if (totalStudents > INITIAL_VALUE) {
        averageScore = totalScore / totalStudents;
        document.write("<br />The average score is: " + averageScore.toFixed(2));
    }
}
