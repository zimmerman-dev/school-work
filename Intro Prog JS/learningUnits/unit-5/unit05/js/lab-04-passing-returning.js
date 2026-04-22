// Function that formats name from user prompts
function formatFullName(firstName, middleInitial, lastName) {
    return firstName + " " + middleInitial + ". " + lastName;
}
function lab04() {
    "use strict";

    // Variable Declaration
    let queryFirstName;
    let queryMiddleInitial;
    let queryLastName;
    let result;

    queryFirstName = prompt("Enter your first name:");
    queryMiddleInitial = prompt("Enter your middle initial:");
    queryLastName = prompt("Enter your last name:");

    // Assign result the function that formats name
    result = formatFullName(queryFirstName, queryMiddleInitial, queryLastName);

    // Display name
    document.getElementById("outputHeading").innerHTML += "Hello, " + result + ". How are you?";
}