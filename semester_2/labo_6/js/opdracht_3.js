"use strict";


const setup = () => {
    let style = document.createElement("style");
    style.innerHTML = ".listitem { color:red; }";
    document.getElementsByTagName("head")[0].appendChild(style);

    let nodeList = ParseToArr(document.querySelectorAll("li"));
    nodeList.forEach(element => {element.className = "listitem";});

    let image = document.createElement("img");
    image.src = "../img/SBP_logo.png";
    image.style = "width:100px;";
    document.getElementsByTagName("h1")[0].insertAdjacentElement("afterend", image);

}

window.addEventListener('load', setup);