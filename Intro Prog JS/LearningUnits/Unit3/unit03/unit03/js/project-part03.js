function part03() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE
    
    let v1;
    let v2;
    let result;

    v1 = 5;
    v2 = 8;
    result = 0;

    if (v1 === 5) {
        if (v2 === 7) {
            result = 1;
        }
    } else {
        result = 3;
    }

    document.writeln(result);


}