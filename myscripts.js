function computerPlay(){

    return Math.floor(Math.random()*3);   //gives a random number between 0,1, and 2.

}


let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection){
   computerSelection = computerPlay();
   playerSelection = prompt("Type Your Choice... Rock, Paper, or Scissors?");
   playerSelection = playerSelection.toLowerCase();
   console.log("playerSelection:" + playerSelection);
   console.log("computerSelection:" + computerSelection);
    if(playerSelection == "rock"){
        playerSelection = 0;
    }
    else if(playerSelection == "paper"){
        playerSelection = 1;
    }
    else if (playerSelection == "scissors"){
        playerSelection = 2;
    }
    else {
        return "error";
    }
   

    if (playerSelection == 0 && computerSelection == 1){
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == 0 && computerSelection == 2){
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection == 1 && computerSelection == 0){
        return "You Win! Paper beats Rock";

    }
    else if(playerSelection == 1 && computerSelection == 2){
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection == 2 && computerSelection == 0){
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection == 2 && computerSelection == 1){
        return "You Win! Scissors beats Paper";
    }
    else if(playerSelection == computerSelection){
        return "It's a tie! You chose the same thing!"
    }
    else {
        return "error";
    }
}


function game(){
    
    for(let i = 0; i < 5; i ++){
        thisRound = playRound(playerSelection,computerSelection);
        console.log(thisRound);
        if(thisRound =="You Win! Rock beats Scissors"|| thisRound=="You Win! Paper beats Rock"|| thisRound =="You Win! Scissors beats Paper"){
            playerWins++;
            
        }
        else if(thisRound == "You Lose! Paper beats Rock"|| thisRound=="You Lose! Scissors beats Paper"|| thisRound == "You Lose! Rock beats Scissors"){

            computerWins++;
        
        }
        else;


    
    
    }
    if(playerWins > computerWins){
        let finalPlayerWins = playerWins;
        playerWins =0;
        computerWins=0;
        return finalPlayerWins;
        
    }
    else if(playerWins < computerWins){
        let finalComputerWins = computerWins;
        playerWins =0;
        computerWins=0;
        return finalComputerWins;
    }
    else{
        playerWins =0;
        computerWins=0;
        return "SUDDEN DEATH";

    }
    
}

