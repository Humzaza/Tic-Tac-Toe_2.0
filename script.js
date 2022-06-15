
const GameBoard = (() => {
    'use strict';
    const board = ['1', '', '', '2', '', '', '3', '', ''];
    const playersList = [];
    const boardinit = () => { 
        renderToDivs();
        getPlayerChoice();
    };

    const getPossibleChoices = () => {
        const boxes = [];
        for (let index = 0; index < 9; index++) {
            boxes[index] = document.getElementById(index);
        }
        return boxes;
    };

    const changeTurn = () => {
        playersList.forEach((player) => {
            if (player.turn == true) {
                player.turn = false;
            }
            else {
                player.turn = true;
            }
        });
    };

    const getPlayerSymbol = () => {
        let currentplayer = 'none';
        playersList.forEach((player) => {
            if (player.turn == true) {
                currentplayer = player.symbol;
            }
        });
        return currentplayer;
    };

    const getPlayerChoice = () => {
        getPossibleChoices().forEach((div) => {
            div.addEventListener('click', (event) => {
                setCell(event.target.id, getPlayerSymbol());
                changeTurn();
                checkRows()
                renderToDivs();
            });
        });
    };

    const renderToDivs = () => {
        const selectedDiv = getPossibleChoices();
        for (let index = 0; index < 9; index++) {
            selectedDiv[index].textContent = board[index];
        }
    };

    const setCell = (index, value) => {
        board[index] = value;
    };

    const checkRows = () => {
        let tempBoard = board;
        let boardrow1 = tempBoard.splice(0,2);
        let boardrow2 = tempBoard.splice(3);
        let boardrow3 = tempBoard;
        console.log(boardrow1);
        console.log(boardrow2);
        console.log(boardrow3);

    };
    

    const resetBoard = () => {
        board.forEach((index) => {
            board[index] = '';
        });
    };

    const showBoard = () => {
        const currentBoard = board;
        return currentBoard;
    };

    boardinit();
    return {
        playersList,
        getPossibleChoices,
        setCell,
        getPlayerChoice 
    };

})();

let p1 = PlayersFactory('joe', 'X');
let p2 = PlayersFactory('mama', 'O');

function PlayersFactory(name, symbol) {   
    let turn = false;
    if(GameBoard.playersList.length == 0) {
        turn = true;
    }
    GameBoard.playersList.push({name, symbol, turn});
    return {
        name,
        symbol,
        turn
    };
}

