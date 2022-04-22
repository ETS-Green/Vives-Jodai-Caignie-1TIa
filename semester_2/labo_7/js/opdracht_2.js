"use strict";

let global = {
    IMAGE_PATH: "../img/opdracht_2/card",
    IMAGE_SUFFIX: ".png",

    CARD_COUNT: 15, //total nr of unique cards (max 15 due to image limit)
    MATCH_COUNT: 2, //how many duplicates you need to find
    rows: 0,
    columns: 0,

    BOARD: [],
    SELECTED: [],

    paused: false,
    pauseForCorrect: false,
    timeoutId: 0
};

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
    
    while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const calculateBoardSize = () => {
    let totalAmountOfCards = global.MATCH_COUNT * global.CARD_COUNT;
    let i = Math.ceil(Math.sqrt(totalAmountOfCards));
    while (!totalAmountOfCards%i) {
        i--;
    }
    global.rows = totalAmountOfCards/i;
    global.columns = i;
}

const setupBoard = () => {
    calculateBoardSize();
    for (let i = 0; i < (global.MATCH_COUNT * global.CARD_COUNT); i++) {
        global.BOARD.push(i%global.CARD_COUNT);
    }
    global.BOARD = shuffle(global.BOARD);
    for (let r = 0; r < global.rows; r++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        for (let c = 0; c < global.columns; c++) {
            newRow.appendChild(createCard(c + (r * global.columns)));
        }
        document.getElementById("board").appendChild(newRow);
    }
}

const createCard = (idx) => {
    let card = document.createElement("img");

    card.id = "pos" + idx.toString();
    card.src = "../img/opdracht_2/back.png";

    card.classList.add("card");
    card.style.width = `${Math.min(200, document.documentElement.clientWidth/(global.columns * 1.5))}px`;

    card.addEventListener("click", selectCard);

    return card;
}

const selectCard = (e) => {
    let cardID = parseInt(e.target.id.substring(3));
    if (!e.target.classList.contains("correct")) {
        if (global.paused) {
            clearTimeout(global.timeoutId);
            if (global.pauseForCorrect) {
                turnInvisible();
            } else {
                deselectCards();
            }
        }

        if (!global.SELECTED.length || cardID !== global.SELECTED[0]) {
            global.SELECTED.push(cardID);
            e.target.src = global.IMAGE_PATH + global.BOARD[cardID] + global.IMAGE_SUFFIX;
    
            console.log(cardID);
            console.log(global.BOARD[cardID]);
        }
        if (global.SELECTED.length === global.MATCH_COUNT) {
            compareCards();
        }
    }
}

const turnInvisible = () => {
    global.SELECTED.forEach(element => document.getElementById(`pos${element}`).classList.add("invisible"));
    global.paused = false;
    global.SELECTED = [];

}

const deselectCards = () => {
    global.SELECTED.forEach(element => document.getElementById(`pos${element}`).src = "../img/opdracht_2/back.png");
    global.SELECTED.forEach(element => document.getElementById(`pos${element}`).classList.remove("incorrect"));
    global.paused = false;
    global.SELECTED = [];
}

const compareCards = () => {
    if (global.SELECTED.every(element => global.BOARD[element] === global.BOARD[global.SELECTED[0]])) {
        global.SELECTED.forEach(element => document.getElementById(`pos${element}`).classList.add("correct"));
        global.paused = true;
        global.pauseForCorrect = true;
        global.timeoutId = setTimeout(turnInvisible, 1000);
    } else {
        global.SELECTED.forEach(element => document.getElementById(`pos${element}`).classList.add("incorrect"));
        global.paused = true;
        global.pauseForCorrect = false;
        global.timeoutId = setTimeout(deselectCards, 1000);
    }
}

const setup = () => {
    setupBoard();
};
window.addEventListener("load", setup);