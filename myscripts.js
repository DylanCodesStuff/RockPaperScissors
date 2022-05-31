function computerPlay(){

    return Math.floor(Math.random()*3);   //gives a random number between 0,1, and 2.

}


let playerSelection = "papEr";
let computerSelection = computerPlay();
playerSelection = playerSelection.toLowerCase();


function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    console.log(computerSelection);
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
        return "You Lose! Rock beats Scissors";
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
playRound(playerSelection,computerSelection);

}
}