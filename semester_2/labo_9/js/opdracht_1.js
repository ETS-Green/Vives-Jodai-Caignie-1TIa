"use strict";

let colorpicker = {
    red: 0,
    green: 0,
    blue: 0,
    saved: []
};

const getColor = (type, color) => {
    switch (type) {
        case "slider":
            return document.getElementById(`s${color}`);
        case "output":
            return document.getElementById(`o${color}`);
    }
};

const update = () => {
    colorpicker.red = getColor("slider", "Red").value;
    colorpicker.green = getColor("slider", "Green").value;
    colorpicker.blue = getColor("slider", "Blue").value;

    document.getElementById("preview").style.backgroundColor=`rgb(${colorpicker.red},${colorpicker.green},${colorpicker.blue})`;

    getColor("output", "Red").innerText = colorpicker.red;
    getColor("output", "Green").innerText = colorpicker.green;
    getColor("output", "Blue").innerText = colorpicker.blue;

    exportData();
};

const addSwatch = () => {
    colorpicker.saved.push([colorpicker.red, colorpicker.green, colorpicker.blue]);

    exportData();
    createSwatches();
};

const createSwatches = () => {
    //empty old swatches
    let swatches = document.getElementById("swatches");
    swatches.innerHTML = "";

    //create new swatches from saved array
    for (let i = 0; i < colorpicker.saved.length; i++) {
        let swatch = document.createElement("div");
        swatch.style = `display: inline-block; margin: 5px; width: 75px; height: 75px; background-color: rgb(${colorpicker.saved[i][0]},${colorpicker.saved[i][1]},${colorpicker.saved[i][2]});`;
        swatch.name = i.toString();

        let deleteBtn = document.createElement("button");
        deleteBtn.style = "float: right; width: 20px; height: 20px; font-size: 0.5em;"
        deleteBtn.innerText = "X";
        deleteBtn.addEventListener("click", removeSwatch);

        swatch.appendChild(deleteBtn);
        document.getElementById("swatches").appendChild(swatch);
    }
};

const removeSwatch = (thisEvent) => {
    let swatch = thisEvent.target.parentElement;
    let idx = parseInt(swatch.name);
    colorpicker.saved.splice(idx, 1);

    exportData();
    createSwatches();
};

const exportData = () => {
    let jsonOUT = JSON.stringify(colorpicker);
    localStorage.setItem("colorpicker", jsonOUT);
};

const importData = () => {
    let jsonIN = localStorage.getItem("colorpicker");
    if (jsonIN.length) {
        colorpicker = JSON.parse(jsonIN);
        
        getColor("slider", "Red").value = colorpicker.red;
        getColor("slider", "Green").value = colorpicker.green;
        getColor("slider", "Blue").value = colorpicker.blue;

        createSwatches();
    }    
};

const setup = () => {
    //localStorage.setItem("colorpicker", "");

    importData();
    update();

	let sliders = document.getElementsByClassName("slider");
    sliders = ParseToArr(sliders);

    sliders.forEach(element => {
        element.addEventListener("input", update);
    });

    document.getElementById("save").addEventListener("click", addSwatch);
};
window.addEventListener("load", setup);