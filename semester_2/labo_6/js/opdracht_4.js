"use strict";

const appendNewP = () => {
    let newP = document.createElement("p");
    newP.innerText = "some text";
    document.getElementsByTagName("div")[0].appendChild(newP);
}

const setup = () => {
    let btn = document.createElement("button");
    btn.style = "margin-bottom: 10px;";
    btn.innerText = "Add P";
    document.getElementsByTagName("body")[0].appendChild(btn);
    document.getElementsByTagName("button")[0].addEventListener("click", appendNewP);
}

window.addEventListener('load', setup);