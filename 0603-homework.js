
const createBoard = () => {
    const board = document.createElement('div');
}
createBoard();

const createHeader = () => {
    const header = document.createElement('header');
}
createHeader();

const createList = () => {
    const list = document.createElement('list');
}
createList();



const list = document.createElement('list');

board.appendChild(header);
board.appendChild(list);
document.querySelector('body').appendChild(board);

for (let i = 0; i <= 4; i++) {
    createBoard();
} 

  