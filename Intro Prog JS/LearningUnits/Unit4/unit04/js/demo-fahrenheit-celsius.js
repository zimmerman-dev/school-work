function convertFahrenheit() {
    "use strict";


    // Declare Constants
    const INITIAL_VALUE = 0;
    const LOOP_LIMIT = 5;
    const FINAL_MESSAGE = "All temperatures processed";

    // Declare variables
    let loopCounter;
    let currentFahrenheitTemperature;
    let currentCelsiusTemperature;

    // Initialize the counter
    loopCounter = INITIAL_VALUE;

    // Get user data, convert to Celsius and display
    while (loopCounter < LOOP_LIMIT) {
        currentFahrenheitTemperature = prompt("Enter Fahrenheit "
                + "temperature number " + (loopCounter + 1)
                + " of " + LOOP_LIMIT);

        currentFahrenheitTemperature = Number(currentFahrenheitTemperature);
        currentCelsiusTemperature = (currentFahrenheitTemperature - 32)
                * (5 / 9);

        document.write(currentFahrenheitTemperature
                + " degrees Fahrenheit " + "is "
                + currentCelsiusTemperature
                + " degrees Celsius.<br />");

        loopCounter++;
    }

    // Output the final message
    document.write(FINAL_MESSAGE);
}
