// BUTTONS

var buttonStart = document.getElementById('new-game-btn');
var rock = document.getElementById('rock-btn');
var paper = document.getElementById('paper-btn');
var scissors = document.getElementById('scissors-btn');

// OUTPUTS

var alerts = document.getElementById('alert-output');
var playerScore = document.getElementById('player-output')
var computerScore = document.getElementById('computer-output');
var rounds = document.getElementById('rounds-output');


// NEW GAME BUTTON

buttonStart.addEventListener('click', function () {
    var roundAsk = prompt('How many rounds do you want to play ?');
    if (roundAsk > 0)
        rounds.innerHTML = ('We are playing to ' + roundAsk + ' wins');
    else
        alert('Zła wartość !')
});

// FUNCTION WHICH RETURN RANDOM VALUE

function computer() {
    return Math.floor(Math.random() * 3) + 1;
}

// FUNCTION WHICH SHOW RESULT

// Rock
function msgRock(random) {
    if (random === 1)
        alerts.innerHTML = ('YOU LOSE: you played ROCK, computer played PAPER');
    else if (random === 2)
        alerts.innerHTML = ('DRAW !: you played ROCK, computer played ROCK');
    else
        alerts.innerHTML = ('YOU WON: you played ROCK, computer played SCISSORS');
}

// Paper
function msgPaper(random) {
    if (random === 1)
        alerts.innerHTML = ('DRAW !: you played PAPER, computer played PAPER');
    else if (random === 2)
        alerts.innerHTML = ('YOU WON !: you played PAPER, computer played ROCK');
    else
        alerts.innerHTML = ('YOU LOSE !: you played PAPER, computer played SCISSORS');
}

// Scissors
function msgScissors(random) {
    if (random === 1)
        alerts.innerHTML = ('YOU WON !: you played SCISSORS, computer played PAPER');
    else if (random === 2)
        alerts.innerHTML = ('YOU LOSE !: you played SCISSORS, computer played ROCK');
    else
        alerts.innerHTML = ('DRAW !: you played SCISSORS, computer played SCISSORS');
}

// PLAYER MOVES

//Rock
function playerMoveRock() {
    var random = computer();
    msgRock(random);
}

//Paper
function playerMovePaper() {
    var random = computer();
    msgPaper(random);
}

//Scissors 
function playerMoveScissors() {
    var random = computer();
    msgScissors(random);
}

// ROCK BUTTON

rock.addEventListener('click', function () {
    playerMoveRock();
})

// PAPER BUTTON

paper.addEventListener('click', function () {
    playerMovePaper();
})

// SCISSORS BUTTON

scissors.addEventListener('click', function () {
    playerMoveScissors();
})