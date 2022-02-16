"use strict";

let input = document.getElementById("input");

const isPrime = (number) => {
    for (let i = 2; i < Math.ceil(number/2); i++) {
        if (number%i === 0) return false;
    }
    return true;
}

const firstPrimes = () => {
    let i = 2;
    let found = 0;
    let output = "";
    let result = 0;
    while (found < 10) {
        if (isPrime(i)) {
            found++;
            output += " " + i;
            result += i;
        }
        i++;
    }
    return `${output} sum = ${result}`;
}
document.getElementById("primes").innerHTML = firstPrimes(input.value);

input.addEventListener("keyup", (event) => {
    if (event.key === 'Enter'){
        document.getElementById("output").innerHTML = isPrime(input.value);
    }
});