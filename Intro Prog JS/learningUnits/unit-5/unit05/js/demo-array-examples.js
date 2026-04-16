/*
FindArraySum
    set sum to zero
    declare average
    declare array of numbers
    FOR index 0 to length of array
        sum += array[index]
    ENDFOR
    output sum and average
END
*/
function findArraySum() {
    "use strict";

    // Constants
    const INITIAL_VALUE = 0;
    // Declare variables
    let sum;
    let average;
    let numbers;
    let sumOutput;
    let averageOutput;
    let index;

    sum = INITIAL_VALUE;

    // Populate the array
    numbers = [402, 107, 8, 183, 517, 577, 688, 945, 141, 194, 613, 966, 928,
        700, 818, 749, 862, 130, 573, 676, 115, 539, 113, 690, 704, 83,
        433, 863, 885, 32, 114, 329, 186, 123, 485, 930, 449, 430, 74,
        543, 87, 916, 562, 622, 841, 533, 635, 83, 183, 989, 959, 158,
        882, 901, 78, 343, 727, 532, 287, 817, 380, 578, 637, 966, 479,
        302, 295, 36, 835, 266, 768, 160, 174, 322, 779, 201, 899, 724,
        685, 57, 369, 533, 345, 190, 628, 952, 38, 924, 917, 607, 424,
        773, 62, 625, 160, 875, 671, 757, 469, 240, 506, 392, 716, 983,
        769, 654, 587, 432, 423, 760, 610, 881, 687, 397, 339, 459, 279,
        729, 44, 916, 858, 803, 422, 84, 341, 860, 567, 354, 82, 833,
        841, 464, 733, 120, 260, 496, 465, 897, 287, 189, 749, 14, 545,
        647, 870, 923, 41, 846, 985, 154, 776, 762, 195, 63, 778, 383,
        701, 888, 835, 69, 59, 500, 731, 431, 341, 945, 447, 838, 922,
        496, 886, 570, 110, 86, 38, 950, 922, 595, 274, 464, 138, 853,
        251, 289, 306, 834, 302, 620, 154, 130, 155, 116, 696, 550, 138,
        33, 58, 431, 516, 28
    ];

    // Calculate the sum
    for (index = 0; index < numbers.length; index += 1) {
        sum += numbers[index];
    }

    average = sum / numbers.length;

    // Get access to the output HTML element
    sumOutput = document.getElementById("findArraySumOutput");
    averageOutput = document.getElementById("findArrayAverageOutput");

    // Output the sum to the element
    sumOutput.innerHTML += sum;
    averageOutput.innerHTML += average.toFixed(2);

}


/*
FindRangeOfNumbers
    set smallest to first array element
    set largest to first array element
    declare array of numbers
    FOR index 0 to length of array
        IF array[index] < smallest THEN
            smallest = array[index]
        ELSE IF array[index] > largest THEN
            largest = array[index]
        ENDIF
    ENDFOR
    output smallest and largest
END
*/
function findRangeOfNumbers() {
    "use strict";
    // Declare variables
    let numbers;
    let smallestOutput;
    let largestOutput;
    let index;
    let smallest;
    let largest;

    // Populate the array
    numbers = [402, 107, 8, 183, 517, 577, 688, 945, 141, 194, 613, 966, 928,
        700, 818, 749, 862, 130, 573, 676, 115, 539, 113, 690, 704, 83,
        433, 863, 885, 32, 114, 329, 186, 123, 485, 930, 449, 430, 74,
        543, 87, 916, 562, 622, 841, 533, 635, 83, 183, 989, 959, 158,
        882, 901, 78, 343, 727, 532, 287, 817, 380, 578, 637, 966, 479,
        302, 295, 36, 835, 266, 768, 160, 174, 322, 779, 201, 899, 724,
        685, 57, 369, 533, 345, 190, 628, 952, 38, 924, 917, 607, 424,
        773, 62, 625, 160, 875, 671, 757, 469, 240, 506, 392, 716, 983,
        769, 654, 587, 432, 423, 760, 610, 881, 687, 397, 339, 459, 279,
        729, 44, 916, 858, 803, 422, 84, 341, 860, 567, 354, 82, 833,
        841, 464, 733, 120, 260, 496, 465, 897, 287, 189, 749, 14, 545,
        647, 870, 923, 41, 846, 985, 154, 776, 762, 195, 63, 778, 383,
        701, 888, 835, 69, 59, 500, 731, 431, 341, 945, 447, 838, 922,
        496, 886, 570, 110, 86, 38, 950, 922, 595, 274, 464, 138, 853,
        251, 289, 306, 834, 302, 620, 154, 130, 155, 116, 696, 550, 138,
        33, 58, 431, 516, 28
    ];

    smallest = numbers[0];
    largest = numbers[0];


    for (index = 0; index < numbers.length; index += 1) {
        if (numbers[index] < smallest) {
            smallest = numbers[index];
        } else if (numbers[index] > largest) {
            largest = numbers[index];
        }
    }

    // Get access to the output HTML element
    smallestOutput = document.getElementById("findRangeSmallest");
    largestOutput = document.getElementById("findRangeLargest");

    // Output the sum to the element
    smallestOutput.innerHTML += smallest;
    largestOutput.innerHTML += largest;

}


function loadUserInputsIntoArray() {
    // Define all variables and constants
    let referenceToOutputElement; // <-- this variable will point to an element on the web page
    let placesToVisit = []; // <-- this sets up an empty array
    let userInputPlace; // <-- this variable will contain in turn each place input by the user

    // Obtain place name from user and place into the array
    // Stop the looping when the user keys in the string 'stop'
    while (true) {

        userInputPlace = prompt("Provide the name of place you'd like to visit--Enter 'stop' to quit");

        if (userInputPlace === "stop") {
            break; // <-- break means leave loop immediately!!
        }

        placesToVisit[placesToVisit.length] = userInputPlace; // <-- load into next available "slot"
    }

    //  When the user keys in 'stop' the flow of control will jump out of the loop to this location.
    //  And, the array will be loaded, with one place to visit in each "slot", and as many "slots" as the
    //  number of places names that the user entered.

    //  For debugging, now dump the content of the array as just a comma delimited list to see if the array has in fact loaded OK

    referenceToOutputElement = document.getElementById("displaySpot");
    referenceToOutputElement.innerHTML += placesToVisit; // Just a debug dump of the entered values of the array

}


function examGrid() {
    "use strict";

    let row;
    let column;

    row = 0;
    while (row < 5) {
        column = 0;
        document.write("<br />");
        while (column < 5) {
            document.write("X ");
            column += 1;
        }
        row += 1;
    }
}