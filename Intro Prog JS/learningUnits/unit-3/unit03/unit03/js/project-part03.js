function part03() {
    "use strict";

    // Const declaration
    const GUEST_COUNT_LOWER_THRESHOLD = 2;
    const GUEST_COUNT_MIDDLE_THRESHOLD = 4;
    const GUEST_COUNT_UPPER_THRESHOLD = 6;
    const PAYMENT_TYPE_CHECK = "ck";
    const PAYMENT_TYPE_CARD = "cc";
    const DISCOUNT_LOWER_RATE = 0.15;
    const DISCOUNT_MIDDLE_RATE = 0.1;
    const DISCOUNT_UPPER_RATE = 0.05;
    const ROOM_RATE_LOWEST_PER_NIGHT = 50.00;
    const ROOM_RATE_MIDDLE_PER_NIGHT = 60.00;
    const ROOM_RATE_HIGHEST_PER_NIGHT = 70.00;
    const PAYMENT_PROCESSING_RATE = 0.04;
    const ERROR_MESSAGE = "Input Error! Try again...";
    
    // Variable declaration
    let guestCount;
    let membershipHolder;
    let paymentType;
    let initialFee;
    let finalFee;

    // Prompt user for guest count
    guestCount = prompt("How many guests are staying in one room? 1-6:");

    if (guestCount === null 
        || guestCount.length <= 0 
        || !isNumeric(guestCount)
        || Number(guestCount) <= 0 
        || Number(guestCount) > GUEST_COUNT_UPPER_THRESHOLD) {
            alert(ERROR_MESSAGE);
            return;
        }

        guestCount = Number(guestCount);
    
    // Prompt user for membership status
    membershipHolder = prompt("Are any of the guests AAA members, (y)es/(n)o:");

    if (membershipHolder === null 
        || membershipHolder.length <= 0 
        || (membershipHolder !== "y" 
            && membershipHolder !== "n")) {
            alert(ERROR_MESSAGE);
            return;
        }

    // Prompt user for payment type
    paymentType = prompt("What payment method is being used? Check (ck) or Card (cc):");

    if (paymentType === null 
        || paymentType.length <= 0 
        || (paymentType !== PAYMENT_TYPE_CHECK 
        && paymentType !== PAYMENT_TYPE_CARD)) {
            alert(ERROR_MESSAGE);
            return;
        }

    // Logical calculations

    // Groups 1,2
    if (guestCount <= GUEST_COUNT_LOWER_THRESHOLD) {

        if (membershipHolder === "y") {
            initialFee = ROOM_RATE_LOWEST_PER_NIGHT - (ROOM_RATE_LOWEST_PER_NIGHT * DISCOUNT_LOWER_RATE);

            if (paymentType === PAYMENT_TYPE_CARD) {
                finalFee = initialFee + (initialFee * PAYMENT_PROCESSING_RATE);

            } else {
                finalFee = initialFee;
            }
        
        } else if (membershipHolder === "n") {
            initialFee = ROOM_RATE_LOWEST_PER_NIGHT;
            
            if (paymentType === PAYMENT_TYPE_CARD) {
                finalFee = initialFee + (initialFee * PAYMENT_PROCESSING_RATE);
            
            } else {
                finalFee = initialFee;
            }
        }
    
    // Groups 3,4
    } else if (guestCount <= GUEST_COUNT_MIDDLE_THRESHOLD) {

        if (membershipHolder === "y") {
            initialFee = ROOM_RATE_MIDDLE_PER_NIGHT - (ROOM_RATE_MIDDLE_PER_NIGHT * DISCOUNT_MIDDLE_RATE);

            if (paymentType === PAYMENT_TYPE_CARD) {
                finalFee = initialFee + (initialFee * PAYMENT_PROCESSING_RATE);

            } else {
                finalFee = initialFee;
            }
        
        } else if (membershipHolder === "n") {
            initialFee = ROOM_RATE_MIDDLE_PER_NIGHT;
            
            if (paymentType === PAYMENT_TYPE_CARD) {
                finalFee = initialFee + (initialFee * PAYMENT_PROCESSING_RATE);
            
            } else {
                finalFee = initialFee;
            }
        }

    // Group 5,6
    } else {
        
        if (membershipHolder === "y") {
            initialFee = ROOM_RATE_HIGHEST_PER_NIGHT - (ROOM_RATE_HIGHEST_PER_NIGHT * DISCOUNT_UPPER_RATE);
            console.log(initialFee);

            if (paymentType === PAYMENT_TYPE_CARD) {
                finalFee = initialFee + (initialFee * PAYMENT_PROCESSING_RATE);
                console.log(finalFee);

            } else {
                finalFee = initialFee;
                console.log(finalFee);
            }
        
        } else if (membershipHolder === "n") {
            initialFee = ROOM_RATE_HIGHEST_PER_NIGHT;
            
            if (paymentType === PAYMENT_TYPE_CARD) {
                finalFee = initialFee + (initialFee * PAYMENT_PROCESSING_RATE);
            
            } else {
                finalFee = initialFee;
            }
        }        
    }

    // Display the cost per night
    document.writeln("Total cost per night is $" + finalFee.toFixed(2));
}