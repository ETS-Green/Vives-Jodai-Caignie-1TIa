"use strict";

let global = {
    IMAGE_PATH: "../img/opdracht_2/card",
    IMAGE_SUFFIX: ".png",

    ROW_SIZE: 4,
    COLUMN_SIZE: 3,
    CARD_COUNT: 6,

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

const setupBoard = () => {
    for (let i = 0; i < (global.ROW_SIZE * global.COLUMN_SIZE); i++) {
        global.BOARD.push(i%global.CARD_COUNT);
    }
    global.BOARD = shuffle(global.BOARD);
    for (let i = 0; i < global.BOARD.length; i++) {
        let card = document.createElement("img");

        card.id = "pos" + i.toString();
        card.src = "../img/opdracht_2/back.png";

        card.classList.add("card");

        card.addEventListener("click", selectCard);

        document.getElementById(`row${i%global.COLUMN_SIZE + 1}`).appendChild(card);
    }
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
        if (global.SELECTED.length === (global.ROW_SIZE*global.COLUMN_SIZE)/global.CARD_COUNT) {
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