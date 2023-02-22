//This is the function for clearBoard
function clearBoard() {
    let tiles = document.getElementsByClassName('tile');
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].classList.remove("player-O-icon");
        tiles[i].classList.remove("player-X-icon");
        tiles[i].classList.remove("blink");
    }
}
const winnerX = "WINNER-X";
const winnerO = "WINNER-O";
const winnerDRAW = "WINNER-DRAW";

const winningTiles = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

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
    this.removeEventListener('click', addX, false);
    //decide winner if exists
    const winner = decideWinner();
    if (winner === null) {
        //call computerTurn
        computerTurn();
    } else {
        endGame(winner);
    }
}
//function for the endGame winner
function endGame(winner) {
    if (winner === winnerX || winner === winnerO) {
        //winning sound
        playSound();
        //call blink 
        blink(winner);

    }
    //update winner board
    increaseByOneResultBoard(winner);
    removeEventListeners();
    const button = document.getElementById('reset');
    button.disabled = false;
    button.innerHTML = '<b>Reset</b>';
}

//function for the playsound
function playSound() {
    let mySound = new Audio('./assets/sounds/tada.mp3');
    mySound.play();
}

function addEventListeners() {
    // take all elements with class tile
    let tiles = document.getElementsByClassName('tile');
    // for loop to take each element
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', addX);
    }
}

// disable all clicks / remove all evenetListeners with click addX
function removeEventListeners() {
    // take all elements with class tile
    let tiles = document.getElementsByClassName('tile');
    // for loop to take each element
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].removeEventListener('click', addX, false);
    }
}

function addEventListeners() {
    // take all elements with class tile
    let tiles = document.getElementsByClassName('tile');
    // for loop to take each element
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', addX);
    }
}


function blink(winner) {
    const winningCombination = returnWinningCombination(winner);
    const tiles = document.getElementsByClassName('tile');

    tiles[winningCombination[0]].classList.add('blink');
    tiles[winningCombination[1]].classList.add('blink');
    tiles[winningCombination[2]].classList.add('blink');
}

function returnWinningCombination(winner) {
    let player = null;

    if (winner === winnerX) {
        player = 'X';
    } else {
        player = 'O';
    }
    
    for (let i = 0; i < winningTiles.length; i++) {
        const winningCombination = winningTiles[i];
        //check if X is winning
        const isWinningCombination = checkWinnerPlayer(winningCombination, player);
        // if player x is winner return winnerX
        if (isWinningCombination === true) {
            return winningCombination;
        }
    }

    return [];
}

// This is the function for decide the Winner
function decideWinner() {

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
    //if is Draw true
    if (isDraw() === true) {
        return winnerDRAW;
    } else {
        return null;
    }
}

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
        //if both are false then no draw - game still playing
        if (tileHasX === false && tileHasO === false) {
            return false;
        }
    }

    //is draw
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
    let result = (position1HasPlayerIcon === true) && (position2HasPlayerIcon === true) && (position3HasPlayerIcon === true);

    return result;
}

//here is the function for startGame
function startGame() {
    //clears board
    clearBoard();
    addEventListeners();
    if (Math.random() > 0.5) {
        //player x turn
        playerTurn();
    } else {
        // player 0 turn
        computerTurn();
    }
    const button = document.getElementById('reset');
    button.disabled = true;
}
//function for show nad hide Message
function showTurnMessage(player) {
    let element = document.getElementById('display-player-' + player + '-turn');
    element.classList.remove("hide");
}

function hideTurnMessage(player) {
    let element = document.getElementById('display-player-' + player + '-turn');
    element.classList.add("hide");
}

function playerTurn() {
    //show player x turn div
    showTurnMessage('x');
    //show player o turn div
    hideTurnMessage('o');
}

function computerTurn() {
    //hide player x turn
    hideTurnMessage('x');
    //show player o turn
    showTurnMessage('o');
    //computer's Turn
    setTimeout(calculateMove, 100);
}

//calculateMove
function calculateMove() {
    //create new array for empty tiles
    const emptyTiles = [];
    //get all tiles
    let tiles = document.getElementsByClassName('tile');
    //for each tile 
    for (let i = 0; i < tiles.length; i++) {
        //check if tile has player x or o classlist.contains
        const isIconO = tiles[i].classList.contains("player-O-icon");
        const isIconX = tiles[i].classList.contains("player-X-icon");
        //if doesn'e contain any of then those push this element to empty tiles array
        if (isIconO === false && isIconX === false) {
            emptyTiles.push(tiles[i]);
        }
    }
    //from empty tiles array choose one element at random
    const randomEmptyTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    // to this element add the o player class    
    randomEmptyTile.classList.add("player-O-icon");
    //cant be clicked anymore to addX
    randomEmptyTile.removeEventListener('click', addX, false);

    const winner = decideWinner();
    if (winner !== null) {
        endGame(winner);
    } else {
        playerTurn();
    }
}