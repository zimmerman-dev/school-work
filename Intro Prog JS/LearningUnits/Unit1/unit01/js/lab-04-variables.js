function lab04() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Declare Variables

    let myName;
    let myAddress;
    let myAge;
    let smallPrice;

    // Assign values to variables

    myName = "John Zimmerman";
    myAddress = "5317 Old Middleton Road";
    myAge = 28;
    smallPrice = "12.99";

    // Output values to webpage

    document.write(myName);
    document.write(myAddress);
    document.write(myAge);
    document.write(smallPrice);

    // Line Break
    document.write("<br/>");
    document.write("<br/>");
    // Or 

    document.writeln(myName);
    document.writeln(myAddress);
    document.writeln(myAge);
    document.writeln(smallPrice);

    // Line Break
    document.write("<br/>");
    // Or

    document.write(myName);
    document.write("<br/>");
    document.write(myAddress);
    document.write("<br/>");
    document.write(myAge);
    document.write("<br/>");
    document.write(smallPrice);
}