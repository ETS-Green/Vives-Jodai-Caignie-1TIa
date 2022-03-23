"use strict";

const replaceDe = () => {
    let string = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let output = "";
    while (string.length != 0) {
        let i = 0;
        if (string.indexOf(" de ", i) != -1) {
            i = string.indexOf(" de ", i);
            output += string.substring(0, i) + " het ";
            string = string.substring(i + 4);
        } else {
            output += string;
            string = "";
        }
    }
    console.log(output);
}

const setup = () => {
    replaceDe();
}

window.addEventListener('load', setup);