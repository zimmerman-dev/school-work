function lab05() {
    "use strict";

    // Variable Declarations
    let widgetPrice;
    let widgetQuantity;
    let widgetTotal;
    let dodadPrice;
    let dodadQuantity;
    let dodadTotal;
    let gadgetPrice;
    let gadgetQuantity;
    let gadgetTotal;
    let totalPrice;
    let totalQuanity;
    let weightedMean;

    // Variable Assignment
    widgetPrice = Number(prompt("Enter a price for the widget:"));
    widgetQuantity = Number(prompt("Enter a quanity:"));
    dodadPrice = Number(prompt("Enter a price for dodad:"));
    dodadQuantity = Number(prompt("Enter a quanity:"));
    gadgetPrice = Number(prompt("Enter a price for gadget:"));
    gadgetQuantity = Number(prompt("Enter a quanity:"));

    // Calculations for totals and average price
    widgetTotal = widgetPrice * widgetQuantity;
    dodadTotal = dodadPrice * dodadQuantity;
    gadgetTotal = gadgetPrice * gadgetQuantity;
    totalPrice = widgetTotal + dodadTotal + gadgetTotal;
    totalQuanity = widgetQuantity + dodadQuantity + gadgetQuantity;
    weightedMean = totalPrice / totalQuanity;

    // Display your findings
    document.writeln("Widgets: " + widgetQuantity + " @ " + widgetPrice + " for $" + widgetTotal);
    document.writeln("Dodads: " + dodadQuantity + " @ $" + dodadPrice + " for $" + dodadTotal);
    document.writeln("Gadget: " + gadgetQuantity + " @ $" + gadgetPrice + " for $" + gadgetTotal);

    document.writeln("Total Price: $" + totalPrice);
    document.writeln(""); // line space
    document.writeln("Average Price (weighted mean): $" + weightedMean);
}
