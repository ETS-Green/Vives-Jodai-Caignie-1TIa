"use strict";

const calculate = () => {
    let today = new Date();
    let inputY = parseInt(document.getElementById("inputYear").value);
    let inputM = parseInt(document.getElementById("inputMonth").value);
    let inputD = parseInt(document.getElementById("inputDay").value);

    let birthday = new Date(inputY, (inputM - 1), inputD);

    let difference = today.getTime() - birthday.getTime();

    const msPerDay = 24 * 60 * 60 * 1000;
    difference = Math.round(difference/msPerDay);

    console.log(difference);
}

const setup = () => {
    document.querySelector("button").addEventListener("click",calculate);
};
window.addEventListener("load", setup);