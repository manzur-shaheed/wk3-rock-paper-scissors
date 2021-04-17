var wins = 0;
var ties = 0;
var losses = 0;

var computerChoice = ["R", "P", "S"]

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

// Run the game for the first time
playGame();
