"use strict";

const setup = () => {
    let nodeList = ParseToArr(document.querySelectorAll("p"));
    nodeList.forEach(element => {element.innerText = "Good Job!";});
}

window.addEventListener('load', setup);