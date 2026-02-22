function exercise09Part1() {
    "use strict";
    
    // Variable Declarations
    let targetNum;
    let userNum;

    // Variable Assignments
    targetNum = 100;
    userNum = Number(prompt("Enter a number:"));

    // Output
    document.writeln("First Number: 100");
    document.writeln("Entered Number: " + userNum);
    document.writeln();
    
    targetNum += userNum;
    document.writeln(targetNum);
    targetNum += userNum;
    document.writeln(targetNum);
    targetNum += userNum;
    document.writeln(targetNum);
    targetNum += userNum;
    document.writeln(targetNum);
    targetNum += userNum;
    document.writeln(targetNum);
    targetNum += userNum;
    document.writeln(targetNum);
    targetNum += userNum;
    document.writeln(targetNum);
    targetNum += userNum;
    document.writeln(targetNum);
    targetNum += userNum;
    document.writeln(targetNum);
    targetNum += userNum;
    document.writeln(targetNum);
}

function exercise09Part2() {
    "use strict";

    // Variable Declarations
    let fixedNum;
    let queryNum;

    // Variable Assignments
    fixedNum = 100;
    queryNum = Number(prompt("Enter another number:"));

    // Ouput
    document.writeln("First Number: 100");
    document.writeln("Entered Number: " + queryNum);
    
    document.writeln();

    fixedNum /= queryNum;
    document.writeln(fixedNum);
    fixedNum /= queryNum;
    document.writeln(fixedNum);
    fixedNum /= queryNum;
    document.writeln(fixedNum);
    fixedNum /= queryNum;
    document.writeln(fixedNum);
    fixedNum /= queryNum;
    document.writeln(fixedNum);
    fixedNum /= queryNum;
    document.writeln(fixedNum);
    fixedNum /= queryNum;
    document.writeln(fixedNum);
    fixedNum /= queryNum;
    document.writeln(fixedNum);
    fixedNum /= queryNum;
    document.writeln(fixedNum);
    fixedNum /= queryNum;
    document.writeln(fixedNum);
}
