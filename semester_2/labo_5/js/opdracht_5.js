"use strict";

const checkSmoker = () => {
    let element = document.getElementById("roker");
    switch (element.checked) {
        case true:
            console.log("is een roker")
            break;
        case false:
            console.log("is geen roker");
            break;
        default:
            console.log("no data");
            break;
    }
}

const checkLang = () => {
    let elements = document.getElementsByName("moedertaal");
    elements.forEach(element => {if(element.checked){console.log(`moedertaal is ${element.value}`)}});
}

const checkNeighbour = () => {
    let element = document.getElementById("buurland");
    console.log(`favoriete buurland is ${element.options[element.selectedIndex].value}`);
}

const checkOrder = () => {
    let output = "bestelling bestaat uit "
    let elements = document.getElementById("bestelling").options;
    ParseToArr(elements).forEach(element => {if(element.selected){output += element.value + " "}});
    console.log(output);
}

const checkData = () => {
    console.clear();
    checkSmoker();
    checkLang();
    checkNeighbour();
    checkOrder();
}

const setup = () => {
    document.getElementById("submit").addEventListener("click", checkData);
}

window.addEventListener('load', setup);