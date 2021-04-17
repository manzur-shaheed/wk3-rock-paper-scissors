var wins = 0;
var ties = 0;
var losses = 0;

var computerChoice = ["R", "P", "S"]
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");

rock.addEventListener("click", function(event) {
    document.getElementById("you").innerHTML = 'R';
    alert('R');
});

paper.addEventListener("click", function(event) {
    alert('P');
});

scissors.addEventListener("click", function(event) {
    alert('S');
});

// get computers choice
function getComputerChoice() {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]

}
// get user input
function getUserChoice() {
    var userInput = '';

    userInput = window.prompt("Enter R, P or S: ");

    // validate
    if (userInput) {
        userInput = userInput.toUpperCase();

    }
}

