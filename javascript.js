// javascript

function computerPlay() {
    let computerPLay = Math.random();
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
        playWin();
        return "You Win! Rock Defeats Scissors!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerWin();
        return "You Lose! Paper Defeats Rock"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerWin();
        return "You Lose! Rock Defeats Scissors"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playWin();
        return "You Win! Paper Defeats Rock"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playWin();
        return "You Win! Scissors Defeats Paper"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerWin();
        return "You Lose! Scissors Defeats Paper"
    } else if (playerSelection === computerSelection) {
        computerWin();
        playWin();
        return "It is a draw tie"
    } else {
        return "Something Went Wrong"
    }
}

function clickedListener(event) {
    const playerSelection = event.target.id;
    const computerSelection = computerPlay();
    document.getElementById("playround-output").innerText = playRound(playerSelection, computerSelection);
    checkWinner();
    end();
}
const buttons = document.querySelectorAll("#button-container");
buttons.forEach((button) => {
    button.addEventListener("click", clickedListener);
});

let playerScore = 0;
let computerScore = 0;

function playWin() {
    playerScore++;
    playScore.innerText = playerScore;
}

function computerWin() {
    computerScore++;
    computeScore.innerText = computerScore;
}

function checkWinner() {
    if (playerScore == 5 || computerScore == 5) {
        buttons.forEach((button) => {
            button.removeEventListener("click", clickedListener);
        });
    }
}

function end() {
    if (playerScore == 5 && computerScore < 5) {
        document.getElementById("end").innerText = "Congratulations!, You win with " + playerScore + " points";
    } else if (computerScore == 5 && playerScore < 5) {
        document.getElementById("end").window.alert = "Oouch, You Lost!. Computer wins with " + computerScore + " points";
    } else if (playerScore == 5 && computerScore == 5) {
        document.getElementById("end").innerText = "Wow, It was a tie";
    }
}