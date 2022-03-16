"use strict";

const findAnFirst = (string) => {
    let result = 0;
    let search = true;
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf("an", i) != -1) {
            result++;
            i = string.indexOf("an", i);
        }
    }
    console.log("via indexOf: " + result);
}
const findAnLast = (string) => {
    let result = 0;
    let search = true;
    for (let i = string.length - 1; i > 0; i--) {
        if (string.lastIndexOf("an", i) != -1) {
            result++;
            i = string.lastIndexOf("an", i);
        }
    }
    console.log("via lastIndexOf: " + result);
}



const setup = () => {
    let test = "De man van An geeft geen hand aan ambetante verwanten";
    findAnFirst(test.toLowerCase());
    findAnLast(test.toLowerCase());
}

window.addEventListener('load', setup);