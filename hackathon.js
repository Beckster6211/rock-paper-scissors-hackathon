//create variables
//If user selects Rock, then computer will select paper
//User WINS
//If user selects Paper, then computer will select Rock
//Computer WINS
//If user selects Paper, then computer selects Paper
// DRAW
//If user selects Rock, then Computer selects Rock
//DRAW
//Create Input for user
//Create button for result
//Result printed out

let possMoves = ["Rock", "Paper", "Scissors"];
let input = document.querySelector("input");

let playerScore = 0;
let computerScore = 0;
console.log(`Your score is ${playerScore}`);
console.log(`Computer score is ${computerScore}`);

let playerCount = document.querySelector("#playerCount");
let computerCount = document.querySelector("#computerCount");
let finalResult = document.querySelector("#finalResult");
let whoWins = document.querySelector("#whoWins");
let computersChoice = document.querySelector("#computersChoice");

alert("Let play Rock, Paper, Scissors");
alert("First to three points wins");
let name = prompt("Name...");
let playerEnter = document.querySelector("#playerEnter");
playerEnter.innerText = name;

function handleClick() {
  let value = input.value;
  let playerMoves = value;
  let randomMovesIndex = Math.floor(Math.random() * possMoves.length);
  let computerMove = possMoves[randomMovesIndex];
  if (playerMoves === "") {
    alert("Enter an option");
    console.log("Enter an option");
  }
  if (playerMoves === computerMove) {
    console.log(computerMove);
    whoWins.innerText = "Draw. No one wins that point. Try again";
    computersChoice.innerText = "Computer picks same";
    console.log("Draw. Try again");
    console.log(
      `Your score is: ${playerScore} - Computer score is: ${computerScore}`
    );
  }

  if (playerMoves === possMoves[0]) {
    if (computerMove === possMoves[1]) {
      console.log(computerMove);
      console.log("You lose!, computer wins, paper wraps rock");
      computersChoice.innerText = "Computer picks paper.";
      whoWins.innerText =
        "You lose! Paper wraps rock. Computer wins that point.";
      computerScore = computerScore + 1;
      console.log(
        `Your score is: ${playerScore} - Computer score is: ${computerScore}`
      );
      computerCount.innerText = computerScore;
    } else if (computerMove === possMoves[2]) {
      console.log(computerMove);
      console.log("You win! Rock breaks scissors!");
      computersChoice.innerText = "Computer picks scissors.";
      whoWins.innerText = "You win! Rock breaks scissors! Point to you";
      playerScore = playerScore + 1;
      console.log(
        `Your score is: ${playerScore} - Computer score is: ${computerScore}`
      );
      playerCount.innerText = playerScore;
    }
  }

  if (playerMoves === possMoves[1]) {
    if (computerMove === possMoves[2]) {
      console.log(computerMove);
      console.log("You lose!, computer wins, scissors cuts paper");
      computersChoice.innerText = "Computer picks scissors";
      whoWins.innerText =
        "You lose! Scissors cuts paper. Computer wins that point.";
      computerScore = computerScore + 1;
      console.log(
        `Your score is: ${playerScore} - Computer score is: ${computerScore}`
      );
      computerCount.innerText = computerScore;
    } else if (computerMove === possMoves[0]) {
      console.log(computerMove);
      console.log("You win! Paper wraps rock");
      computersChoice.innerText = "Computer picks rock";
      whoWins.innerText = "You win! Paper wraps rock. Point to you.";
      playerScore = playerScore + 1;
      console.log(
        `Your score is: ${playerScore} - Computer score is: ${computerScore}`
      );
      playerCount.innerText = playerScore;
    }
  }

  if (playerMoves === possMoves[2]) {
    if (computerMove === possMoves[0]) {
      console.log(computerMove);
      console.log("You Lose! Computer Wins, Rock breaks scissors");
      computersChoice.innerText = "Computer picks rock";
      whoWins.innerText =
        "You Lose! Rock breaks scissors. Computer Wins that point.";
      computerScore = computerScore + 1;
      console.log(
        `Your score is: ${playerScore} - Computer score is: ${computerScore}`
      );
      computerCount.innerText = computerScore;
    } else if (computerMove === possMoves[1]) {
      console.log(computerMove);
      console.log("You Win, Scissors cuts paper");
      computersChoice.innerText = "Computer picks paper";
      whoWins.innerText = "You Win. Scissors cuts paper. Point to you";
      playerScore = playerScore + 1;
      console.log(
        `Your score is: ${playerScore} - Computer score is; ${computerScore}`
      );
      playerCount.innerText = playerScore;
    }
  }

  final();
}

function final() {
  if (playerScore === 3) {
    finalResult.innerText = "YOU WIN!";
    console.log("YOU WIN!");
  } else if (computerScore === 3) {
    finalResult.innerText = "COMPUTER WINS!";
    console.log("COMPUTER WINS!");
  } else {
    console.log();
  }
}

let button = document.querySelector("button");
button.addEventListener("click", handleClick);
