"use strict";

const checkName = () => {
    let input = document.getElementById("name");
    let content = input.value.trim();
    let errorField = document.getElementById("errorName");
    let output = content.length < 30;

    if (!output) {
        input.classList.add("error");
        errorField.innerText = "max 30 karakters";
    } else {
        input.classList.remove("error");
        errorField.innerText = '';
    }

    return output;
}

const checkFamName = () => {
    let input = document.getElementById("famName");
    let content = input.value.trim();
    let errorField = document.getElementById("errorFamName");
    let output = content.length > 0 && content.length < 50;

    if (!output) {
        input.classList.add("error");
        if (content.length > 0) {
            errorField.innerText = "max 50 karakters";
        } else {
            errorField.innerText = "verplicht veld";
        }
    } else {
        input.classList.remove("error");
        errorField.innerText = '';
    }

    return output;
}

const isDate = (date) => {
    for (let i = 0; i < date.length; i++) {
        if (i < 4) {
            if (isNaN(date[i])) return false;
        } else if (i === 4) {
            if (date[i] !== "-") return false;
        } else if (i < 7) {
            if (isNaN(date[i])) return false;
        } else if (i === 7) {
            if (date[i] !== "-") return false;
        } else {
            if (isNaN(date[i])) return false;
        }
    }
    return true;
}

const checkDate = () => {
    let input = document.getElementById("date");
    let content = input.value.trim();
    let errorField = document.getElementById("errorDate");
    let output = content.length > 0 && isDate(content);

    if (!output) {
        input.classList.add("error");
        if (content.length <= 0) {
            errorField.innerText = "verplicht veld";
        } else {
            errorField.innerText = "formaat is niet jjjj-mm-dd";
        }
    } else {
        input.classList.remove("error");
        errorField.innerText = '';
    }

    return output;
}

const isMail = (mail) => {
    let i = mail.indexOf("@", 0);
    if (i === -1) return false;
    if (mail.indexOf("@", i + 1) !== -1) return false;
    if (i === 0 || i === mail.length - 1) return false;
    return true;
}

const checkEmail = () => {
    let input = document.getElementById("email");
    let content = input.value.trim();
    let errorField = document.getElementById("errorEmail");
    let output = content.length > 0 && isMail(content);

    if (!output) {
        input.classList.add("error");
        if (content.length <= 0) {
            errorField.innerText = "verplicht veld";
        } else {
            errorField.innerText = "geen geldig email adres";
        }
    } else {
        input.classList.remove("error");
        errorField.innerText = '';
    }

    return output;
}

const checkKids = () => {
    let input = document.getElementById("kids");
    let content = input.value.trim();
    let errorField = document.getElementById("errorKids");
    let output = !isNaN(content) && content < 99 && content >= 0;

    if (!output) {
        input.classList.add("error");
        if (isNaN(content)) {
            errorField.innerText = "is geen positief getal";
        } else {
            errorField.innerText = "is te vruchtbaar";
        }
    } else {
        input.classList.remove("error");
        errorField.innerText = '';
    }

    return output;
}


const validate = () => {
    let success = true;
    if (!checkName()) success = false;
    if (!checkFamName()) success = false;
    if (!checkDate()) success = false;
    if (!checkEmail()) success = false;
    if (!checkKids()) success = false;

    if (success) window.alert("Proficiat!");
}

const setup = () => {
    document.getElementById("validate").addEventListener("click", validate);
}

window.addEventListener('load', setup);