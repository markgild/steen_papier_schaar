// Span elements
const computerOutput = document.querySelector("#Computer");
const humanOutput = document.querySelector("#Human");
const resultOutput = document.querySelector("#Result");

const roundOutput = document.querySelector("#rounds");

const playerScoreOutput = document.querySelector("#playerScore");
const computerScoreOutput = document.querySelector("#computerScore");
const drawScoreOutput = document.querySelector("#drawScore");

let humanChoice = "";
let computerChoice = "";
let resultResult = "";

let rounds = 0;

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

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

    computerOutput.innerHTML = computerChoice;

    rounds++;
    roundOutput.innerHTML = rounds;

    if (humanChoice === computerChoice) {
        resultResult = "Gelijkspel";
        drawScore++;
        drawScoreOutput.innerHTML = drawScore;
    } else if (
        (humanChoice === "Steen" && computerChoice === "Schaar") ||
        (humanChoice === "Papier" && computerChoice === "Steen") ||
        (humanChoice === "Schaar" && computerChoice === "Papier")
    ) {
        resultResult = "Jij wint!";
        playerScore++;
        playerScoreOutput.innerHTML = playerScore;
    } else {
        resultResult = "Computer wint!";
        computerScore++;
        computerScoreOutput.innerHTML = computerScore;
    }

    resultOutput.innerHTML = resultResult;

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

        roundOutput.innerHTML = rounds;

        playerScoreOutput.innerHTML = playerScore;
        computerScoreOutput.innerHTML = computerScore;
        drawScoreOutput.innerHTML = drawScore;

        computerOutput.innerHTML = "Keuze van computer";
        humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";
        resultOutput.innerHTML = "Resultaat van het spel";

        return;
    }

        
        play(event.target.id);
    });
});