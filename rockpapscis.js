const options = ['rock', 'paper', 'scissors']

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resetGameButton = document.querySelector('#reset');

const gameResult = document.querySelector('#game-result')
const gameResultContent = document.createElement('div');
gameResultContent.classList.add('content');

const finalResult = document.querySelector('#final-result');
const finalResultContent = document.createElement('div');
gameResultContent.classList.add('content');

const playerScore = document.querySelector('#player-score');
const playerScoreContent = document.createElement('div');
playerScoreContent.classList.add('content');

const cpuScore = document.querySelector('#cpu-score');
const cpuScoreContent = document.createElement('div');
playerScoreContent.classList.add('content');

let score = 0;
let computerScore = 0;
let defaultMessage = 'Please make a selection to play.'

function getCPUChoice () {
    let intchoice = Math.floor(Math.random() * 2);
    return options[intchoice]
}

function playRound(player, cpu) {
    if (player == cpu) { result = 'It\'s a tie!'; } 
    else if (player == 'rock') {
        if (cpu == 'scissors') { result = 'You win! Rock beats scissors.'; score++;}
        else {result = 'You lose! Paper covers rock.'; computerScore++;}
    } else if (player == 'paper') {
        if (cpu == 'rock') {result = 'You win Paper covers rock!'; score++;} 
        else {result = 'You lose! Scissors cuts paper.'; computerScore++;}
    } else {
        if (cpu == 'paper') {result = 'You win! Scissors cuts paper!'; score++;} 
        else { result = 'You lose! Rock beats scissors.'; computerScore++;}
    }
    return result
}

function game(choice) {
    const cpuSelection = getCPUChoice();

    gameResultContent.textContent = playRound(choice, cpuSelection);
    gameResult.appendChild(gameResultContent);

    playerScoreContent.textContent = score;
    playerScore.appendChild(playerScoreContent);

    cpuScoreContent.textContent = computerScore;
    cpuScore.appendChild(cpuScoreContent);
}

function resetGame() {
    let score = 0;
    let computerScore = 0;

    playerScoreContent.textContent = score;
    playerScore.appendChild(playerScoreContent);

    cpuScoreContent.textContent = computerScore;
    cpuScore.appendChild(cpuScoreContent);

    gameResultContent.textContent = defaultMessage;
    gameResult.appendChild(gameResultContent);
}

resetGame();

rock.onclick = () => game('rock');
paper.onclick = () => game('paper');
scissors.onclick = () => game('scissors');
resetGameButton.onclick = () => resetGame();









