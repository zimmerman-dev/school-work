// Displays a greeting using the city name passed in as a parameter
function displayCity(cityReceived) {
    document.getElementById("divForOutput").innerHTML += "Hey " + cityReceived 
        + ". How's the weather?";
}

function lab03() {
    "use strict";

    // Variable Definition
    let userCityName;

    // Variable Assignment
    userCityName = prompt("Enter a city name:");
    
    // Display
    displayCity(userCityName); 
}