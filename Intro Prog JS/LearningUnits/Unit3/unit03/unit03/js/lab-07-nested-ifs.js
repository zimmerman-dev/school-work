function lab07Part01() {
    "use strict";

    // Constant Declaration
    const ERROR_MESSAGE = "Input error, try again";

    // Variable Declaration
    let enteredName;
    let enteredCode;
    let outputMessage;
    // Prompt user
    enteredName = prompt("Enter your name:");
    enteredCode = prompt("Enter a code A, B, C, or D:");

    // Validate
    if (enteredName === null 
        || enteredName.length <= 0 
        || isNumeric(enteredName) 
        || enteredCode === null 
        || enteredCode.length <= 0 
        || isNumeric(enteredCode)) {
        alert(ERROR_MESSAGE);
        return;
    }

    enteredCode = enteredCode.toUpperCase();

    // Logic
    if (enteredCode === "A") {
        outputMessage = "Hello, " + enteredName + ", how are you?";
    } else if (enteredCode === "B") {
        outputMessage = "Top of the morning to you, " + enteredName + "!";
    } else if (enteredCode === "C") {
        outputMessage = "Hi, " + enteredName + ".";
    } else if (enteredCode === "D") {
        outputMessage = enteredName + " is here! Welcome!";
    } else {
        outputMessage = ERROR_MESSAGE;
    }

    // Display
    document.writeln(outputMessage);
}

function lab07Part02() {
    "use strict";

    // Constant Declaration
    const VANILLA = "V";
    const CHOCOLATE = "C";
    const STRAWBERRY = "S";
    const ERROR_MESSAGE = "We don't have that ice cream";

    //Variable Declaration
    let iceCreamChoice;
    let toppingChoice;
    let iceCream;
    let topping;
    let outputMessage;

    // Prompt for ice cream
    iceCreamChoice = prompt("Choose your ice cream:\n" 
        + "V = Vanilla\n" 
        + "C = Chocolate\n" 
        + "S = Strawberry");
    
    iceCreamChoice = iceCreamChoice.toUpperCase();

    // Logic calculation
    if (iceCreamChoice === VANILLA) {
        iceCream = "vanilla";

        toppingChoice = prompt("Choose a topping:\n" 
            + "M = M&Ms\n" 
            + "RP = Reese's Pieces");
        
        toppingChoice = toppingChoice.toUpperCase();

        if (toppingChoice === "M") {
            topping = "M&Ms";
        } else if (toppingChoice === "RP") {
            topping = "Reese's Pieces";
        } else {
            topping = "no toppings";
        }
    } else if (iceCreamChoice === CHOCOLATE) {
        iceCream = "chocolate";

        toppingChoice = prompt("Choose a topping:\n" 
            + "B = Brownies\n" 
            + "W = Walnuts");
        
        toppingChoice = toppingChoice.toUpperCase();

        if (toppingChoice === "B") {
            topping = "brownies";
        } else if (toppingChoice === "W") {
            topping = "walnuts";
        } else {
            topping = "no toppings";
        }
    } else if (iceCreamChoice === STRAWBERRY) {
        iceCream = "strawberry";

        toppingChoice = prompt("Choose a topping:\n" 
            + "P = Pecans\n" 
            + "A = Almonds");
        
        toppingChoice = toppingChoice.toUpperCase();

        if (toppingChoice === "P") {
            topping = "pecans";
        } else if (toppingChoice === "A") {
            topping = "almonds";
        } else {
            topping = "no toppings";
        }
    } else {
        alert(ERROR_MESSAGE);
    }

    // build final message
    outputMessage = "You are having " 
    + iceCream + " ice cream with " 
    + topping + ". Enjoy!";

    document.writeln(outputMessage);
}