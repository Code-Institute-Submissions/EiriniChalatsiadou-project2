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
function addX() {
    //add class x to element
    this.classList.add('player-X-icon');
    //call computerTurn
    computerTurn();
}

function addEventListeners() {
    // take all elements with class tile
    let tiles = document.getElementsByClassName('tile');
    // for loop to take each element
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', addX);
    }
}
addEventListeners();
// This is the function for decide the Winner
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
        const winningCombination = winningTiles[i];
        //check if X is winning
        const winnerIsX = checkWinnerPlayer(winningCombination, 'X');
        // if player x is winner return winnerX
        if (winnerIsX === true) {
            return winnerX;
        }
        //check if O is winning
        const winnerIsO = checkWinnerPlayer(winningCombination, 'O');
        // if player O is winner return winnerO
        if (winnerIsO === true) {
            return winnerO;
        }
    }

    if (isDraw() === true) {
        return winnerDRAW;
    } else {
        return null;
    }

}

console.log('Decided winner test', decideWinner());

//need to check if draw
function isDraw() {
    //get all tiles
    let tiles = document.getElementsByClassName('tile');
    //for each tile
    for (let i = 0; i < tiles.length; i++) {
        //check if X class exist for tile i
        const tileHasX = tiles[i].classList.contains('player-X-icon');
        //check if O class exist for tile i
        const tileHasO = tiles[i].classList.contains('player-O-icon');
        //if both are false then return null
        if (tileHasX === false && tileHasO === false) {
            return false;
        }
    }

    //outside loop return winnerDRAW
    return true;
}

//Here is the function for checkWinnerPlayerX

function checkWinnerPlayer(winningPositions, playerIcon) {
    let tiles = document.getElementsByClassName('tile');
    let position1 = winningPositions[0];
    let position2 = winningPositions[1];
    let position3 = winningPositions[2];

    let position1HasPlayerIcon = tiles[position1].classList.contains('player-' + playerIcon + '-icon');
    let position2HasPlayerIcon = tiles[position2].classList.contains('player-' + playerIcon + '-icon');
    let position3HasPlayerIcon = tiles[position3].classList.contains('player-' + playerIcon + '-icon');

    //here is the result if its true
    let result = (position1HasPlayerIcon === true) && (position2HasPlayerIcon === true) && (position3HasPlayerIcon === true)

    return result;
}


function startGame() {

    //clears board
    clearBoard();
    if (Math.random() > 0.5) {
        //player x turn
        playerTurn();
    } else {
        // player 0 turn
        computerTurn();
    }
}

function playerTurn() {
    //show player  x turn div
    let XplayerTurn = document.getElementById("display-player-x-turn");
    XplayerTurn.classList.remove("hide");
}

function computerTurn() {
    //computer's Turn
    let computerTurn = document.getElementById("display-player-x-turn");
    computerTurn.classList.add("hide");
    playerTurn();
    //TODO: hide player x turn
    //calculateMove();
    //TODO: call playerTurn

}

//calculateMove

//thereIsAWinner
//  blinkWinningRow
//  makeWinningSound
//NEED DO: fix effect on click board

//???random be x or o