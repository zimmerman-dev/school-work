// Global Constants
const INITIAL_VALUE = 0;
const BASIC_USAGE = 60;
const BASIC_RATE = 2.0;
const HIGH_USAGE_RATE = 1.75;
const HIGH_OVER_RATE = 1.5;

// Global Variables
let totalCustomers;
let totalAmountOwed;
let customerNumber;
let customerName;
let address;
let gasUsage;
let amountOwed;
let records;
let tableOutput; // variable to hold all the table output

/*
    The purpose of the function is to
    output the totals to the page.
*/
function printGasTotals() {
    "use strict";

    totalAmountOwed = totalAmountOwed.toFixed(2);

    // Add the totals to the display variable
    tableOutput += "<tr><td colspan='5'><strong>Total Customers: "
            + totalCustomers 
            + "</strong></td></<td>"
            + "<tr><td colspan='5'><strong>Total Amount Owed: $"
            + totalAmountOwed 
            + "</strong></td></tr>";
}


/*
    The purpose of this function is to
    print one customer record with calculations to the page as an HTML table row.
*/
function printCustomerDetails() {
    "use strict";

    customerNumber  = records.getCustomerNumber();
    customerName = records.getCustomerName();
    address = records.getCustomerAddress();

    gasUsage = gasUsage.toFixed(1);
    amountOwed = amountOwed.toFixed(2);

    // add each customer row to the display variable
    tableOutput += "<tr><td>"
            + customerNumber
            + "</td><td>"
            + customerName
            + "</td><td>"
            + address
            + "</td><td>"
            + gasUsage
            + "</td><td>$"
            + amountOwed
            + "</td></tr>";

    totalCustomers++;
}

/*
    The purpose of this function is to 
    calculate the amount owed by one customer.
*/
function calculateAmountOwed() {
    "use strict";

    gasUsage = records.getCustomerGasUsage();

    if (gasUsage <= BASIC_USAGE) {
        amountOwed = gasUsage * BASIC_RATE;
    } else {
        amountOwed = (BASIC_USAGE * HIGH_USAGE_RATE)
                + ((gasUsage - BASIC_USAGE) * HIGH_OVER_RATE);
    }

    totalAmountOwed += amountOwed;
}

/*
    The purpose of this function is to
    initialize any variables that need it.
*/
function performInitialProcessing() {
    "use strict";

    amountOwed = INITIAL_VALUE;
    totalCustomers = INITIAL_VALUE;
    totalAmountOwed = INITIAL_VALUE;

}

/* 
    The purpose of this function is to start the output
    with a header and table headings
*/
function startTable() {
    "use strict";

    // output main heading
    document.write("<h3>Gas Billing Results</h3>");

    // start the table output in display variable
    tableOutput = "<table><tr><th>Customer Number</th>"
            + "<th>Customer Name</th>"
            + "<th>Address</th>"
            + "<th>Gas Used</th>"
            + "<th>Amount Owed</th>"
            + "</tr>";
}
/*
    The main controlling function
*/
function billGasCustomers() {
    "use strict";
    startTable();
    performInitialProcessing();

    records = openCustomerGasUsageRecords();

    while (records.readNextRecord()) {
        calculateAmountOwed();
        printCustomerDetails();
    }

    printGasTotals();

    // close table in display variable
    tableOutput += "</table>";

    // output table
    document.write(tableOutput);
}