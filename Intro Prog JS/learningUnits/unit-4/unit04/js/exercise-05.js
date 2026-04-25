function exercise05Part1() {
    "use strict";

    // Const Initialization
    const LOOP_MAX = 30;

    // Variable Declaration
    let index;
    let indexSquare;
    let indexCube;

    // Loop that displays indices
    for (index = 1; index <= LOOP_MAX; index++) {
        indexSquare = index ** 2;
        indexCube = index ** 3;
        document.writeln(index + ", " + indexSquare + ", " + indexCube);
    }
}

function exercise05Part2() {
    "use strict";
    
    // Variable Definition
    let enteredNumberOne;
    let enteredNumberTwo;
    let enteredNumberSum;

    // Variable Assignment
    enteredNumberOne = prompt("Enter a number:");
    enteredNumberTwo = prompt("Enter a bigger number:");
    enteredNumberSum = 0;

    enteredNumberOne = Number(enteredNumberOne);
    enteredNumberTwo = Number(enteredNumberTwo);

    // Loop that displays the digits between two entered numbers and sum
    while (enteredNumberOne <= enteredNumberTwo) {
        enteredNumberSum += enteredNumberOne;

        if (enteredNumberOne < enteredNumberTwo) {
            document.write(enteredNumberOne + " + ");
        } else {
            document.write(enteredNumberOne + " = " + enteredNumberSum);
        }
        enteredNumberOne++;
    }
}

