function lab03() {
    "use strict";

    // Initialize constants
    const STATE_TAX_AMOUNT = 0.05;
    const CITY_TAX_AMOUNT = 0.03;

    // Declare Variables
    let retailPrice;
    let stateSalesTax;
    let citySalesTax;
    let totalWithTax;
    
    // Assign values to variables
    retailPrice = Number(prompt("Enter a number for RetailPrice:"));

    // Calculate sales tax
    stateSalesTax = STATE_TAX_AMOUNT * retailPrice;
    citySalesTax = CITY_TAX_AMOUNT * retailPrice;
    totalWithTax = retailPrice + stateSalesTax + citySalesTax;

    // Display three variables and their sum
    document.writeln("retailPrice: $" + retailPrice);
    document.writeln("stateSalesTax: $" + stateSalesTax);
    document.writeln("citySalesTax: $" + citySalesTax);
    document.writeln("totalWithTax: $" + totalWithTax);
}