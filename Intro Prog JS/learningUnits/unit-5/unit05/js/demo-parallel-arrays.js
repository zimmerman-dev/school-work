function parallelArraysOne() {
    "use strict";

    let states;
    let capitals;
    let output;
    let listItems;
    let index;

    listItems = "";

    states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California"];
    capitals = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento"];

    output = document.getElementById("outputList");

    for (index = 0; index < states.length; index++) {
        listItems += "<li>" + states[index] + ": " + capitals[index] + "</li>";
    }

    output.innerHTML = listItems;
}