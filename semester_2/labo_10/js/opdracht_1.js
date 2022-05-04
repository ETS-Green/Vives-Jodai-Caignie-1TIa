"use strict";

let global = {
    cardCounter: 0,
    history: []
};

class historyItem {
    constructor (title, text, url) {
        this.text = text;
        this.url = url;
    
        switch (title) {
            case "/g ":
                this.title = "Google";
                break;
            case "/y ":
                this.title = "Youtube";
                break;
            case "/t ":
                this.title = "Twitter";
                break;
            case "/i ":
                this.title = "Instagram";
                break;
        }
    }
};

const saveHistory = () => {
    localStorage.setItem("history", JSON.stringify(global.history));
};

const loadHistory = () => {
    let localHistory = localStorage.getItem("history");
    if (localHistory !== null) global.history = JSON.parse(localHistory);

    for (let i = 0; i < global.history.length; i++) {
        appendCard(global.history[i].title, global.history[i].text, global.history[i].url);
    }
};

const runCommand = () => {
    /*
        validate command
        open site
        add to history
        empty input
    */

    let commandInput = document.getElementById("commandInput");
    let command = commandInput.value.substring(0, 3);
    let search = commandInput.value.substring(3);
    
    let prefix = validateCommand(command);
    if (prefix === "ERROR 00") {
        alert("ERROR 00\nall commands need to start with \"/\"");
    } else if (prefix === "ERROR 01") {
        alert("ERROR 01\n" + `${command.substring(1,2)} is not a valid command! try g,y,t or i`);
    } else if (prefix === "ERROR 02") {
        alert("ERROR 02\nDon't forget a space between the command and the search parameters");
    } else {
        let link = prefix + search.replaceAll(" ", "+");
        window.open(link, '_blank');

        global.history.push(new historyItem(command, search, link));

        let idx = global.history.length - 1;
        appendCard(global.history[idx].title, global.history[idx].text, global.history[idx].url);

        saveHistory();
    }

    commandInput.value = "";
};

const validateCommand = (command) => {
    switch (command) {
        case "/g ":
            return "https://www.google.com/search?q=";
        case "/y ":
            return "https://www.youtube.com/results?search_query=";
        case "/t ":
            return "https://twitter.com/hashtag/";
        case "/i ":
            return "https://www.instagram.com/explore/tags/";
        default:
            return checkError(command);
    }
};

const checkError = (command) => {
    if (command.substring(2) !== " ") return "ERROR 02";
    if (command.substring(0, 1) !== "/") return "ERROR 00";
    return "ERROR 01";
};

const getColor = (title) => {
    switch (title) {
        case "Google":
            return "#4285f4";
        case "Youtube":
            return "#ff0000";
        case "Twitter":
            return "#1da1f2";
        case "Instagram":
            return "#c32aa3";
        default:
            return "#505050";
    }
};

const createCard = (title, text, url) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style = `background-color: ${getColor(title)}; margin-bottom: 10px;`;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = title;
    cardBody.appendChild(cardTitle);
    
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = text;
    cardBody.appendChild(cardText);

    let cardUrl = document.createElement("a");
    cardUrl.classList.add("btn");
    cardUrl.classList.add("btn-secondary");
    cardUrl.innerText = "Go!";
    cardUrl.href = url;
    cardBody.appendChild(cardUrl);

    card.appendChild(cardBody);
    return card;
};

const appendCard = (title, text, url) => {
    let parent = document.getElementById("history");
    if (document.querySelectorAll(".col-4").length < 3) {
        let newCol = document.createElement("div");
        newCol.classList.add("col-4");
        parent.appendChild(newCol);
    }
    
    document.querySelectorAll(".col-4")[global.cardCounter%3].appendChild(createCard(title, text, url));

    global.cardCounter++;
};

const setup = () => {
    loadHistory();
    document.querySelector("button").addEventListener("click", runCommand);
};
window.addEventListener("load", setup);