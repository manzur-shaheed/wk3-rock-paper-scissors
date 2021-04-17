var wins = 0;
var ties = 0;
var losses = 0;

var computerChoice = ["R", "P", "S"]
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");

// event listeners
rock.addEventListener("click", function() {
    playGame(this.value);
});

paper.addEventListener("click", function() {
    playGame(this.value);
});

scissors.addEventListener("click", function(event) {
    playGame(this.value);
});

// Computer's Choice
function getComputerChoice() {
    var choice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    document.getElementById("computer").innerHTML = choice;
}

// play game
function playGame(yourChoice) {
    document.getElementById("you").innerHTML = yourChoice;    
}


