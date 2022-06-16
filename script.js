
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

    const getPlayerName = () => {
        let currentplayer = 'none';
        playersList.forEach((player) => {
            if (player.turn == true) {
                currentplayer = player.name;
            }
        });
        return currentplayer;
    };

    const getPlayerChoice = () => {
        getPossibleChoices().forEach((div) => {
            div.addEventListener('click', (event) => {
                setCell(event.target.id, getPlayerSymbol());
                Checker().checkAll();
                renderToDivs();                
                changeTurn();
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
        if (board[index] == '' && Checker().checkAll() == undefined) {
            board[index] = value;
        }
    };

    const declareWinner = () => {
            let winner = document.querySelector('.winner');
            console.log(winner);
            winner.textContent = `winner is ${getPlayerName()}`;
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



    const Checker = (() => {
        const checkColumns = () => { 
            if (board[0] != '' && board[3] != '' && board[6] != '') {
                if (board[0] == board[3] && board[0] == board[6] ) {
                    declareWinner();
                    return getPlayerSymbol();
                }
            }
    
            if (board[1] != '' && board[4] != '' && board[7] != '') {
                if (board[1] == board[4] && board[1] == board[7]) {
                    declareWinner();
                    return getPlayerSymbol();
                }
            }
            
            if (board[2] != '' && board[5] != '' && board[8] != '') {
                if (board[2] == board[5] && board[2] == board[8]) {
                    declareWinner();
                    return getPlayerSymbol();
                }
            }
    
        };
    
        const checkRows = () => { 
            if (board[0] != '' && board[1] != '' && board[2] != '') {
                if (board[0] == board[1] && board[0] == board[2] ) {
                    declareWinner();
                    return getPlayerSymbol();
                }
            }
    
            if (board[3] != '' && board[4] != '' && board[5] != '') {
                if (board[3] == board[4] && board[3] == board[5]) {
                    declareWinner();
                    return getPlayerSymbol();
                }
            }
            
            if (board[6] != '' && board[7] != '' && board[8] != '') {
                if (board[6] == board[7] && board[6] == board[8]) {
                    declareWinner();
                    return getPlayerSymbol();
                }
            }
    
        };

        const checkDiagonals = () => {
            if (board[0] != '' && board[4] != '' && board[8] != '') {
                if (board[0] == board[4] && board[0] == board[8] ) {
                    declareWinner();
                    return getPlayerSymbol();
                }
            }

            if (board[2] != '' && board[4] != '' && board[6] != '') {
                if (board[2] == board[4] && board[2] == board[6] ) {
                    declareWinner();
                    return getPlayerSymbol();
                }
            }
        };
        
        const checkAll = () => {
            return checkColumns() || checkRows() || checkDiagonals();
        };
        return{checkAll};
    });

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

