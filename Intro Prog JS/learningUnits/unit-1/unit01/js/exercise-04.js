function exercise04Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:

    // Declare Variable

    let name;

    // Call prompt(), return value gets stored in variable

    name = prompt("Enter your name:");

    // Stored value gets used for output

    document.writeln(name);
}

function exercise04Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let firstName;
    let lastName;

    // Call prompt(), return value gets stored in variables

    firstName = prompt("Enter a first name:");
    lastName = prompt("Enter a last name:");

    // stored values ouput separated by a string literal (space)

    document.write(firstName);
    document.write(" ");
    document.write(lastName);
}

function exercise04Part3() {
    "use strict";
    // PART 3: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let firstName;
    let lastName;

    // Function call, return value gets stored to variables

    firstName = prompt("Enter a first name:");
    lastName = prompt("Enter a last name");

    // Output values to separate lines

    document.writeln(firstName);
    document.writeln(lastName);


    /* Or
    document.write(firstName + "\n");
    document.write(lastName + "\n");

    document.writeln(firstName + "\n" + lastName);
    
    (It doesn't say specifically)
    */
}

function exercise04Part4() {
    "use strict";
    // PART 4: YOUR CODE STARTS AFTER THIS LINE:

    // Variable declaration

    let address;
    let city;
    let state;
    let zipCode;

    // prompt function gets called, return values are stored

    address = prompt("Enter an address:");
    city = prompt("Enter a city");
    state = prompt("Enter a state");
    zipCode = prompt("Enter a zip code:");

    // Values are ouput

    document.writeln(address);
    document.writeln(city + ", " + state + " " + zipCode);
}