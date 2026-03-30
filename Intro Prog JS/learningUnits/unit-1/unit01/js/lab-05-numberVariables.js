function lab05Part1() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declarations

    let numberOfApples;
    let numberOfOranges;

    // Value Assignment

    numberOfApples = 10;
    numberOfOranges = 7;

    // Output

    document.writeln("I have " + numberOfApples + " apples.");
    document.writeln("I have " + numberOfOranges + " oranges.");

    /*
    document.writeln("I have " + numberOfApples + " apples.\n"
        + "I have " + numberOfOranges + " oranges."
    );
    */
}

function lab05Part2() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let pageCountA;
    let pageCountB;
    let sum;

    // Value Assignment

    pageCountA = 100;
    pageCountB = 200;

    // Find sum for pageCount vars

    sum = pageCountA + pageCountB;

    // Output

    document.writeln("Book one has " + pageCountA + " pages.");
    document.writeln("Book two has " + pageCountB + " pages.");
    document.writeln("There are a total of " + sum + " pages.");
}