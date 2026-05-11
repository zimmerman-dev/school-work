/*
    The purpose of this function is to 
*/

function displayFormattedAddress() {
    "use strict";

    // Declare variables
    let output;
    let form;
    let streetAddress;
    let city;
    let state;
    let zipCode;
    let formattedAddress;

    // Get output and form objects
    output = document.getElementById("lab05OutputId");
    form = document.getElementById("lab05FormId");

    // Get values from form fields
    streetAddress = form.address.value;
    city = form.city.value;
    state = form.state.value;
    zipCode = form.zipCode.value;

    // Format address and store it in variable
    formattedAddress = streetAddress + "<br>" + city + ", " + state + " " + zipCode;

    // output the result
    output.innerHTML = formattedAddress;

    return false;
}
    
