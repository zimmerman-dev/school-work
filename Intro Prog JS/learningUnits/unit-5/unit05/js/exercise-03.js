// Global Variables
let output;

// Print the results for todo list
function printResults(userArray) {
    output = document.getElementById("outputPart1");

    output.innerHTML += "<ul>";

    for (let index = 0; index < userArray.length; index++) {
        output.innerHTML += "<li>" + userArray[index] + "</li>";
    }
    output.innerHTML += "</ul>";
}

function exercise03Part1() {
    "use strict";

    // Constant Declaration
    const MAX_LOOP = 3;

    // Variable Declaration
    let userInput = [];
    let listItem;

    // Loop for user entry
    for (let index = 0; index < MAX_LOOP; index++) {
        listItem = prompt("Enter a To-Do item:");


        if (listItem === null || listItem.toLowerCase() === "quit") {
            break;
        } else {
            userInput.push(listItem);
        }
    }

    // Print todo list
    printResults(userInput);
}

function addTwoNumbers(userInputOne, userInputTwo) {
    let sum;

    sum = userInputOne + userInputTwo;
    return sum;
}

function exercise03Part2() {
    "use strict";

    // Const init
    const MAX_LOOP = 3;
    const ALERT_MESSAGE = "Enter 3 pairs of numbers";
    const INPUT_MESSAGE_ONE = "Enter first number";
    const INPUT_MESSAGE_TWO = "Enter second number";

    // Variable Declaration
    let userInputOne;
    let userInputTwo;
    let result;
    let outputTwo;

    // Variable Assignment
    result = 0;
    outputTwo = document.getElementById("exercise03Table");
    outputTwo.innerHTML += "<tr><th>No. 1</th><th>No. 2</th><th>Sum</th></tr>";
    

    alert(ALERT_MESSAGE);

    // Loop through prompt loop
    for (let index = 0; index < MAX_LOOP; index++) {

        userInputOne = prompt(INPUT_MESSAGE_ONE);
        userInputTwo = prompt(INPUT_MESSAGE_TWO);

        // validation
        if (userInputOne === null
            || userInputTwo === null
            || !isNumeric(userInputOne)
            || !isNumeric(userInputTwo)) {
            break;
        } else {
            userInputOne = Number(userInputOne);
            userInputTwo = Number(userInputTwo);
        }
        result = addTwoNumbers(userInputOne, userInputTwo);
        outputTwo.innerHTML += "<tr><td>" 
        + userInputOne 
        + "</td><td>" 
        + userInputTwo 
        + "</td><td>" 
        + result 
        + "</td></tr>";
    }
}
