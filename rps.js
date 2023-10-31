// // begin with a function called getComputerChoice 
// //that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 

const answers = ["rock" , "paper" , "scissors"];
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

// genarates a number from the array given
function getComputerChoice(){

    const choice = answers [Math.floor(Math.random() * answers.length)];

    return choice;
    
}

function getPlayerChoice(input){
     input = prompt("rock , paper, scissors?");
    return input;


}

function checkWinner(playerSelection, computerSelection){
    if(computerSelection == playerSelection){
        return "Tie."
    } else if(computerSelection == "rock" && playerSelection == "paper"||
              computerSelection == "paper" && playerSelection == "scissors"||
              computerSelection == "scissors" && playerSelection == "rock"){
                return "Player Wins."

    } 
    else{
        return "Computer Wins."
    }
    
}

function playRound(playerSelection,computerSelection) {
   const result = checkWinner(playerSelection,computerSelection);
   if(result == "Tie."){
    return "It is a draw noone won!"
   } else if(result == "Computer Wins."){
    return `Computer wins. ${computerSelection} beats ${playerSelection}`
   } else {
    return `Player wins ${playerSelection} beats ${computerSelection}`
   }

    
}




function game(){
  
  for (let i = 0; i < 5; i++){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(computerSelection, playerSelection));
  }

   
   
   
}



game();

