function part01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    let userChoice;

    // Obtain an uppercase letter choice from the user
    // Note: Any choice other than an uppercase W, X, Y, or Z must
    //       fall into the invalid choice "else" at the end of
    //       the linearly nested IF.

    userChoice = prompt("Enter your one choice from: W, X, Y, or Z.");

    // Display user choice message on the Web page

    if (userChoice === 'W' || userChoice === 'X') {
            document.write("Either W or X are excellent choices.");
    } else if (userChoice === 'Y') {
            document.write("The Y choice is pretty good too.");
    } else if (userChoice === 'Z') {
            document.write("Z is an OK but not very good choice.");
    } else {
            document.write("INVALID! Can't follow directions, eh?");
    }
}