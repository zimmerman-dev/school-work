function lab02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Declare Variables
  let aFineVariable;
    let anotherVariable;
    let oneMoreVariable

    // Assign Variables
    aFineVariable = "A fine value";
    anotherVariable ="This is another fine value"
    oneMoreVariable = prompt("Enter the number 5" );

    oneMoreVariable = Number( oneMoreVariable );

    //Logic section
    if (oneMoreVariable == 5){
        document.write("Thanks, that's just the right number. I'm happy now!");
    }
    else{
    document.write("That's not the right number");
    };

}