"use strict";

const getColor = (type, color) => {
    switch (type) {
        case "slider":
            return document.getElementById(`s${color}`);
        case "output":
            return document.getElementById(`o${color}`);
    }
}

const update = () => {
	let vRed = getColor("slider", "Red").value;
	let vGreen = getColor("slider", "Green").value;
	let vBlue = getColor("slider", "Blue").value;

	document.getElementById("preview").style.backgroundColor=`rgb(${vRed},${vGreen},${vBlue})`;
    getColor("output", "Red").innerText = vRed;
    getColor("output", "Green").innerText = vGreen;
    getColor("output", "Blue").innerText = vBlue;
}

const createSwatch = () => {
	let vRed = getColor("slider", "Red").value;
	let vGreen = getColor("slider", "Green").value;
	let vBlue = getColor("slider", "Blue").value;

    let swatch = document.createElement("div");
    swatch.style = `display: inline-block; margin: 5px; width: 75px; height: 75px; background-color: rgb(${vRed},${vGreen},${vBlue});`;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.style = "float: right; width: 20px; height: 20px; font-size: 0.5em;"
    deleteBtn.addEventListener("click", removeSwatch);

    swatch.appendChild(deleteBtn);
    document.getElementById("swatches").appendChild(swatch);
}

const removeSwatch = (thisEvent) => {
    thisEvent.target.parentElement.parentElement.removeChild(thisEvent.target.parentElement);
}

const setup = () => {
    update();

	let sliders = document.getElementsByClassName("slider");
    sliders = ParseToArr(sliders);

    sliders.forEach(element => {
        element.addEventListener("input", update);
    });

    document.getElementById("save").addEventListener("click", createSwatch);
}
window.addEventListener("load", setup);