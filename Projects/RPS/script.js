function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.random() * choices.length;
    const computerChoice = choices[Math.floor(randomIndex)];
    return computerChoice;
}


var humanScore = 0;
var computerScore = 0;

function updateScore() {
    const scoreDiv = document.querySelector('#score');
    scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

function displayResult(message) {
    const resultsDiv = document.querySelector('#results');
    resultsDiv.textContent = message;
}

function checkGameWinner() {
    if (humanScore >= 5) {
        displayResult(`🎉 GAME OVER! You won the game! Final score: You ${humanScore} - Computer ${computerScore}`);
        resetGame();
        return true;
    } else if (computerScore >= 5) {
        displayResult(`😞 GAME OVER! Computer won the game! Final score: You ${humanScore} - Computer ${computerScore}`);
        resetGame();
        return true;
    }
    return false;
}

function resetGame() {
    // Reset after 3 seconds
    setTimeout(() => {
        humanScore = 0;
        computerScore = 0;
        updateScore();
        displayResult('New game started! Make your choice:');
    }, 3000);
}

function playRound(humanChoice, computerChoice) {
    let roundMessage = `You chose: ${humanChoice}, Computer chose: ${computerChoice}. `;
    
    if (humanChoice === computerChoice) {
        roundMessage += `It's a tie!`;
        displayResult(roundMessage);
    } else if ( 
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        roundMessage += `You win this round!`;
        humanScore++;
        displayResult(roundMessage);
    } else {
        roundMessage += `You lose this round!`;
        computerScore++;
        displayResult(roundMessage);
    }
    
    // Update score display
    updateScore();
    
    // Check if someone won the game (first to 5)
    checkGameWinner();
}

const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener('click', function(e){
    const computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
});

const paperbtn = document.querySelector('#paper');
paperbtn.addEventListener('click', function(e){
    const computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
});

const scissorsbtn = document.querySelector('#scissors');
scissorsbtn.addEventListener('click', function(e){
    const computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
});
