"use strict";

const maakMetSpaties = () => {
    let string = document.getElementById("input").value;
    let output = string[0];
    for (let i = 1; i < string.length; i++) {
        if (string[i] != ' ') {
            output += " " + string[i];
        }
    }
    console.log(output);
}

const setup = () => {
    document.getElementById("btn").addEventListener("click", maakMetSpaties);
}
window.addEventListener('load', setup);