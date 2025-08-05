function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.random() * choices.length;
    const computerChoice = choices[Math.floor(randomIndex)];
    console.log(`Computer chose: ${computerChoice}`);
    return computerChoice;
};

function getHumanChoice(){
    const humanChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice(); // Recursively prompt until a valid choice is made
    }
    else {
        console.log(`You chose: ${humanChoice}`);
        return humanChoice;
    }
};

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){
    console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log(`It's a tie!`);
        return;
    } else if ( humanChoice === 'rock' && computerChoice === 'scissors' ||
                humanChoice=== 'paper' && computerChoice === 'rock' ||
                humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You win this round!`);
        humanScore++;
        return;
    } else {
        console.log(`You lose this round!`);
        computerScore++;
        return;
    }
};

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`The score is: You (${humanScore}) - Computer (${computerScore})`);
    }
    
    // Game over message after all 5 rounds
    console.log(`Game over! Final score: You (${humanScore}) - Computer (${computerScore})`);
    
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie game!");
    }
    
    // Ask if they want to play again
    const playAgain = prompt("Play again? (yes/no)").toLowerCase();
    if (playAgain === 'yes' || playAgain === 'y') {
        // Reset scores and play again
        humanScore = 0;
        computerScore = 0;
        playGame();
    } else {
        console.log("Thanks for playing!");
    }
}

playGame();
