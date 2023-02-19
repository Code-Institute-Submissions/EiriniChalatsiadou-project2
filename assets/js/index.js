//This is the function for clearBoard
function clearBoard() {
    let tiles = document.getElementsByClassName('tile');
    for (let i=0; i<tiles.length; i++) {
        tiles[i].classList.remove("player-O-icon");
        tiles[i].classList.remove("player-X-icon");
    }
}

// clearBoard();

//startGame()

//decideWinner()

//setWinsX

//setWinsO

//setDraw

//calculateMove