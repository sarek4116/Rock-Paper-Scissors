// BUTTONS

var buttonStart = document.getElementById('new-game-btn');
var choicesBtn = document.querySelector('div + .choices')

// GLOBAL VARIABLES
var gameStatus = 0;
var roundAsk;

// OUTPUTS

var alerts = document.getElementById('alert-output');
var playerScore = document.getElementById('player-output')
var computerScore = document.getElementById('computer-output');
var rounds = document.getElementById('rounds-output');
var gameScore = document.querySelector('#modal-output');

// MODAL OUTPUTS

var round = document.querySelector('#round');
var playerMove = document.querySelector('#player-move');
var computerMove = document.querySelector('#computer-move');
var roundWinner = document.querySelector('#round-winner');
var score = document.querySelector('#score');

// RESULT 

var results = {
    x: 0,
    y: 0,
}

var progress = {
    Round: 0,
    PlayerMove: '',
    ComputerMove: '',
    RoundWinner: '',
    Score: 0,
}

round.innerHTML = progress.Round;
playerMove.innerHTML = progress.PlayerMove;
computerMove.innerHTML = progress.ComputerMove;
roundWinner.innerHTML = progress.RoundWinner;
score.innerHTML = progress.Score;

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

// MAIN CHOICE'S FUNCTION

var playerChoice;
var computerChoice;

choicesBtn.addEventListener("click", function (event) {
    if (event.target.tagName === 'IMG' && gameStatus === 1) {
        computerChoice = computer();
        playerChoice = event.target.dataset.index
        msgChoices();
        gameProgress();
    }
})

// FUNCTION WHICH INFORM ABOUT ROUND WINNER

function msgChoices() {
    if (playerChoice == computerChoice) {
        alerts.innerHTML = ('DRAW ! : You played the same as the computer');
    } else if ((playerChoice == 1 && computerChoice == 2) || (playerChoice == 2 && computerChoice == 3) || (playerChoice == 3 && computerChoice == 1)) {
        alerts.innerHTML = ('You lose round !')
        results.y++
        computerScore.innerHTML = results.y;
    } else {
        alerts.innerHTML = ('You win round !')
        results.x++
        playerScore.innerHTML = results.x;
    }
    winner();
}


function gameProgress() {
    if (playerChoice == computerChoice) {
        progress.Round++
        round.innerHTML = progress.Round;
    } else if (playerChoice == 1 && computerChoice == 2) {
        playerMove.innerHTML = ('Rock');
        computerMove.innerHTML = ('Paper');
        roundWinner.innerHTML = ('Computer');
        progress.Round++
        round.innerHTML = progress.Round;
    } else if (playerChoice == 2 && computerChoice == 3) {
        playerMove.innerHTML = ('Paper');
        computerMove.innerHTML = ('Scissors');
        roundWinner.innerHTML = ('Player');
        progress.Round++
        round.innerHTML = progress.Round;
    } else if (playerChoice == 3 && computerChoice == 1) {
        playerMove.innerHTML = ('Scissors');
        computerMove.innerHTML = ('Rock');
        roundWinner.innerHTML = ('Computer');
        progress.Round++
        round.innerHTML = progress.Round;
    } else {
        progress.Round++
        round.innerHTML = progress.Round;
        roundWinner.innerHTML = ('Player');
    }
}

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
        document.querySelector('#modal-1').classList.add('show');
        gameScore.innerHTML = ("YOU WON THE ENTIRE GAME!!!")
        buttonDisable();
    } else if (results.y === roundAsk) {
        document.querySelector('#modal-1').classList.add('show');
        gameScore.innerHTML = ("YOU LOSE THE ENTIRE GAME!!!")
        buttonDisable();
    }
}

// Modal

function closeModal() {
    document.getElementById('modal-1').classList.remove('show')
}

document.querySelector('#modal-1').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
})

document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        closeModal();
    }
})