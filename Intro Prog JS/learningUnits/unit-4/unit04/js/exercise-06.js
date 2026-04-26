function exercise06Part1() {
    "use strict";
    
    // Const Declaration
    const LOOP_MAX = 50;
    const INDEX_INITIALIZER = 1;

    // Variable Declaration
    let index;
    let indexHalved;
    let indexQuartered;

    // Loop to display each row 1-50
    for (index = INDEX_INITIALIZER; index <= LOOP_MAX; index++) {

        // Variable Assignments pre-loop
        indexHalved = index / 2;
        indexQuartered = index / 4;

        // Display indices
        document.write(index + ", " + indexHalved + ", " + indexQuartered);
        document.write("</br>");
    }
}

function exercise06Part2() {
    "use strict";
    
    // Variable Declaration
    let enteredNumberOne;
    let enteredNumberTwo;
    let index;
    let enteredNumberProduct;

    // Variable Assignment
    enteredNumberProduct = 1;
    enteredNumberOne = prompt("Enter a number:");
    enteredNumberTwo = prompt("Enter a bigger number");

    enteredNumberOne = Number(enteredNumberOne);
    enteredNumberTwo = Number(enteredNumberTwo);

    // Loop to display the product of the number range
    for (index = enteredNumberOne; index <= enteredNumberTwo; index++) {

        // Logic on whether a plus sign or equal sign follows the index
        if (index < enteredNumberTwo) {
            document.write(index + " * ");
        } else {
            document.write(index + " = ");
        }
        enteredNumberProduct *= index;
    }

    // display the final product
    document.write(enteredNumberProduct);
}

