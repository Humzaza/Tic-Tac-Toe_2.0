
const GameBoard = (() => {
    'use strict';
    const board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const boardinit = () => { 
        renderToDivs();
        getSelectedDiv();
    };

    const getInputDivs = () => {
        const boxs = [];
        for (let index = 0; index < 9; index++) {
            boxs[index] = document.getElementById(index);
        }
        return boxs;
    };

    const getSelectedDiv = () => {
        getInputDivs().forEach((div) => {
            div.addEventListener('click', () => {
                console.log(div);
            });
        });
    };

    const renderToDivs = () => {
        const selectedDiv = getInputDivs();
        for (let index = 0; index < 9; index++) {
            selectedDiv[index].textContent = board[index];
        }
    };

    const setCell = (index, value) => {
        board[index] = value;
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
        getInputDivs,
        setCell, 
        resetBoard,
        showBoard,
        getSelectedDiv 
    };

})();

function Players(name, symbol) {
    return {
        name,
        symbol
    };
}

