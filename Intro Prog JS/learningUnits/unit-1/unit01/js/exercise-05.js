function exercise05Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let price;

    // Prompt() function return value gets stored to price

    price = prompt("Enter a price");

    // Type conversion using Number func

    price = Number(price);

    // Ouput value of price with text preceeding

    document.writeln("You entered: " + price);
}

function exercise05Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration

    let priceOne;
    let priceTwo;
    let totalPrice;

    // Prompt function return value gets stored 

    priceOne = prompt("Enter the first price:");
    priceTwo = prompt("Enter the second price:");

    // Type conversion

    priceOne = Number(priceOne);
    priceTwo = Number(priceTwo);

    // Adding priceOne and priceTwo together for totalPrice

    totalPrice = priceOne + priceTwo;

    // Output the values of priceOne, priceTwo, and totalPrice

    document.writeln("The first price: " + priceOne);
    document.writeln("The second price: " + priceTwo);
    document.writeln("The total price: " + totalPrice);
}

function exercise05Part3() {
    "use strict";
    // PART 3: YOUR CODE STARTS AFTER THIS LINE:

    // Variable declaration

    let numberOne;
    let numberTwo;
    let numberThree;
    let total;
    let average;

    // Prompt function return values are stored in variables

    numberOne = prompt("Enter the first number: ");
    numberTwo = prompt("Enter the second number: ");
    numberThree = prompt("Enter the third number: ");

    // Type conversions

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    numberThree = Number(numberThree);

    // Total is assigned the value of the sum

    total = numberOne + numberTwo + numberThree;

    // Average is assigned the average total

    average = total / 3;

    // Output the values and text

    document.writeln("The first number: " + numberOne);
    document.writeln("The second number: " + numberTwo);
    document.writeln("The third number: " + numberThree);
    document.writeln("The total: " + total);
    document.writeln("The average: " + average);
}
