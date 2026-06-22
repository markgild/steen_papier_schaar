// Span elements
const computerOutput = document.querySelector("#Computer");
const humanOutput = document.querySelector("#Human");
const resultOutput = document.querySelector("#Result");

const bestWinStreakOutput = document.querySelector("#bestWinStreakScore");
const winStreakOutput = document.querySelector("#winStreakScore");

const roundOutput = document.querySelector("#rounds");

const playerScoreOutput = document.querySelector("#playerScore");
const computerScoreOutput = document.querySelector("#computerScore");
const drawScoreOutput = document.querySelector("#drawScore");

let humanChoice = "";
let computerChoice = "";
let resultResult = "";

let rounds = 0;

let bestWinStreakScore = 0;
let winStreakScore = 0;

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

bestWinStreakOutput.innerHTML = bestWinStreakScore;
winStreakOutput.innerHTML = winStreakScore;

roundOutput.innerHTML = rounds;

playerScoreOutput.innerHTML = playerScore;
computerScoreOutput.innerHTML = computerScore;
drawScoreOutput.innerHTML = drawScore;

computerOutput.innerHTML = "Keuze van computer";
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";
resultOutput.innerHTML = "Resultaat van het spel";

function play(choice) {

    humanChoice = choice;
    humanOutput.innerHTML = humanChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerChoice = "Steen";
            break;
        case 2:
            computerChoice = "Papier";
            break;
        case 3:
            computerChoice = "Schaar";
            break;
    }

    rounds++;
    roundOutput.innerHTML = rounds;

    if (humanChoice === computerChoice) {
        resultResult = "Gelijkspel";
        winStreakScore = 0;
        winStreakOutput.innerHTML = winStreakScore;
        drawScore++;
        drawScoreOutput.innerHTML = drawScore;
    } else if (
        (humanChoice === "Steen" && computerChoice === "Schaar") ||
        (humanChoice === "Papier" && computerChoice === "Steen") ||
        (humanChoice === "Schaar" && computerChoice === "Papier")
    ) {
        resultResult = "Jij wint!";
        winStreakScore++;
        winStreakOutput.innerHTML = winStreakScore;
        if (winStreakScore > bestWinStreakScore) {
            bestWinStreakScore = winStreakScore;
            bestWinStreakOutput.innerHTML = bestWinStreakScore;
        }
        playerScore++;
        playerScoreOutput.innerHTML = playerScore;
    } else {
        resultResult = "Computer wint!";
        winStreakScore = 0;
        winStreakOutput.innerHTML = winStreakScore;
        computerScore++;
        computerScoreOutput.innerHTML = computerScore;
    }


    computerOutput.innerHTML = "...";
    resultOutput.innerHTML = "3...";

    setTimeout(() => {
        resultOutput.innerHTML = "2...";
    }, 500);

    setTimeout(() => {
        resultOutput.innerHTML = "1...";
    }, 1000);

    setTimeout(() => {
        computerOutput.innerHTML = computerChoice;
        resultOutput.innerHTML = resultResult;
    }, 1500);

}


const btns = document.querySelectorAll("button"); 

// Button click event

btns.forEach(button => {
    button.addEventListener("click", function(event) {
        
        
    if (event.target.id === "Reset") {

        rounds = 0;

        playerScore = 0;
        computerScore = 0;
        drawScore = 0;

        bestWinStreakScore = 0;
        winStreakScore = 0;

        roundOutput.innerHTML = rounds;

        playerScoreOutput.innerHTML = playerScore;
        computerScoreOutput.innerHTML = computerScore;
        drawScoreOutput.innerHTML = drawScore;

        bestWinStreakOutput.innerHTML = bestWinStreakScore;
        winStreakOutput.innerHTML = winStreakScore;

        computerOutput.innerHTML = "Keuze van computer";
        humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";
        resultOutput.innerHTML = "Resultaat van het spel";

        return;
    }

        
        play(event.target.id);
    });
});