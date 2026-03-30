function part02() {
    "use strict";

    // Const Declaration
    const MINIMUM_SCORE_A = 90;
    const MINIMUM_SCORE_B = 80;
    const MINIMUM_SCORE_C = 70;
    const MINIMUM_SCORE_D = 60;
    const ERROR_MESSAGE = "Input error, try again";


    // Variable Declaration
    let userName;
    let userScore;
    let letterGrade;

    // Prompt User
    userName = prompt("Enter your first and last name:");
    userScore = prompt("Enter your exam score x, for x out of 100:");

    // Validation
    if (userName === null 
        || userName.length <= 0 
        || isNumeric(userName) 
        
        || userScore === null 
        || userScore.length <= 0 
        || !isNumeric(userScore)) {
        
        alert(ERROR_MESSAGE);
        return;
    }

    // Logic
    if (userScore < MINIMUM_SCORE_D) {
        letterGrade = 'F';
    } else if (userScore < MINIMUM_SCORE_C) {
        letterGrade = 'D';
    } else if (userScore < MINIMUM_SCORE_B) {
        letterGrade = 'C';
    } else if (userScore < MINIMUM_SCORE_A) {
        letterGrade = 'B';
    } else {
        letterGrade = 'A';
    }
    // Display
    document.writeln(userName + "'s score of " + userScore + " is a " + letterGrade);
}