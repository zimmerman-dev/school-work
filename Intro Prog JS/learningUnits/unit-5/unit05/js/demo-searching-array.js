/*
This is file /unit5/searchingAnArray.js
It contains the JavaScript code for

"Searching an Array" File: /unit5/searchingAnArray.html
*/
function searchingAnArray() {
    "use strict";

    // Declare variables
    let numbers;
    let output;
    let index;
    let search;
    let form;
    let valueFound;
    let outputString;

    // Initialize the search boolean to false
    valueFound = false;

    // Create an array of numbers
    numbers = [4, 6, 7, 11, 13, 16, 18, 19, 20, 21, 23, 26, 29, 35,
        37, 38, 39, 41, 42, 45, 48, 51, 57, 58, 63, 66, 70, 72,
        81, 88, 89, 90, 92, 93, 94, 95, 96
    ];

    // Get the form element from the HTML document
    form = document.getElementById("searchingAnArrayId1");

    // Get the value entered into the HTML form
    search = form.entry.value;

    // Get the output HTML element
    output = document.getElementById("outputList");

    // Check that user input is a number
    if (!isNumeric(search) || search === "") {
        outputString = "<li>Not a number</li>";
        output.innerHTML = outputString;
        return false;
    }

    // Covert user input to a number
    search = Number(search);

    // Search the array for a match to the user input
    for (index = 0; index < numbers.length; index++) {
        if (search === numbers[index]) {
            valueFound = true;
            break;
        }
    }

    // Create output if the user input is in the array or if user input is not
    // in the array
    if (valueFound) {
        outputString = "<li>The number " + search +
            " is in the array " + "and is in index " +
            index + "</li>";
    } else {
        outputString = "<li>The number " + search +
            " is not in the array </li>";
    }

    // Display output to the webpage
    output.innerHTML = outputString;

    // Prevent the webpage from going to the server and refreshing
    return false;

}