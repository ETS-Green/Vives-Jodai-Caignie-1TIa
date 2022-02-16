"use strict";

document.getElementById("btnSubstr").onclick = () => {
    let inputTxt = document.getElementById("inString");
    let num1 = document.getElementById("inNum1");
    let num2 = document.getElementById("inNum2");
    let outputTxt = document.getElementById("outString");

    let result = `) = (${String(inputTxt.value).substring(num1.value, num2.value)})`;
    outputTxt.innerHTML = result;
}