//Creating the gameboard array and indexing the cells
gameBoard = document.querySelectorAll(".cell");

i = 0;
gameBoard.forEach(element => {
    element.dataset.index = i;
    i++;
});

//Selecting the announcement board
announce = document.querySelector(".subheader");

//selecting the reset button
reset = document.querySelector(".button");

reset.addEventListener('click', () => {
    x.clearBoard();
});

//Creating the gameboard class
Gameboard = (cells) => {
    const getIndex = (index) => cells[index];
    const clearBoard = () => cells.forEach((element) => {
        element.innerText = "";
        element.classList.remove("win");
        announce.innerText = "Click on a cell to start playing";
    });
    return { cells, getIndex, clearBoard };
};

//Creating the gameboard as an object
let x = Gameboard(gameBoard);

//Adding event listeners
x.cells.forEach((element) => {

    element.addEventListener('click', (e) => {

        if (e.target.innerText == "" && announce.innerText == "Click on a cell to start playing") {
            element.innerText = "X";
            computerMoveRand();

            if (checkWinner("X") == "X") {
                announce.innerText = "You Win!";
            } else if (checkWinner("O") == "O") {
                announce.innerText = "Computer Wins.";
            }
        };
    });
});

//Computer Move function
computerMoveRand = () => {

    openSpaces = [];

    x.cells.forEach((element) => {

        if (element.innerText == "") {
            openSpaces.push(element);
        }
    });

    if (openSpaces.length > 0) {
        randMoveIndex = Math.floor(Math.random() * openSpaces.length);
        openSpaces[randMoveIndex].innerText = "O";
    };


};

//winner checker function
checkWinner = (move) => {


    //Checking Rows
    if (gameBoard[0].innerText == move && gameBoard[1].innerText == move && gameBoard[2].innerText == move) {
        gameBoard[0].classList.add("win");
        gameBoard[1].classList.add("win");
        gameBoard[2].classList.add("win");
        return move;
    } else if (gameBoard[3].innerText == move && gameBoard[4].innerText == move && gameBoard[5].innerText == move) {
        gameBoard[3].classList.add("win");
        gameBoard[4].classList.add("win");
        gameBoard[5].classList.add("win");
        return move;
    } else if (gameBoard[6].innerText == move && gameBoard[7].innerText == move && gameBoard[8].innerText == move) {
        gameBoard[6].classList.add("win");
        gameBoard[7].classList.add("win");
        gameBoard[8].classList.add("win");
        return move;
    };

    //Checking Columns
    if (gameBoard[0].innerText == move && gameBoard[3].innerText == move && gameBoard[6].innerText == move) {
        gameBoard[0].classList.add("win");
        gameBoard[3].classList.add("win");
        gameBoard[6].classList.add("win");
        return move;
    } else if (gameBoard[1].innerText == move && gameBoard[4].innerText == move && gameBoard[7].innerText == move) {
        gameBoard[1].classList.add("win");
        gameBoard[4].classList.add("win");
        gameBoard[7].classList.add("win");
        return move;
    } else if (gameBoard[2].innerText == move && gameBoard[5].innerText == move && gameBoard[8].innerText == move) {
        gameBoard[2].classList.add("win");
        gameBoard[5].classList.add("win");
        gameBoard[8].classList.add("win");
        return move;
    };


    //Checking Diagonals
    if (gameBoard[0].innerText == move && gameBoard[4].innerText == move && gameBoard[8].innerText == move) {
        gameBoard[0].classList.add("win");
        gameBoard[4].classList.add("win");
        gameBoard[8].classList.add("win");
        return move;
    } else if (gameBoard[2].innerText == move && gameBoard[4].innerText == move && gameBoard[6].innerText == move) {
        gameBoard[2].classList.add("win");
        gameBoard[4].classList.add("win");
        gameBoard[6].classList.add("win");
        return move;
    };

};
