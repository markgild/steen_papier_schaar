// Span elements
const computerOutput = document.querySelector("#Computer");
const humanOutput = document.querySelector("#Human");
const resultOutput = document.querySelector("#Result");

const playerScoreOutput = document.querySelector("#playerScore");
const computerScoreOutput = document.querySelector("#computerScore");
const drawScoreOutput = document.querySelector("#drawScore");

let humanChoice = "";
let computerChoice = "";
let resultResult = "";

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

computerOutput.innerHTML = "Keuze van computer";
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";
resultOutput.innerHTML = "Resultaat van het spel";

function game(game_choice) {

    humanChoice = game_choice;
    humanOutput.innerHTML = humanChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    /*if ( randomNumber === 1 ) {
        computerChoice = "Steen";
    } else if ( randomNumber === 2 ) {
        computerChoice = "Papier";
    } else if ( randomNumber === 3 ) {
        computerChoice = "Schaar";
    }*/

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
        game(event.target.id);
    });
});


/*
const steenBtn = document.querySelector("#Steen");
steenBtn.addEventListener("click", function(event) {
    game("Steen");
});

const papierBtn = document.querySelector("#Papier");
papierBtn.addEventListener("click", function(event) {
    game("Papier");
});

const schaarBtn = document.querySelector("#Schaar");
schaarBtn.addEventListener("click", function(event) {
    game("Schaar");
});
*/