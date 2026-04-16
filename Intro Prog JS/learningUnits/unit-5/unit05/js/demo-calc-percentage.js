/*
    The purpose of this function is to
    calculate the percentage amount.
*/
function convertFractionToPercentage(numerator, denominator) {
    "use strict";

    // Declare variables
    let result;
    let resultRounded;

    // Calculate Percentage
    if (denominator !== 0) {
        result = (numerator / denominator) * 100;
    } else {
        result = 0;
    }

    resultRounded = result.toFixed(1);

    return resultRounded;
}

/*
    The purpose of this function is to obtain
    the inputs from the HTML form and check
    for numeric values.
*/
function getValueFromFormFieldById(elementId) {
    "use strict";

    let formField;
    let formValue;

    formField = document.getElementById(elementId);

    formValue = formField.value;

    if (isNumeric(formValue)) {
        formValue = Number(formValue);
        return formValue;
    } else {
        alert("Please enter a valid number.");
        return false;
    }
}

/*
    The purpose of this function is to
    output a formatted percentage.
*/
function outputPercentage(percentage) {
    "use strict";

    let output;
    let invalidMessage = "Invalid Fraction";

    // Get the output element
    output = document.getElementById("percentageOutput");

    // Output the percent to the page
    if (percentage !== 0) {
        output.innerHTML = "Percentage: " + percentage + "%";
    } else {
        output.innerHTML = invalidMessage;
    }

}

/*
    The purpose of this function is to
    control the calculate percentage program.
*/
function calculatePercentage() {
    "use strict";

    // Declare variables
    let numerator;
    let denominator;
    let percentage;

    numerator = getValueFromFormFieldById("numeratorId");
    denominator = getValueFromFormFieldById("denominatorId");

    if (numerator === false || denominator === false) {
        return false;
    }

    // Get the percentage from the convertFractionToPercentage function
    percentage = convertFractionToPercentage(numerator, denominator);

    outputPercentage(percentage);

    return false;

}
