"use strict";

let output = document.getElementById("output");

const calculate = () => {
    let sum = 0;
    let i = 0;
    let n1 = 0;
    let n2 = 1;
    while (i < 4000000) {
        i = n1 + n2;
        console.log(i);
        n1 = n2;
        n2 = i;

        if (i%2 === 0) {
            sum += i;
        }
    }
    return(sum);
}

output.innerHTML = calculate();