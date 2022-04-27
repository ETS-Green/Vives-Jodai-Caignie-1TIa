"use strict";

let personen=[];
let persoonIdx = -1;

const getIdx = (id) => {
    return parseInt(id.substring(1));
};

const maakNieuwePersoon = () => {
    let nieuwePersoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        famillienaam: document.getElementById("txtFamilienaam").value,
        geboortedatum: new Date(document.getElementById("txtGeboorteDatum").value),
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value
    }
    personen.push(nieuwePersoon);
    let newLine = document.createElement("option");
    newLine.id = `o${personen.length - 1}`;
    newLine.innerText = `${nieuwePersoon.voornaam} ${nieuwePersoon.famillienaam}`;
    
    return newLine;
};

const bewerkPersoon = (idx) => {
    let nieuwePersoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        famillienaam: document.getElementById("txtFamilienaam").value,
        geboortedatum: new Date(document.getElementById("txtGeboorteDatum").value),
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value
    }
    personen[idx] = nieuwePersoon;
    let selectElement = document.getElementById("lstPersonen");
    selectElement.options[selectElement.selectedIndex].innerText = `${nieuwePersoon.voornaam} ${nieuwePersoon.famillienaam}`;
};

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    if (document.querySelectorAll(".invalid").length === 0) {
        if (persoonIdx === -1) {
            document.getElementById("lstPersonen").appendChild(maakNieuwePersoon());
        } else {
            bewerkPersoon(persoonIdx);
        }
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let list = document.querySelectorAll("input");
    list.forEach(element => {
        if (element.type != "button") element.value = "";
    });

    persoonIdx = -1;
};

const laadPersoon = (e) => {
    let idx = parseInt(e.target.options[e.target.selectedIndex].id.substring(1));
    document.getElementById("txtVoornaam").value = personen[idx].voornaam;
    document.getElementById("txtFamilienaam").value = personen[idx].famillienaam;
    document.getElementById("txtGeboorteDatum").value = personen[idx].geboortedatum.toISOString().substring(0, 10);
    document.getElementById("txtEmail").value = personen[idx].email;
    document.getElementById("txtAantalKinderen").value = personen[idx].aantalKinderen;

    persoonIdx = idx;
};

const sortList = () => {
    let list = document.getElementById("lstPersonen");
    let optionList = list.options;
    let optionArray = [];
    for (let i = 0; i < optionList.length; i++) {
        optionArray.push(optionList[i]);
    }

    optionArray.sort((a, b) => {
        if (a.innerText > b.innerText) return 1;
        else if (a.innerText < b.innerText) return -1;
        else return 0;
    });

    list.innerHTML = "";
    optionArray.forEach(element => list.appendChild(element));
};

const deleteOption = () => {
    let list = document.getElementById("lstPersonen");
    if (list.selectedIndex >= 0) {

        let oldIdx = getIdx(list.options[list.selectedIndex].id);
        list.removeChild(list.options[list.selectedIndex]);
        personen.splice(oldIdx, 1);

        for (let i = 0; i < list.options.length; i++) {
            let thisIdx = getIdx(list.options[i].id);
            if (thisIdx > oldIdx) {
                list.options[i].id = `o${thisIdx - 1}`;
            }
        }
    }
};

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnSort = document.getElementById("btnSort");
    btnSort.addEventListener("click", sortList);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let btnDelete = document.getElementById("btnDelete");
    btnDelete.addEventListener("click", deleteOption);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", laadPersoon);
};

window.addEventListener("load", setup);