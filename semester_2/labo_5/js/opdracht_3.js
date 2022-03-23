"use strict";


const setup = () => {

    let string1 = "s";
    let string2 = "o";
    console.log(string1 == string2);
    console.log(string1 === string2);

    let sliced = "some string".slice(5,6);
    console.log(string1 == sliced);
    console.log(string1 === sliced);

    let concatinated = string1.concat(string2);
    console.log(sliced == concatinated);
    console.log(sliced === concatinated);
}

window.addEventListener('load', setup);