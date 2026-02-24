function part02() {
    "use strict";

    // Declare constants for the temperature offset and ratio
    const OFFSET = 32;
    const RATIO = (5 / 9);

    // Declare Variables
    let fahrenheit;
    let celsius;

    // Prompt User for temperature in Fahrenheit
    fahrenheit = Number(prompt("Enter temperature in fahrenheit"));

    // Calculate the the temperature in Celsius
    celsius = (fahrenheit - OFFSET) * (RATIO);

    // Display the temperature in Fahrenheit and Celsius
    document.writeln("Entered Fahrenheit Temperature: " + fahrenheit);
    document.writeln("Calculated Celsius Temperature: " + celsius.toFixed(0));
}
