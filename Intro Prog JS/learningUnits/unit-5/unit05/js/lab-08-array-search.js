function lab08() {
    "use strict";

    // Declare Constants
    const STRING_LENGTH_THRESHOLD = 13;
    const STRING_LENGTH_CHALLENGE = 2;

    // Declare Variables
    let stringData = [];
    let twoLetterWords = [];
    let output;
    let index;
    let challengeIndex;
    let valueFound;
    let thirteenLetterWord;

    // String data array
    stringData = ["Believe", "it", "or", "not", "", "the", "very", "first", "version", "of",
        "Javascript", "shipped", "without", "Arrays", "Subsequent", "versions", "made",
        "up", "for", "the", "oversight", "and", "modern", "Javascript", "Arrays", "are",
        "powerful", "structures", "indeed", "", "even", "emulating", "many", "common",
        "data", "structures", "such", "as", "stacks", "and", "queues", "This",
        "reference", "will", "cover", "the", "core", "functionality", "of", "Arrays",
        "as", "well", "as", "introduce", "a", "few", "useful", "extensions"];


    // Assign variables
    output = document.getElementById("outputDiv");
    valueFound = false;

    // loop through string data
    for (index = 0; index < stringData.length; index++) {
        
        // testing for letter count
        if (stringData[index].length === STRING_LENGTH_THRESHOLD) {
            thirteenLetterWord = stringData[index] + ", index number: " + index;
            output.innerHTML = thirteenLetterWord;
            valueFound = true;
        }

        // Challenge part, testing finding 2 letter words
        if (stringData[index].length === STRING_LENGTH_CHALLENGE) {
            twoLetterWords.push(stringData[index]);
        }
    }

    // Testing boolean for original 13 letter word problem
    if (valueFound === false) {
        output.innerHTML = "No matching word found...";
    }

    // Challenge part display
    output.innerHTML += "<h3>Two Letter Words</h3>";
    output.innerHTML += "<ul>";

    for (challengeIndex = 0; challengeIndex < twoLetterWords.length; challengeIndex++) {
        output.innerHTML += "<li>" + twoLetterWords[challengeIndex] + "</li>";
    }

    output.innerHTML += "</ul>";
}
