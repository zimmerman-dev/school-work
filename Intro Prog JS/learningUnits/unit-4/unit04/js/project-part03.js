// Global Variable
let records;

function initializeExamRecords() {
    records = openStudentExamRecords();
}

// Display table opening
function startTable() {
    document.write("<table>");

    document.write("<thead><tr>");
    document.write("<th>Student Name</th>");
    document.write("<th>Exam Score</th>");
    document.write("</tr></thead>");
    document.write("<tbody>");
}

// Print Records
function printRecord() {
    let studentName; 
    let score;
    
    studentName = records.getStudentName();
    score = records.getStudentScore();

    document.write("<tr>");
    document.write("<td>" + studentName + "</td>");
    document.write("<td>" + score + "</td>");
    document.write("</tr>");

}

// Print totals
function printTotal(countStudentsWithA, countTotalRecords) {

    document.write("<tr>");
    document.write("<th>Totals</th>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Total students with A's: </td>");
    document.write("<td>" + countStudentsWithA + "</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Total Students: </td>");
    document.write("<td>" + countTotalRecords + "</td>");
    document.write("</tr>");
}

// Close table
function endTable() {
    document.write("</tbody>");
    document.write("</table>");
}


function part03() {
    "use strict";

    // Constant Declaration
    const SCORE_THRESHOLD_A = 90;

    // Declare Variables
    let countStudentsWithA;
    let countTotalRecords;

    // Assign Variables
    countTotalRecords = 0;
    countStudentsWithA = 0;
    
    initializeExamRecords();

    // Table Header
    document.write("<h3>A Exams</h3>");
    
    // Create table
    startTable();

    // Loop for processing records
    while (records.readNextRecord()) {

        // Logic check for which records to 
        if (records.getStudentScore() >= SCORE_THRESHOLD_A) {
            countStudentsWithA++;
            
            // Print records
            printRecord();
        }
        countTotalRecords++;
    }

    // Print totals
    printTotal(countStudentsWithA, countTotalRecords);

    endTable();
}