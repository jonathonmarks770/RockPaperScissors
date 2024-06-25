const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
let humanScore=0;
let computerScore=0;

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        if (humanScore == 5 || computerScore == 5) {
            return false;
        }playRound(button.id, getComputerChoice());
        checkWinner();
    });
});

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return result.textContent = `You win! Rock beats scissors! Score: ${humanScore} to ${computerScore}`;
          } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return result.textContent = `You win! Scissors beats paper! Score: ${humanScore} to ${computerScore}`;
          } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return result.textContent = `You win! Paper beats rock! Score: ${humanScore} to ${computerScore}`;
          } else if (humanChoice ==="rock" && computerChoice ==="paper") {
            computerScore++;
            return result.textContent = `You lose! Paper beats rock! Score: ${humanScore} to ${computerScore}`;
          } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            return result.textContent = `You lose! Scissors beats paper! Score: ${humanScore} to ${computerScore}`;
          } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            return result.textContent = `You lose! rock beats scissors! Score: ${humanScore} to ${computerScore}`;
          } else {
            return result.textContent = `It\'s a tie! Score: ${humanScore} to ${computerScore}`;
          }

}
function checkWinner(){
    let winner = document.getElementById("winner");
if (humanScore==5){
    return winner.textContent="Congrats! You beat the computer";
} else if(computerScore==5){
   return winner.textContent="Game Over!";
} 
}









