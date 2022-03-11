"use strict";

const Calculate = () => {
    for (let i = 1; i < 4; i++) {
        let prijs = document.querySelector(`#product${i} td:nth-child(2)`).innerText;
        let aantal = document.querySelector(`#product${i} td:nth-child(3)`).innerText;
        let btw = document.querySelector(`#product${i} td:nth-child(4)`).innerText;
        let subtot = document.querySelector(`#product${i} td:nth-child(5)`).innerText;

        prijs = parseFloat(prijs.substring(1,3));
        aantal = parseInt(aantal, 10);
        btw = parseInt(aantal, 10)/100;

        subtot = prijs * aantal + (prijs * aantal * btw);
    }
}

const setup = () => {
    document.getElementById("herbereken").addEventListener("click", Calculate);
}
window.addEventListener("load", setup);