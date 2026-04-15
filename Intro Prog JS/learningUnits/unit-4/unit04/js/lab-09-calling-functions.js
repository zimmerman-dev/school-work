// Funky town
function displayMessage() {
    document.writeln("Hello, Function!");
}

function lab09Part01() {
    "use strict";

    // Call displayMessage function
    displayMessage();
    displayMessage();
    displayMessage();
    displayMessage();  
}

// Function Definition
function displayName() {

    // Variable Declaration
    let firstName;
    let middleInitial;
    let lastName;

    //Variable Assignment
    firstName = prompt("Enter your first name:");
    middleInitial = prompt("Enter your middle initial:");
    lastName = prompt("Enter your last name:");

    // Display Name
    document.write(firstName + " " + middleInitial + ". " + lastName);
}

function lab09Part02() {
    "use strict";

    // Display message start
    document.write("Hello, ");
    
    // Function call for name
    displayName();

    // Display message end
    document.writeln(". How are you?");

    // function call for name
    displayName();

    // Display message end
    document.write(", has left the building.");
    
}