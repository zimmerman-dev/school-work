function lab02() {
    "use strict";

    // Variable Declarations
    let testVariable;
    let firstName;
    let lastName;
    let twentyFive;
    let seventyTwo;
    let ten;
    let thirty;
    let sum;

    // Variable Assignment
    testVariable = 2;
    firstName = "Fred";
    lastName = "Flintstone";
    twentyFive = 25;
    seventyTwo = 72;
    ten = "10";
    

    // Output Section
    document.write("Here's a fine error.");
    document.write("<br />");

    document.write("She said, \"Hi.\"");
    document.write("<br />");

    document.write(twentyFive * seventyTwo);
    document.write("<br />");

    document.write(twentyFive * ten); // This one is tricky. What happened?
    document.write("<br>The sum of " + twentyFive + " and " 
            + seventyTwo + " is ");
    document.write(twentyFive + seventyTwo);

    thirty = Number("30");
    sum = thirty + 7;
    document.write("<br>thirty seven: " + sum);

    
}