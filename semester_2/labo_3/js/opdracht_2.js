"use strict";

const update = () => {
	let vRed = document.getElementById("sRed").value;
	let vGreen = document.getElementById("sGreen").value;
	let vBlue = document.getElementById("sBlue").value;

	document.getElementById("preview").style.backgroundColor=`rgb(${vRed},${vGreen},${vBlue})`;
    document.getElementById("oRed").innerText = vRed;
    document.getElementById("oGreen").innerText = vGreen;
    document.getElementById("oBlue").innerText = vBlue;
}

const setup = () => {
    update();

	let sliders = document.getElementsByClassName("slider");
    sliders = ParseToArr(sliders);

    sliders.forEach(element => {
        element.addEventListener("input", update);
    });
}
window.addEventListener("load", setup);