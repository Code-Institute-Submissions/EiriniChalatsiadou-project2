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

function decideWinner() {
    let winningTiles = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningTiles.length; i++) {
        chechWinnerPlayerX()
    }
}

// function chechWinnerPlayerX(winningPositions) {
//     let tiles = document.getElementsByClassName('tile');
//     let position1 = winningPositions[0];
//     let position2 = winningPositions[1];
//     let position3 = winningPositions[2];

//     let position1HasX = tiles[position1].classList.contains('player-X-icon');
//     let position2HasX = tiles[position2].classList.contains('player-X-icon');
//     let position3HasX = tiles[position3].classList.contains('player-X-icon');

//     let result = (position1HasX === true) && (position2HasX === true) && (position3HasX === true)
//     return result;

// }

//  checkWinnerPlayerX([3, 4, 5]);




//calculateMove
//startGame()

//decideWinner()
//thereIsAWinner
//  blinkWinningRow
//  makeWinningSound
//NEED DO: fix effect on click board