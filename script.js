
const GameBoard = (() => {
    'use strict';
    const board = ['', '', '', '', '', '', '', '', ''];
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
        if (board[0] != '' && board[1] != '' && board[2] != '') {
            if (board[0] == board[1] && board[0] == board[2] ) {
                console.log('wins');
            }
        }

        if (board[3] != '' && board[4] != '' && board[5] != '') {
            if (board[3] == board[4] && board[3] == board[5]) {
                console.log('wins2');
            }
        }
        
        if (board[6] != '' && board[7] != '' && board[8] != '') {
            if (board[6] == board[7] && board[6] == board[8]) {
                console.log('wins3');
            }
        }

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

