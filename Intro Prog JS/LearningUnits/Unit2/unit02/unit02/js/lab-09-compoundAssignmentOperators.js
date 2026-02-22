function lab09() {
    "use strict";
    
    // YOUR CODE STARTS AFTER THIS LINE:

    let myNumber;
    let mySalary;
    let year;
    let loopCounter;
    let numberOfCats;
    let numberOfDogs;
    let numberOfFish;

    // Assign values to the variables
    myNumber = 200;
    mySalary = 40000.00;
    year = 2008;
    loopCounter = 0;
    // numberOfCats is just left with nothing in it
    numberOfDogs = "";
    numberOfFish = " ";

    // Apply compound operators and display results, each on their own line.
    document.writeln("The value of myNumber: " + myNumber);
    myNumber += 25;
    document.writeln("Add 25 to myNumber: " + myNumber);
    myNumber -= 75;
    document.writeln("Subtract 75 to myNumber: " + myNumber);
    
    document.writeln(); // Line break
    
    document.writeln("The value of mySalary: $" + mySalary);
    mySalary *= 1.1;
    document.writeln("A 10% raise to mySalary: $" + mySalary);
    
    document.writeln(); // Line break
    
    document.writeln("The year, " + year + " is a leap year");
    year += 4;
    document.writeln(year + " is the next leap year");
    
    document.writeln(); // Line break
    
    document.writeln("The value of loopCounter: " + loopCounter);
    loopCounter += 5;
    document.writeln("Add 5, loopCounter is now: " + loopCounter);
    
    document.writeln(); // Line break

    document.writeln("The numberOfCats variable: " + numberOfCats);
    numberOfCats += 5;
    document.writeln("Add 5 to numberOfCats: " + numberOfCats);
    // This happends because undefined has no numeric value

    document.writeln(); // Line break

    document.writeln("NumberOfDogs (empty string): " + numberOfDogs);
    numberOfDogs += 5;
    document.writeln("numberOfDogs plus five: " + numberOfDogs);
    

    document.writeln(); // Line break

    document.writeln("numberOfFish (empty string): " + numberOfFish);
    numberOfFish -= 5;
    document.writeln("numberOfFish plus five: " + numberOfFish);

    document.writeln();
    
    // I tried subtraction on the numberOfFish one to better understand coercion. 
    document.writeln("The type of numberOfDog: " + typeof(numberOfDogs));
    document.writeln("The type of numberOfFish: " + typeof(numberOfFish));
}