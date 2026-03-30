function exercise03Part1() {
    "use strict";
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:

    // Create variable called "name" - undefined
    let name;

    // The return value for prompt() function gets stored in "name"
    name = prompt("Enter your name:");

    /*
    Use the write() method to output the value of "name" as html text in the DOM
    */
    document.write(name);
}

function exercise03Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration
    let name;

    // Same as part 1, we call the prompt function
    name = prompt("Enter your name:");

    /*
    We use the write() method again to ouput a string, the value of 
    "name", and another string, all as html texl in the DOM
    */
    document.write("Hello, ");
    document.write(name);
    document.write(", welcome to the class!");
}

function exercise03Part3() {
    "use strict";
    // PART 3: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let name;
    let cityOfBirth;

    // Variable Assignment

    name = prompt("Enter your name:");
    cityOfBirth = prompt("Wnere were you born?");

    // Ouput stored value separated by string literals

    document.write("Hello, ");
    document.write(name);
    document.write(" from ");
    document.write(cityOfBirth);
    document.write(", welcome to the class!");

    // Or
    document.writeln(); // Or document.write("<br>");
    // Line break

    document.writeln("Hello, " + name
        + " from " + cityOfBirth + ", welcome to the class!");
}