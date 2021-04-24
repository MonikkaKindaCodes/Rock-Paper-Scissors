//Pulling queries from the DOM
const btn = document.querySelectorAll(".btn");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");
const resultText = document.querySelector(".result");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");
const userChoice = document.querySelector(".user-choice");
const computerChoice = document.querySelector(".computer-choice");

//Computer Choice Function
const computerPlay = function () {
  let compChoice = ["Rock", "Paper", "Scissors"];
  let randomChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
  return randomChoice;
};

//Play Round function

const playRound = function (playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = function (userChoice) {};
};

console.log(playRound());
