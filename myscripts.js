function computerPlay(){

    return Math.floor(Math.random()*3);   //gives a random number between 0,1, and 2.

}
function disableButtons(){
    buttons.forEach(elem => {
        elem.disabled = true
    })
}


let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection){
   let computerSelection = computerPlay();
   let result = '';
   console.log("playerSelection:" + playerSelection);
   console.log("computerSelection:" + computerSelection);
  
   
   if((playerSelection == 0 && computerSelection == 2) ||
   (playerSelection == 1 && computerSelection == 0) ||
   (playerSelection == 2 && computerSelection == 1)){
    playerWins++;
    result = `You win! You have ${playerWins} wins, the opponent has ${computerWins} wins.`;

    if(playerWins == 5){
        result = `You won the whole game! Nice!`;
        disableButtons();
        }
   

}
   
    else if ((playerSelection == 2 && computerSelection ==0)||
    (playerSelection == 1 && computerSelection == 2)||
    (playerSelection == 0 && computerSelection == 1)){
        computerWins++;
        result = `You lose! You have ${playerWins} wins, the opponent has ${computerWins} wins.`
        
        if(computerWins == 5){
            result = `You lose the game! Better luck next time.`;
            disableButtons();
            }
        
    }
    else{
        result = `Thats a tie! You chose the same thing! The score is ${playerWins} to ${computerWins}`
    }

    

   

    document.getElementById('result').innerHTML = result
   return;
    

}


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', function(){
    playRound('0');
});
paper.addEventListener('click',function(){
    playRound('1');
})
scissors.addEventListener('click',function(){
    playRound('2');
})
