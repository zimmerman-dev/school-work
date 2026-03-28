function lab03() {
    "use strict";

    // Declare Variables
    let totalRecords;
    let totalItems;
    let currentNumber;
    let currentDescription;
    let currentStockAmount;

    let itemRecords;

    // Open the Inventory Items Records and make them
    // available to the script
    itemRecords = openInventoryItemsRecords();

    document.write("The Inventory Items Record Set:<br /><br />");

    totalRecords = 0;
    totalItems = 0;

    // Read the next record, test to see if there
    // is a next record and then output it
    while (itemRecords.readNextRecord()) {
        currentNumber = itemRecords.getItemNumber();
        currentDescription = itemRecords.getItemDescription();
        currentStockAmount = itemRecords.getItemStockAmount();

        document.write(currentNumber + "\t" + currentDescription
                + "\t" + currentStockAmount + "<br />");

        totalItems += currentStockAmount;
        totalRecords++;

    }
    
    // Display total records and total stock amount
    document.writeln("\nTotal records: " + totalRecords);
    document.writeln("Total stock amount: " + totalItems);
}