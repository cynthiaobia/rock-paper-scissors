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
let playerWins;
let computerWins;
let tieWins;

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    if (playerSelection.toLowerCase() === computerSelection){
        tie = true;
        return "It's a tie!" ;
    } else if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "scissors"){
          playerWins = true;
          return "You win! Rock beats scissors!"
        } 
        else if (computerSelection === "paper"){
          computerWins = true;
          return "Computer wins! Paper beats scissors!"
        }
    } else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "rock"){
          playerWins = true;
          return "You win! Paper beats rock!"
        } 
        else if (computerSelection === "scissors"){
          computerWins = true;
          return "Computer wins! Scissors beats paper!"
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "paper"){
          playerWins = true;
          return "You win! Scissors beats paper!"
        } 
        else if (computerSelection === "rock"){
          computerWins = true;
          return "Computer wins! Rock beats scissors!"
        }
    }
}

//Game with multiple rounds

let playerScore = 0;
let computerScore = 0;
let tie = 0;

function game(){
  playRound(playerSelection, computerSelection);
  if (playerWins === true){
    playerScore += 1;
  } else if (computerWins === true){
    computerScore += 1;
  } else if (tie === true){
    tie += 1;
  }
  return ("You: " + playerScore + ", Computer: " + computerScore + ", Tie: " + tie)
}