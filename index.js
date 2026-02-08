let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
function getHumanChoice() {
  const choice = prompt();
  return choice.toLowerCase();
}
function playRound(humanChoice, computerChoice) {
  if (computerChoice === "rock") {
    switch (humanChoice) {
      case "rock":
        console.log("You tie! Rock ties Rock");
      case "paper":
        console.log("You win! Paper beats Rock");
      case "scissors":
        console.log("You lose! Rock beats Scissors");
    }
  } else if (computerChoice === "paper") {
    switch (humanChoice) {
      case "rock":
        console.log("You lose! Paper beats Rock");
      case "paper":
        console.log("You tie! Paper ties Paper");
      case "scissors":
        console.log("You win! Scissors beats Paper");
    }
  } else if (computerChoice === "scissors") {
    switch (humanChoice) {
      case "rock":
        console.log("You win! Rock beats Scissors");
      case "paper":
        console.log("You lose! Scissors beats Paper");
      case "scissors":
        console.log("You tie! Scissors ties Scissors");
    }
  }
}
