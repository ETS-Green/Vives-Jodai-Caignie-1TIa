"use strict";

const findTrigram = () => {
    let string = "onoorbaar";
    for (let i = 0; i < string.length - 3; i++) {
        console.log(string.substring(i, i + 3));
    }
}

const setup = () => {
    findTrigram();
}
window.addEventListener('load', setup);