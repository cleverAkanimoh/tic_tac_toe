const startingPage = document.getElementById('startingPage');
const choose = document.querySelectorAll('.choose');

const mainPage = document.getElementById('mainPage');
const showChange = document.getElementById('showChange');
const boxes = document.querySelectorAll('.box');

const winner = document.getElementById('winner');
const winnerName = document.getElementById('winnerName');
const quit = document.getElementById('quit');

let changeTurn = null;

choose.forEach(chooseNow => {
    chooseNow.onclick = () => {
        if (chooseNow.id === 'playerX') {
            changeTurn = false;
            showChange.style.left = '0px';
        } else if (chooseNow.id === 'playerO') {
            changeTurn = true;
            showChange.style.left = '150px';
        }
        startingPage.style.display = 'none';
        mainPage.style.display = 'block';
    }
})

boxes.forEach(box => {
    box.onclick = () => {
        // add X if changeTurn is false
        // add O if changeTurn is true
        if (changeTurn === false) {
            box.innerText = 'X';
            box.id = 'X';
            box.style.pointerEvents = 'none';
            showChange.style.left = '150px';
            changeTurn = true;
        } else {
            box.innerText = 'O';
            changeTurn = false;
            box.id = 'O';
            box.style.pointerEvents = 'none';
            showChange.style.left = '0px';
        }
        winningFunc();
        drawFunc();
    }
})

let winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const winningFunc = () => {
    for (let i = 0; i <= 7; i++) {
        let a = winningCombo[i];

        if (boxes[a[0]].id === '' || boxes[a[1]].id === '' || boxes[a[2]].id === '') {
            continue;
        } else if (boxes[a[0]].id === 'X' && boxes[a[1]].id === 'X' && boxes[a[2]].id === 'X') {
            winnerName.innerText = `Player X won The Game!`

            winner.style.display = 'block';
            mainPage.style.display = 'none';
        } else if (boxes[a[0]].id === 'O' && boxes[a[1]].id === 'O' && boxes[a[2]].id === 'O') {
            winnerName.innerText = `Player O won The Game!`

            winner.style.display = 'block';
            mainPage.style.display = 'none';
        } else {
            continue;
        }
    }
}

let drawFunc = () => {
    if (boxes[0].id != '' && boxes[1].id != '' && boxes[2].id != '' && boxes[3].id != '' && boxes[4].id != '' && boxes[5].id != '' && boxes[6].id != '' && boxes[7].id != '' && boxes[8].id != '' ) {
        winnerName.innerText = `Draw !`;

        winner.style.display = 'block';
        mainPage.style.display = 'none';
    }
}

quit.onclick = () => {
    window.location.reload();
}