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
        return "It's a tie!" ;
    } else if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "scissors"){
          return "You win! Rock beats scissors!"
        } 
        else if (computerSelection === "paper"){
          return "Computer wins! Paper beats scissors!"
        }
    } else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "rock"){
          return "You win! Paper beats rock!"
        } 
        else if (computerSelection === "scissors"){
          return "Computer wins! Scissors beats paper!"
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "paper"){
          return "You win! Scissors beats paper!"
        } 
        else if (computerSelection === "rock"){
          return "Computer wins! Rock beats scissors!"
        }
    }
}