"use strict";

let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "../img/opdracht_1/",
    IMAGE_PATH_SUFFEX: ".png",

    MOVE_DELAY: 3000,

    score: 0,
    timeoutId: 0,

    gameEnded: true
};

const startGame = (e) => {
    if (global.gameEnded) {
        imageJump();
        e.target.innerText = "stop game";
        global.gameEnded = false;
    } else {
        gameOver();
    }

}

const imageClick = (e) => {
    let idx = parseInt(e.target.src.slice(-5));
    switch (idx) {
        case 0:
            gameOver();
            break;
        default:
            global.score++;
            document.getElementById("score").innerText = global.score.toString();
            imageJump();
            break;
    }
}

const imageJump = () => {
    clearTimeout(global.timeoutId);

    let playfield = document.getElementById("playField");
    let image = document.createElement("img");
    
    playfield.innerHTML = '';
    image.src = global.IMAGE_PATH_PREFIX + (Math.round(Math.random() * 4)).toString() + global.IMAGE_PATH_SUFFEX;

    image.style.position = "absolute";
    image.style.top = (50 + Math.random() * (800 - global.IMAGE_SIZE)).toString() + "px";
    image.style.left = (5 + Math.random() * (600 - global.IMAGE_SIZE)).toString() + "px";

    image.style.width = global.IMAGE_SIZE;
    image.style.height = global.IMAGE_SIZE;

    image.addEventListener("click", imageClick);
    document.getElementById("playField").appendChild(image);
    global.timeoutId = setTimeout(imageJump, 1000);
}

const gameOver = () => {
    global.gameEnded = true;
    clearTimeout(global.timeoutId);

    document.getElementById("playField").innerHTML = '';
    document.querySelector("button").innerText = "start game";

    alert(`Game Over score: ${global.score}`);
    global.score = 0;
    document.getElementById("score").innerText = global.score.toString();
}

const setup = () => {
    document.querySelector("button").addEventListener("click", startGame);
};




window.addEventListener("load", setup);