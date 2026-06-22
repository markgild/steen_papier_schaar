// Span elements
const computerOutput = document.querySelector("#Computer");
const humanOutput = document.querySelector("#Human");
const resultOutput = document.querySelector("#Result");

let humanChoice = "";
let computerChoice = "";
let resultResult = "";

computerOutput.innerHTML = "Keuze van computer";
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";
resultOutput.innerHTML = "Resultaat van het spel";

function game(game_choice) {

    humanChoice = game_choice;
    humanOutput.innerHTML = humanChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if ( randomNumber === 1 ) {
        computerChoice = "Steen";
    } else if ( randomNumber === 2 ) {
        computerChoice = "Papier";
    } else if ( randomNumber === 3 ) {
        computerChoice = "Schaar";
    }

    computerOutput.innerHTML = computerChoice;

    if (humanChoice === computerChoice) {
        resultResult = "Gelijkspel";
    } else if (
        (humanChoice === "Steen" && computerChoice === "Schaar") ||
        (humanChoice === "Papier" && computerChoice === "Steen") ||
        (humanChoice === "Schaar" && computerChoice === "Papier")
    ) {
        resultResult = "Jij wint!";
    } else {
        resultResult = "Computer wint!";
    }

    resultOutput.innerHTML = resultResult;

}

// Button click event
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