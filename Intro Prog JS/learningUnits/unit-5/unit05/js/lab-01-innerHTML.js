function lab01() {
    "use strict";

    // Variable Declaration
    let clientTable;
    let clientRow;

    // Assign Variables
    clientTable = document.getElementById("clientListBody");
    clientRow = "";

    // Client Input
    clientRow += "<tr><td>Alice</td><td>Crane</td><td>23</td></tr>";
    clientRow += "<tr><td>Steve</td><td>Willis</td><td>30</td></tr>";
    clientRow += "<tr><td>James</td><td>Smith</td><td>10</td></tr>";
    clientRow += "<tr><td>Melissa</td><td>Frank</td><td>45</td></tr>";

    clientTable.innerHTML = clientRow;
}