function lab07Part01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    document.write("(5 < 5) false");
    document.write("<br />");
    document.write("(100 > 10) true");
    document.write("<br />");
    document.write("(\"ten\" < \"twelve\") true");
    document.write("<br />");
    document.write("(\"ten\" < \"eleven\") true");
    document.write("<br />");
    document.write("(100 <= 101) true");
    document.write("<br />");
    document.write("(\"2\" <= 5) true");
    document.write("<br />");
    document.write("(1997 >= 1997) true");
    
}

function lab07Part02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Declare variables
    let results1;
    let results2;
    let results3;
    let results4;
    let results5;
    let results6;
    let results7;
    let results8;

    // Uncomment the below lines. 
    // calculate boolean results to match the 
    // boolean value on the right side
    // The first one is done for you

    results1 = 5 >= 5;              // true
    results2 = 5 > 5;               // false
    results3 = "a" <= "b";          // true
    results4 = 100 < 99;            // false
    results5 = "100" <= 100;        // true
    results6 = 0 > 10;              // false
    results7 = "100" < "99";        // true
    results8 = "A" < 92;            // false

    // Output boolean results
    document.writeln("(5 >= 5) --> " + results1);
    document.writeln("(5 > 5) --> " + results2);
    document.writeln("(\"a\" <= \"b\") --> " + results3);
    document.writeln("(100 < 99) --> " + results4);
    document.writeln("(\"100\" <= 100) --> " + results5);
    document.writeln("(0 > 10) --> " + results6);
    document.writeln("(\"100\" < \"99\") --> " + results7);
    document.writeln("(\"A\" < 92) --> " + results8);
}