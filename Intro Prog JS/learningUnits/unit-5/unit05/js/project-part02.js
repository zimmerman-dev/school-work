// Global variables
let names = [];

// Make table
function createTable(outputTable) {
    let index;

    // Clear the table
    outputTable.innerHTML = "";

    // Table header
    outputTable.innerHTML += "<tr>";
    outputTable.innerHTML += "<td>Name</td>";
    outputTable.innerHTML += "</tr>";

    for (index = 0; index < names.length; index++) {
        outputTable.innerHTML += "<tr>";
        outputTable.innerHTML += "<td>" + names[index] + "</td>";
        outputTable.innerHTML += "</tr>";
    }
}

// Validation
function validName(enteredName) {
    
    if (enteredName.trim() === "") {
        return false;
    }
    return true;
}

function outputTotal() {

    // output total
    document.getElementById("totalOutput").innerHTML = "Total Names: " + names.length;
}

function part02() {
    "use strict";

    // Variable Declarations
    let enteredName;
    let outputTable;
    let form;

    // Get form and table objects
    form = document.getElementById("formId");
    outputTable = document.getElementById("outputTable");

    // Get enteredName from form
    enteredName = form.enteredName.value;

    // Validation for empty form
    if (validName(enteredName) === false) {
        return;
    }

    // Add entered name to array
    names.push(enteredName);

    // total counter function
    outputTotal();

    // Display table
    createTable(outputTable);
}