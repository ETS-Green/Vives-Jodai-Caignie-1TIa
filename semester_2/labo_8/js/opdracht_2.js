"use strict";

let student1 = {
    firstname: "Jan",
    lastname: "Janssens",
    birthdate: new Date("1993-12-31"),
    adress: {
        street: "Kerkstraat 13",
        postcode: 8500,
        district: "Kortrijk"
    },
    isMember: true,
    namesOfExes: ["Sofie", "Berta", "Philip", "Albertoooo"],
    amountCars: 2
};

const enterJson = () => {
    let input = document.getElementById("input").value;
    let json = JSON.parse(input);
    console.log(json.birthdate);
}

const setup = () => {
    let output = JSON.stringify(student1);
    console.log(output);

    document.querySelector("button").addEventListener("click", enterJson);
};
window.addEventListener("load", setup);