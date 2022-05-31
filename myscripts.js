function computerPlay(){
let choices = ['Rock','Paper','Scissors'];      //provides the 3 possible moves in the game
let randomChoice=Math.floor(Math.random()*3);   //gives a random number between 0,1, and 2.
let cpuMove = choices[randomChoice];            //This choice correlates with the 3 possible moves to select our cpu's move.
return cpuMove;
}