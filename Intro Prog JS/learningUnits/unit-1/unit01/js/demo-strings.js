function demoStrings() {
    // String Variables

    // Declare some variables
    let tabInThisVariable;
    let aNewLineInTheMiddle;

    tabInThisVariable = "This is a tab\tand this is after it";
    aNewLineInTheMiddle = "This line has a newline\nin its middle.";

    // Declare a mystery variable
    let mysteryString;
    let whatWillThisBe;

    mysteryString = "This is a string";
    whatWillThisBe = mysteryString.length;

    // Display the contents of a variable followed by two blank lines
    document.write(tabInThisVariable);

    // Add a newline after the line above and then an extra blank line
    document.write("\n\n");

    // Display a variable with a \n in its middle
    document.write(aNewLineInTheMiddle);

    // Add a newline after the line above and then an extra blank line
    document.write("\n\n");

    // Display the mystery variable with text in front of it and
    // <br /> tags after it
    document.write("The mystery variable is ");
    document.write(whatWillThisBe);
    document.write("<br /><br />");

    // Display the mystery variable with a concatenation,
    // we'll learn about this in the next learning unit.
    document.write("Here's it is again " + whatWillThisBe + "<br />");
}
