"use strict";

let namen = ["bob", "anne", "jorge", "smith", "anderson"];
console.log(namen.length);
console.log(`${namen[0]} ${namen[2]} ${namen[4]}`)

function VoegNaamToe() {
    namen.push(window.prompt("Voeg een naam toe","onbekend"));

    console.log(namen[5]);
}
VoegNaamToe();

console.log(String(namen));