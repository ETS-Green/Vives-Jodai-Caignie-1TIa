"use strict";

let inputD = document.getElementById("inputDecimal");

const convertDecimal = (year, output = "") => {
    if (year >= 1000) {
        year -= 1000;
        output += "M";
    } else if (year >= 500) {
        year -= 500;
        output += "D";
    } else if (year >= 100) {
        year -= 100;
        output += "C";
    } else if (year >= 50) {
        year -= 50;
        output += "L";
    } else if (year >= 10) {
        year -= 10;
        output += "X";
    } else if (year >= 5) {
        year -= 5;
        output += "V";
    } else if (year >= 1) {
        year -= 1;
        output += "I";
    }

    if (year != 0) output = convertDecimal(year, output);
    return output;
}

const correction = (year) => {
    let corrected = "";
    let current = "";
    let counter = 0;
    for (let i = 0; i < year.length; i++) {
        corrected += year[i];
        if (year[i] === current) {
            counter++;
            if (counter > 3) {
                corrected = corrected.substring(0,corrected.length - 3);
                switch(current) {
                    case "M":
                        return "Not a year";
                        break;
                    case "C":
                        corrected += "D";
                        break;
                    case "X":
                        corrected += "L";
                        break;
                    case "I":
                        corrected += "V";
                        break;
                    default:
                        return "ERROR";
                        break;
                }
            }
        } else {
            current = year[i];
            counter = 1;
        }
    }
    return corrected;
}

inputD.addEventListener("keyup", (event) => {
    if (event.key === 'Enter'){
        document.getElementById("outputDecimal").innerHTML = correction(convertDecimal(inputD.value));
    }
});

let inputR = document.getElementById("inputRoman");

const convertRoman = (year) => {
    let output = 0;
    for (let i = 0; i < year.length; i++) {
        let current = year[i];
        let next = year[i + 1];

        switch(current) {
            case "M":
                output += 1000;
                break;
            case "D":
                output += 500;
                break;
            case "C":
                if (next != "D") {
                    output += 100;
                } else {
                    output += 400;
                    i++;
                }
                break;
            case "L":
                output += 50;
                break;
            case "X":
                if (next != "L") {
                    output += 10;
                } else {
                    output += 40;
                    i++;
                }
                break;
            case "V":
                output +=5;
                break;
            case "I":
                if (next != "V") {
                    output++;
                } else {
                    output += 4;
                    i++;
                }
            default:
                break;
        }
    }
    return output;
}

inputR.addEventListener("keyup", (event) => {
    if (event.key === 'Enter'){
        document.getElementById("outputRoman").innerHTML = convertRoman(inputR.value);
    }
});