"use strict";

let output = "";
let left = 0;
let right = 0;
let result = "UNDEFINED";
let isLeft = true;
let isDone = false;
let operand = "";

const clear = () => {
    output = "";
    left = 0;
    right = 0;
    result = "UNDEFINED";
    document.getElementById("screen").innerHTML = output;
    isLeft = true;
    isDone = false;
}

for (let i = 0; i <= 9; i++) {
    let id = String("btn" + i);
    document.getElementById(id).onclick = () => {
        if (isDone) {
            clear();
            isDone = false;
        }
        output += String(i);
        if (isLeft) {
            left *= 10;
            left += i;
        } else {
            right *= 10;
            right += i;
        }
        document.getElementById("screen").innerHTML = output;
    }
}

document.getElementById("btndiv").onclick = () => {
    operand = "/";
    isLeft = false;
    output += " / ";
    document.getElementById("screen").innerHTML = output;
}
document.getElementById("btnmul").onclick = () => {
    operand = "*";
    isLeft = false;
    output += " * ";
    document.getElementById("screen").innerHTML = output;
}
document.getElementById("btnsub").onclick = () => {
    operand = "-";
    isLeft = false;
    output += " - ";
    document.getElementById("screen").innerHTML = output;
}
document.getElementById("btnadd").onclick = () => {
    operand = "+";
    isLeft = false;
    output += " + ";
    document.getElementById("screen").innerHTML = output;
}

document.getElementById("btnclr").onclick = () => {
    clear();
}

document.getElementById("btnentr").onclick = () => {
    switch (operand) {
        case "/":
            result = left/right;
            break;
        case "*":
            result = left*right;
            break;
        case "-":
            result = left-right;
            break;
        case "+":
            result = left+right;
            break;
        default:
            break;
    }
    output += " = " + result;
    document.getElementById("screen").innerHTML = output;
    isDone = true;
}

