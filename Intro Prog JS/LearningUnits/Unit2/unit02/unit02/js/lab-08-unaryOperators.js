function lab08() {
    "use strict";
    
    // Variable Declarations
    let myCount;
    let dayOfMonth;
    let targetYear;
    let loopCounter;
    let whatAmIOne;
    let whatAmITwo;
    let whatAmIThree;

    // Variable Assignments
    myCount = 10;
    dayOfMonth = 21;
    targetYear = 2009;
    loopCounter = 0;
    whatAmIOne = "this is just a test";
    whatAmITwo = 25;
    whatAmIThree = (5 >= "5");
    
    // Calculations with unary operators
    myCount++;
    dayOfMonth--;
    targetYear--;
    targetYear--;
    targetYear--;
    loopCounter++;
    whatAmIOne = typeof(whatAmIOne);
    whatAmITwo = typeof(whatAmITwo);
    whatAmIThree = typeof(whatAmIThree);
    
    // Output results from calculations
    document.writeln("adding 1 to myCount: " + myCount);
    document.writeln("subtracting 1 from dayOfMonth: " + dayOfMonth);
    document.writeln("subtracting 3 from targetYear: " + targetYear);
    document.writeln("adding 1 to loopCounter: " + loopCounter);
    document.writeln("whatAmIOne is a \"" + whatAmIOne + "\"");
    document.writeln("whatAmITwo is a \"" + whatAmITwo + "\"");
    document.writeln("whatAmIThree is a \"" + whatAmIThree + "\"");
}