const buttons = document.querySelectorAll("button");

let humanScore=0;
let computerScore=0;

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
    let result = playRound(button.id, getComputerChoice());
    console.log(result);
    });
});

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return `You win! Rock beats scissors! Score: ${humanScore} to ${computerScore}`;
          } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return `You win! Scissors beats paper! Score: ${humanScore} to ${computerScore}`;
          } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return `You win! Paper beats rock! Score: ${humanScore} to ${computerScore}`;
          } else if (humanChoice ==="rock" && computerChoice ==="paper") {
            computerScore++;
            return `You lose! Paper beats rock! Score: ${humanScore} to ${computerScore}`;
          } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            return `You lose! Scissors beats paper! Score: ${humanScore} to ${computerScore}`;
          } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            return `You lose! rock beats scissors! Score: ${humanScore} to ${computerScore}`;
          } else {
            return `It\'s a tie! Score: ${humanScore} to ${computerScore}`;
          }
}





