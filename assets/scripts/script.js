var wins = 0;
var ties = 0;
var losses = 0;

var computerChoice = ["R", "P", "S"]
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var reset = document.querySelector("#reset");

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

// reset all scores
reset.addEventListener("click", function(event) {
    wins = 0;
    ties = 0;
    losses = 0;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("tie").innerHTML = ties;
    document.getElementById("loss").innerHTML = losses;

    document.getElementById("you").innerHTML = '';  
    document.getElementById("computer").innerHTML = '';
    document.getElementById("winner").innerHTML = "<h3>Winner: </h3>";
});

// Computer's Choice
function getComputerChoice() {
    var choice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    document.getElementById("computer").innerHTML = choice;
    return choice;
}

// play game
function playGame(yourChoice) {
    var computerChoice = getComputerChoice();
    // console.log(yourChoice);
    document.getElementById("you").innerHTML = yourChoice;  

    // check winner
    if (yourChoice == computerChoice) {
        ties++;
        document.getElementById("tie").innerHTML = ties;
    } else if ((yourChoice === "R" && computerChoice === "S") 
        || (yourChoice === "P" && computerChoice === "R") 
        || (yourChoice === "S" && computerChoice === "P")) {
        wins++;
        document.getElementById("win").innerHTML = wins;
    } else {
        losses++;
        document.getElementById("loss").innerHTML = losses;
    }
    // display result
    if (wins == losses) {
        document.getElementById("winner").innerHTML = "<h3>Winner: Tie</h3>";
    }
    else if (wins > losses) {
        document.getElementById("winner").innerHTML = "<h3>Winner: You</h3>";
    }
    else {
        document.getElementById("winner").innerHTML = "<h3>Winner: Computer</h3>";
    }
}


