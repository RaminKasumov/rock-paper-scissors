let userScore = 0;
let computerScore = 0;
let roundWinner = '';

const userScorePara = document.getElementById('userScore');
const computerScorePara = document.getElementById('computerScore');
const userSign = document.getElementById('userSign');
const computerSign = document.getElementById('computerSign');
const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');
const modalEndgame = document.getElementById('modalEndgame');
const msgEndgame = document.getElementById('msgEndgame');
const overlay = document.getElementById('overlay');
const btnRestart = document.getElementById('btnRestart');

btnRock.addEventListener('click', () => playGame('ROCK'));
btnPaper.addEventListener('click', () => playGame('PAPER'));
btnScissors.addEventListener('click', () => playGame('SCISSORS'));
btnRestart.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndgameModal);

function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    updateChoices(playerChoice, computerChoice);

    playRound(playerChoice, computerChoice);
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        roundWinner = 'Tie';
    }
    else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') || (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') || (playerChoice === 'PAPER' && computerChoice === 'ROCK')) {
        userScore++;
        roundWinner = 'Player';
    }
    else {
        computerScore++;
        roundWinner = 'Computer';
    }

    updateScore();

    if (isGameOver()) {
        openEndgameModal();
        setFinalMessage();
    }
}

function updateChoices(playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'ROCK':
            userSign.textContent = '✊';
            break;
        case 'PAPER':
            userSign.textContent = '✋';
            break;
        case 'SCISSORS':
            userSign.textContent = '✌';
            break;
    }

    switch (computerChoice) {
        case 'ROCK':
            computerSign.textContent = '✊';
            break;
        case 'PAPER':
            computerSign.textContent = '✋';
            break;
        case 'SCISSORS':
            computerSign.textContent = '✌';
            break;
    }
}

function updateScore() {
    userScorePara.textContent = `${userScore}`;
    computerScorePara.textContent = `${computerScore}`;
}

function isGameOver() {
    return userScore === 5 || computerScore === 5;
}

function setFinalMessage() {
    return userScore > computerScore
        ? (msgEndgame.textContent = 'Congratulations! You won...')
        : (msgEndgame.textContent = 'You lost...')
}

function openEndgameModal() {
    modalEndgame.classList.add('active')
    overlay.classList.add('active')
}

function closeEndgameModal() {
    modalEndgame.classList.remove('active')
    overlay.classList.remove('active')
}

function restartGame() {
    userScore = 0;
    computerScore = 0;
    roundWinner = '';
    userScorePara.textContent = '0';
    computerScorePara.textContent = '0';
    userSign.textContent = '❔';
    computerSign.textContent = '❔';
    modalEndgame.classList.remove('active');
    overlay.classList.remove('active');
}