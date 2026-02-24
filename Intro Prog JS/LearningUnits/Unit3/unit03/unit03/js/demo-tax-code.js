function taxCode() {

    // Process Customer Record

    // Constant Declarations
    const STATE_TAX_RATE = 0.05;
    const STATE_COUNTY_TAX_RATE = 0.055;
    const SPECIAL_TAX_RATE = 0.07;

    const TAX_EXEMPT_CODE = 0;
    const STATE_TAX_ONLY_CODE = 1;
    const STATE_COUNTY_TAX_CODE = 2;
    const SPECIAL_TAX_CODE = 3;

    // Variable Declarations
    let customerName;
    let purchaseAmountEntry;
    let purchaseAmount;
    let taxCodeEntry;
    let taxCode;
    let salesTax;
    let totalAmount;

    // Get input from user
    customerName = prompt("Enter Customer Name");
    purchaseAmountEntry = prompt("Enter Purchase Amount");
    taxCodeEntry = prompt("Enter Tax Code (0, 1, 2, or 3)");

    // Convert entered numbers
    if (isNumeric(purchaseAmountEntry)) {
        purchaseAmount = Number(purchaseAmountEntry);
    } else {
        alert("Entered Value for purchase amount was not numeric.");
        return;
    }

    if (isNumeric(taxCodeEntry)) {
        taxCode = Number(taxCodeEntry);
    } else {
        alert("Entered value for tax code was not numeric.");
        return;
    }


    // Calculate sales tax
    if (taxCode === TAX_EXEMPT_CODE) {
        salesTax = 0;
    } else if (taxCode === STATE_TAX_ONLY_CODE) {
        salesTax = purchaseAmount * STATE_TAX_RATE;
    } else if (taxCode === STATE_COUNTY_TAX_CODE) {
        salesTax = purchaseAmount * STATE_COUNTY_TAX_RATE;
    } else if (taxCode === SPECIAL_TAX_CODE) {
        salesTax = purchaseAmount * SPECIAL_TAX_RATE;
    }

    // Calculate purchase amount
    totalAmount = purchaseAmount + salesTax;

    // Print the purchase to the page
    document.write("Purchase for " + customerName + ":<br /><br />");
    document.write("Amount: $" + purchaseAmount.toFixed(2) + "<br />");
    document.write("Sales Tax: $" + salesTax.toFixed(2) + "<br />");
    document.write("Total: $" + totalAmount.toFixed(2));
}
