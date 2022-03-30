"use strict";

const appendNewP = () => {
    let newP = document.createElement("p");
    newP.innerText = "some text";
    document.getElementsByTagName("div")[0].appendChild(newP);
}

const setup = () => {
    document.getElementsByTagName("button")[0].addEventListener("click", appendNewP);
}

window.addEventListener('load', setup);