function demoJavaScriptCode() {
    "use strict";

    // DEMO CODE STARTS AFTER THIS LINE:

    // We put variables up here before anything else.
    let name;
    let count;

    // We assign data to the variables.
    name = "Fred";
    count = 10;

    // Once all of our variables are declared we can start
    // our logic code.

    document.write("Hello, " + name + "!");

    /*
       It's good to have lots of lines like this that
       explain our code. For example the next line of code
       puts an HTML line break tag on our page.
    */

    document.write("<br />");

    document.write("Your count is " + count);

    // The next line of code is what we call "Commented out".
    // This means that we don't want it to run but we don't
    // want to delete it.

    //alert("Yo, " + name + "!");

}