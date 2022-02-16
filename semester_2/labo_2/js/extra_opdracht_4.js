"use strict";

let output = document.getElementById("output");

const calculate = () => {
    let sum = 0;
    let log = "";
    for (let i = 5; i < 1000; i++) {
        if (i%3 === 0 || i%5 ===0) {
            console.log(`${sum} + ${i} = ${sum + i}`);
            sum += i;
            log += " " + i;
        }
    }
    return `The sum of [${log}] is ${sum}`;
}

output.innerHTML = calculate();