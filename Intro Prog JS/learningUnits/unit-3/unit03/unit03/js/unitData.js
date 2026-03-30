/******************************************************************************

Filename: unitData.js
Purpose: This file contains Classes to assist in 
         learning JavaScript Looping.
******************************************************************************/

//*************************************************
/*
    Utility Functions
*/

/*
    This function will determine if the test value contains 
    a valid number. The input can be a number or a string.
*/
function isNumeric(testValue) {
    "use strict";
    
    return !isNaN(parseFloat(testValue)) && isFinite(testValue);
}