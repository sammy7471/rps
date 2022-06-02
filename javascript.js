// javascript

function computerPlay() {
    let computerPLay = Math.random()
    if (computerPLay < 0.3) {
        computerPLay = "Rock";
    } else if (computerPLay > 0.3 && computerPLay < 0.6) {
        computerPLay = "Paper";
    } else if (computerPLay > 0.6) {
        computerPLay = "Scissors";
    }
    return computerPLay
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        userScore++;
        return "You Win! Rock Defeats Scissors!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        return "You Lose! Paper Defeats Rock"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You Lose! Rock Defeats Scissors"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        userScore++;
        return "You Win! Paper Defeats Rock"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        userScore++;
        return "You Win! Scissors Defeats Paper"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You Lose! Scissors Defeats Paper"
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "It is a draw tie"
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "It is a draw tie"
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "It is a draw tie"
    } else {
        return "Something Went Wrong"
    }
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound => {
        const playerSelection = button.id;
    });
});
let userScore = 0;
let computerScore = 0;

        const computerSelection = computerPlay();
        console.log("your score = " + userScore);
        console.log("computer score = " + computerScore);
