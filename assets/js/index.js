//This is the function for clearBoard
function clearBoard() {
    let tiles = document.getElementsByClassName('tile');
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].classList.remove("player-O-icon");
        tiles[i].classList.remove("player-X-icon");
    }
}
const winnerX = "WINNER-X";
const winnerO = "WINNER-O";
const winnerDRAW = "WINNER-DRAW";

//This is the function for increaseByOneResultBoard
function increaseByOneResultBoard(result) {
    if (result === winnerX) {
        let winx = document.getElementById("win-X").innerHTML;
        document.getElementById("win-X").innerHTML = Number(winx) + 1;
    } else if (result === winnerO) {
        let wino = document.getElementById("win-O").innerHTML;
        document.getElementById("win-O").innerHTML = Number(wino) + 1;
    } else if (result === winnerDRAW) {
        let draw = document.getElementById("draw").innerHTML;
        document.getElementById("draw").innerHTML = Number(draw) + 1;
    }
}
//show x to board
function addXorO() {
    //add class x to element
    this.classList.add('player-X-icon');
}

function addEventListeners() {

    // take all elements witl class tile
    let tiles = document.getElementsByClassName('tile');
    console.log(tiles);
    // for loop to take each element
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', addXorO);
    }
}
addEventListeners();
//add clearboard on reset click


//calculateMove
//startGame()

//decideWinner()
//thereIsAWinner
//  blinkWinningRow
//  makeWinningSound
//NEED DO: fix effect on click board