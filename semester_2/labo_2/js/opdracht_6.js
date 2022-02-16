"use strict";

let btnKopieer = document.getElementById("btnKopieer");

const kopieer = () => { 
    let txtInput = document.getElementById("txtInput"); 
    let tekst = txtInput.value;
    document.getElementById("txtOutput").innerHTML = tekst;
}

btnKopieer.addEventListener("click", kopieer);

