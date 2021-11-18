let currentPlayer = 'X';
let nextPlayer = 'O';
let playerXSelection = [];
let playerOSelection = [];

const handleClick = (event) => {
    const cell = event.target;
    
    cell.innerHTML = currentPlayer;

    if (currentPlayer === 'X') {
        playerSelections = playerXSelection;
        nextPlayer = 'O';
    } else {
        playerSelections = playerOSelection;
        nextPlayer = 'X';
    }

    playerSelections.push(Number(cell.id));

    if (checkWinner(playerSelections)) {
        alert('Player '+currentPlayer+' wins!"');
        resetGame();
    }

    if (checkDraw()) {
        alert('Draw!!');
        resetGame();
    }


    currentPlayer = nextPlayer;
    console.log(cell.id);
}

const cells = document.querySelectorAll('td');

for (i=0; i<cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
}


const winningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]


function checkWinner(playerSelections) {
    for (i=0; i<winningCombos.length; i++) {
        let matches = 0;
        for (j=0; j<winningCombos[i].length; j++) {
            if (playerSelections.includes(winningCombos[i][j])) {
                matches++
            } else break
            if (matches === winningCombos[i].length) {
                return true
            }
        }
    }
    return false
}

function checkDraw() {
    return (playerXSelection.length + playerOSelection.length) >= cells.length;
}

function resetGame() {
    playerXSelection = new Array();
    playerOSelection = new Array();
    for (i=0; i<cells.length; i++) {
        cells[i].innerHTML = '';
    }
}

