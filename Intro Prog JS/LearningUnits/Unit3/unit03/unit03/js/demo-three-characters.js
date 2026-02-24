function threeCharacters() {

    // Read Three Characters
    
        // Declare variables
        let characterOne;
        let characterTwo;
        let characterThree;
        let swap;
    
        // Prompt use for characters and store in variables
        characterOne = prompt("Enter a character");
        characterTwo = prompt("Enter a character");
        characterThree = prompt("Enter a character");
    
        //Display the entered characters
        document.write("Entered Characters<br />");
        document.write("\tCharacter One:\t\t" + characterOne + "<br />");
        document.write("\tCharacter Two:\t\t" + characterTwo + "<br />");
        document.write("\tCharacter Three:\t" + characterThree + "<br /><br />");
    
        // Sort the characters
        if (characterOne > characterTwo) {
            swap = characterOne;
            characterOne = characterTwo;
            characterTwo = swap;
        }
    
        if (characterTwo > characterThree) {
            swap = characterTwo;
            characterTwo = characterThree;
            characterThree = swap;
        }
    
        if (characterOne > characterTwo) {
            swap = characterOne;
            characterOne = characterTwo;
            characterTwo = swap;
        }
    
        // Display the sorted characters
        document.write("Sorted Characters<br />");
        document.write("\tCharacter One:\t\t" + characterOne + "<br />");
        document.write("\tCharacter Two:\t\t" + characterTwo + "<br />");
        document.write("\tCharacter Three:\t" + characterThree + "<br />");
    }
    