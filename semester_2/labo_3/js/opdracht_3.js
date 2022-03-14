"use strict";

const Calculate = () => {
    let totaal = 0.0;
    for (let i = 1; i < 4; i++) {
        let prijs   = document.querySelector(`#product${i} td:nth-child(2)`).innerText;
        let aantal  = document.querySelector(`#product${i} td:nth-child(3) input`).value;
        let btw     = document.querySelector(`#product${i} td:nth-child(4)`).innerText;
        let subtot  = document.querySelector(`#product${i} td:nth-child(5)`);

        prijs = parseFloat(prijs);
        aantal = parseInt(aantal, 10);
        btw = parseFloat(btw)/100;
        let result = prijs * aantal + (prijs * aantal * btw);
        totaal += result;
        subtot.innerText = Number(result).toFixed(2) + " Eur";
    }
    document.getElementById("totaal").innerText = Number(totaal).toFixed(2) + " Eur";
}

const setup = () => {
    document.getElementById("herbereken").addEventListener("click", Calculate);
}
window.addEventListener("load", setup);