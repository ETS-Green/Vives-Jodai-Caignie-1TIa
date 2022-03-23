"use strict";

const fetchGemeentes = () => {
    let input = prompt("Gemeente:", "stop");
    let output = [];
    if (input !== "stop") {
        output.push(input);
        output = output.concat(fetchGemeentes());
        return output;
    } else {
        return output;
    }
}

const outputList = () => {
    let list = fetchGemeentes().sort();
    let selectElement = document.getElementById("gemeenten");

    for (let i = 0; i < list.length; i++) {
        selectElement.innerHTML += `<option>${list[i]}</option>`;
    }
}

const setup = () => {
    outputList();
}

window.addEventListener('load', setup);