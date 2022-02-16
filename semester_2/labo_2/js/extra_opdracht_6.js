"use strict";

const setup = () => {
	let input = document.getElementById("input");
	input.addEventListener("keyup", (event) => {
        if (event.key === 'Enter'){
            document.getElementById("output").innerHTML = isSchrikkel(input.value);
        }
    });
}

const isSchrikkel = (year) => year%4===0 && (year%100!=0 || year%100===0&&year%400===0);

window.addEventListener('load',setup);