function part01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    let userchoice;

    // Obtain an uppercase letter choice from the user
    // Note: Any choice other than an uppercase W, X, Y, or Z must
    //       fall into the invalid choice "else" at the end of
    //       the linearly nested IF.

    prompt("Enter your one choice from: W, X, Y, or Z.");

    // Display user choice message on the Web page

    if (userchoice = 'W' || userchoice = 'X' ) {
            document.write("Either W or X are excellent choices.");
    } else if (userchoice === 'Y') {
            document.write("The Y choice is pretty good too.");
    } else if (userchoice === 'Z') {
            document.write("Z is an OK but not very good choice.");
    } else {
            documentwrite("INVALID! Can't follow directions, eh?");
    }
 
}