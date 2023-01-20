const prompt = require('prompt-sync')();

const options = ['rock', 'paper', 'scissors']

let score = 0;
let cpuScore = 0;

function getCPUChoice () {
    let intchoice = Math.floor(Math.random() * 2);
    return options[intchoice]
}

function playRound(player, cpu) {
    if (player == cpu) { result = 'It\'s a tie!'; } 
    else if (player == 'rock') {
        if (cpu == 'scissors') { result = 'You win! Rock beats scissors.'; score++;}
        else {result = 'You lose! Paper covers rock.'; cpuScore++;}
    } else if (player == 'paper') {
        if (cpu == 'rock') {result = 'You win Paper covers rock!'; score++;} 
        else {result = 'You lose! Scissors cuts paper.'; cpuScore++;}
    } else {
        if (cpu == 'paper') {result = 'You win! Scissors cuts paper!'; score++;} 
        else { result = 'You lose! Rock beats scissors.'; cpuScore++;}
    }
    return result
}

function game() {
    const playerSelection = prompt("Please choose rock paper or scissors. ");
    const cpuSelection = getCPUChoice();

    console.log(playRound(playerSelection, cpuSelection));
}

while (score < 7 && cpuScore < 7) {
    game()
}

console.log("Your final score is: " + score + ". The computer's score is " + cpuScore + ".");








