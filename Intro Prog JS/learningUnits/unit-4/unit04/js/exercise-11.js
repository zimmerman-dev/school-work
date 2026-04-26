function exercise11Part1() {
    "use strict";

    // Const Initialization
    const EXAM_A_THRESHOLD = 90;
    const EXAM_B_THRESHOLD = 80;
    const EXAM_C_THRESHOLD = 70;
    const EXAM_D_THRESHOLD = 60;

    // Variable Declaration
    let studentRecords;
    let studentExamScores;
    let gradeCounterA;
    let gradeCounterB;
    let gradeCounterC;
    let gradeCounterD;
    let gradeCounterF;
    let scoreAverage;
    let loopCounter;

    // Variable Assignment
    gradeCounterA = 0;
    gradeCounterB = 0;
    gradeCounterC = 0;
    gradeCounterD = 0;
    gradeCounterF = 0;
    scoreAverage = 0;
    loopCounter = 0;


    studentRecords = openStudentExamRecords();
    
    // Looping through the exam records
    while (studentRecords.readNextRecord()) {
        studentExamScores = studentRecords.getStudentScore();
        scoreAverage += studentExamScores;
        
        // Logic check for exam scores
        if (studentExamScores >= EXAM_A_THRESHOLD) {
            gradeCounterA++;
        } else if (studentExamScores >= EXAM_B_THRESHOLD) {
            gradeCounterB++;
        } else if (studentExamScores >= EXAM_C_THRESHOLD) {
            gradeCounterC++;
        } else if (studentExamScores >= EXAM_D_THRESHOLD) {
            gradeCounterD++;
        } else {
            gradeCounterF++;
        }
        loopCounter++;
    }

    scoreAverage = scoreAverage / loopCounter;

    // Displaying grade count and score averages
    document.writeln("Grades \t\tCount");
    document.writeln("A \t\t" + gradeCounterA);
    document.writeln("B \t\t" + gradeCounterB);
    document.writeln("C \t\t" + gradeCounterC);
    document.writeln("D \t\t" + gradeCounterD);
    document.writeln("F \t\t" + gradeCounterF);
    document.write("<br>"); // Line break
    document.writeln("Average Score:" + scoreAverage);
}

function exercise11Part2() {
    "use strict";

    // Const Initialization
    const ERROR_MESSAGE_NAN = "Not a number, try again!";
    const ALERT_SMALL_GUESS = "Too small, try again!";
    const ALERT_LARGE_GUESS = "Too big, try again!";

    // Variable Declaration
    let enteredNumber;
    let correctAnswer;

    // Variable Assignment
    correctAnswer = Math.floor((Math.random() * 100) + 1);
    
    // Game loop 
    while (true) {
        enteredNumber = prompt("Enter a number between 1 and 100:");
        
        // Logic conditions that validate and print the guesses
        if (isNumeric(enteredNumber)) {
            
            enteredNumber = Number(enteredNumber);

            if (enteredNumber < correctAnswer) {
                document.writeln("Small guess: " + enteredNumber);
                alert(ALERT_SMALL_GUESS);

            } else if (enteredNumber > correctAnswer) {
                document.writeln("Large guess: " + enteredNumber);
                alert(ALERT_LARGE_GUESS);

            } else {
                document.write("<br>");
                document.writeln("Correct guess: " + correctAnswer);
                break;
            }
        } else {
            alert(ERROR_MESSAGE_NAN);
        }
    }
}
