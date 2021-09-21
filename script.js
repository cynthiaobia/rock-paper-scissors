//Randomly generate an integer from 0 to 2 inclusive 
function getRandomInt(){
    return Math.floor(Math.random() * 3);
} 

//Return computer selection at random index
function computerPlay(){
    let selections = ["rock", "paper", "scissors"];
    let i = getRandomInt();
    return selections[i];
}

//Play a single round
let playerSelection = "scIssOrs";
let computerSelection;

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    if (playerSelection.toLowerCase() === computerSelection){
        return "tie!" ;
    } else {
        return "no tie, computer chose " + computerSelection;
    }
}






