function computerPlay(){
let choices = ['Rock','Paper','Scissors'];      //provides the 3 possible moves in the game
let randomChoice=Math.floor(Math.random()*3);   //gives a random number between 0,1, and 2.
let cpuMove = choices[randomChoice];            //This choice correlates with the 3 possible moves to select our cpu's move.
return cpuMove;
}

const playerSelection = "rock";
const computerSelection =computerPlay();


function playRound(playerSelection, computerSelection){
    let Rock = 0;
    let Paper = 1;
    let Scissors = 2;
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
        return 
    }
}
