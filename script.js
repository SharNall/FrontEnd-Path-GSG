function startGame() {   //to navigate to the game page
    window.location.href = "game.html";
}

function goHome() {// to go back to the home page
    window.location.href = "index.html";
}

// Game Logic
let playerScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("user-choice").textContent = `Your Choice: ${userChoice}`;
    document.getElementById("computer-choice").textContent = `Computer's Choice: ${computerChoice}`;

    const result = determineWinner(userChoice, computerChoice);
    document.getElementById("result").textContent = `Result: ${result}`;

    updateScore(result);
}

function determineWinner(user, computer) {
    if (user === computer) return "It's a Draw!";
    if ((user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")) {
        return "You Win!";
    }
    return "Computer Wins!";
}

function updateScore(result) {
    if (result === "You Win!") {
        playerScore++;
        document.getElementById("player-score").textContent = playerScore;
    } else if (result === "Computer Wins!") {
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = "0";
    document.getElementById("computer-score").textContent = "0";
    document.getElementById("user-choice").textContent = "Your Choice: -";
    document.getElementById("computer-choice").textContent = "Computer's Choice: -";
    document.getElementById("result").textContent = "Result: -";
}