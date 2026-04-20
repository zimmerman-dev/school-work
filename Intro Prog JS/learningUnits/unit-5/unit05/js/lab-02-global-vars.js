// Global Variables
let fullName;

function printFullName() {

    // Variable Initialization
    let fullName = "Bill Smith";

    // Append fullName to outputList
    document.getElementById("outputList").innerHTML += "<li>" + fullName + "</li>";
}

function lab02() {
    "use strict";

    // Assign Global fullName
    fullName = "Judy Green";

    // Append fullName to outputList
    document.getElementById("outputList").innerHTML += "<li>" + fullName + "</li>";
    
    // call function 
    printFullName();
    
}