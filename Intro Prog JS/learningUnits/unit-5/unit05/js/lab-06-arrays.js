// Global Array
let enteredStringArray = [];

function lab06() {
    "use strict";

    // Variable Declaration
    let output;
    let form;
    let index;
    let outputString = "";
    let enteredString;

    // Assign Variables
    form = document.getElementById("lab06FormId");
    output = document.getElementById("outputList");

    enteredString = form.userString.value;

    // append the end of enteredStringArray
    enteredStringArray.push(enteredString);

    // Loop through array
    for (index = 0; index < enteredStringArray.length; index++) {
        outputString += "<li>" + enteredStringArray[index] + "</li>";
    }

    // output results into list
    output.innerHTML = outputString;

    return false;
}