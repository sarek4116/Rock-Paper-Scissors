// BUTTONS

var buttonStart = document.getElementById('new-game-btn');
var rock = document.getElementById('rock-btn');
var paper = document.getElementById('paper-btn');
var scissors = document.getElementById('scissors-btn');

var roundAsk;

var gameStatus = 0;

// OUTPUTS

var alerts = document.getElementById('alert-output');
var playerScore = document.getElementById('player-output')
var computerScore = document.getElementById('computer-output');
var rounds = document.getElementById('rounds-output');

// RESULT 

var results = {
    x: 0,
    y: 0,
}

playerScore.innerHTML = results.x;
computerScore.innerHTML = results.y;


// GAME RESET FUNCTION

function reset() {
    results = {
        x: 0,
        y: 0,
    }

    playerScore.innerHTML = results.x;
    computerScore.innerHTML = results.y;
    alerts.innerHTML = ('');
}

// NEW GAME BUTTON

buttonStart.addEventListener('click', function () {
    roundAsk = parseInt(prompt('How many rounds do you want to play ?'));
    if (roundAsk > 0) {
        gameStatus = 1;
        rounds.innerHTML = ('We are playing to ' + roundAsk + ' wins');
    } else {
        alert('Zła wartość !')
    }
    reset();

});


// FUNCTION WHICH RETURN RANDOM VALUE

function computer() {
    return Math.floor(Math.random() * 3) + 1;
}

// Rock
function msgRock(random) {
    if (random === 1) {
        alerts.innerHTML = ('YOU LOSE ! : you played ROCK, computer played PAPER');
        results.y++
        computerScore.innerHTML = results.y;
    } else if (random === 2) {
        alerts.innerHTML = ('DRAW ! : you played ROCK, computer played ROCK');
    } else {
        alerts.innerHTML = ('YOU WON ! : you played ROCK, computer played SCISSORS');
        results.x++
        playerScore.innerHTML = results.x;
    }
    winner();
}

// Paper
function msgPaper(random) {
    if (random === 1)
        alerts.innerHTML = ('DRAW ! : you played PAPER, computer played PAPER' + '<br>');
    else if (random === 2) {
        alerts.innerHTML = ('YOU WON ! : you played PAPER, computer played ROCK' + '<br>');
        results.x++
        playerScore.innerHTML = results.x;
    } else {
        alerts.innerHTML = ('YOU LOSE ! : you played PAPER, computer played SCISSORS' + '<br>');
        results.y++
        computerScore.innerHTML = results.y;
    }
    winner();
}

// Scissors
function msgScissors(random) {
    if (random === 1) {
        alerts.innerHTML = ('YOU WON ! : you played SCISSORS, computer played PAPER');
        results.x++
        playerScore.innerHTML = results.x;
    } else if (random === 2) {
        alerts.innerHTML = ('YOU LOSE ! : you played SCISSORS, computer played ROCK');
        results.y++
        computerScore.innerHTML = results.y;
    } else {
        alerts.innerHTML = ('DRAW ! : you played SCISSORS, computer played SCISSORS');
    }
    winner();
}

// PLAYER MOVES

//Rock
function playerMoveRock() {
    var random = computer();
    if (gameStatus === 1)
        msgRock(random);
}

//Paper
function playerMovePaper() {
    var random = computer();
    if (gameStatus === 1)
        msgPaper(random);
}

//Scissors 
function playerMoveScissors() {
    var random = computer();
    if (gameStatus === 1)
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


// FUNCTION WHICH DISABLED AND ENABLED BUTTONS 

function buttonDisable() {
    gameStatus = 0;
}

function buttonEnabled() {
    gameStatus = 1
}

// WINNER FUNCTION 

function winner() {
    if (results.x === roundAsk) {
        alerts.innerHTML = ("YOU WON THE ENTIRE GAME!!!")
        buttonDisable();
    } else if (results.y === roundAsk) {
        alerts.innerHTML = ("YOU LOSE THE ENTIRE GAME!!!")
        buttonDisable();
    }
}