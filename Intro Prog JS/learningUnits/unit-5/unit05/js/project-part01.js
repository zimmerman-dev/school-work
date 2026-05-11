// Function that checks the Zip Code exists in array.
function zipCodeCheck(zipCode, uniqueZipCodes) {
    let index;

    for (index = 0; index < uniqueZipCodes.length; index++) {
        if (zipCode === uniqueZipCodes[index]) {

            // returns the index if found
            return index;
        }
    }
    // Returns -1 if not found
    return -1;
}

// Function that creates and returns an html talbe
function createTable(uniqueZipCodes, zipCodeCount) {
    let index;
    let tableHTML;

    // table header
    tableHTML = "<table>";
    tableHTML += "<tr>";
    tableHTML += "<th>Zip Code</th>";
    tableHTML += "<th>Count</th>";
    tableHTML += "</tr>";

    // loops through array to create to table rows
    for (index = 0; index < uniqueZipCodes.length; index++) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + uniqueZipCodes[index] + "</td>";
        tableHTML += "<td>" + zipCodeCount[index] + "</td>";
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    return tableHTML;
}

// Controller funftion
function part01() {
    "use strict";

    // Declare Variables
    let output;
    let records;
    let uniqueZipCodes = [];
    let zipCodeCount = [];
    let zipCode;
    let zipIndex;


    // Assign Variables
    records = openZipCodeStudyRecordSet();
    output = document.getElementById("part01Output");



    // Loop through records
    while (records.readNextRecord()) {
        zipCode = records.getSampleZipCode();

        // Assign zipIndex either -1, or return the index
        zipIndex = zipCodeCheck(zipCode, uniqueZipCodes);

        // Count occurrences
        if (zipIndex === -1) {
            uniqueZipCodes.push(zipCode);
            zipCodeCount.push(1);
        } else {
            zipCodeCount[zipIndex] = zipCodeCount[zipIndex] + 1;
        }
    }

    // Display Table with unique zip codes
    output.innerHTML = createTable(uniqueZipCodes, zipCodeCount);
}