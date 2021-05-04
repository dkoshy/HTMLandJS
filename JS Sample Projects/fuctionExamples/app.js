const startGameBtn = document.getElementById("start-game-btn");

let playerSelection, computerSelection;
isGameRunning = false;

const ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSORS = "SCISSORS",
  DefaultSelcetion = ROCK;

const getUserInput = function () {
  let selection = prompt("Please eneter your Selection", "").toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Selection , Default Selection is ${DefaultSelcetion}`);
    //selection = DefaultSelcetion;
    return;
  }
  return selection;
};

const getwhowins = function (cChoice, pChoice = DefaultSelcetion) {
  if (cChoice === pChoice) {
    console.log('DRAW');
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
      console.log('PLAYER WINS');
  }
  else{
      console.log('COMPUTER WINS');
  }
};

const getComputerInput = function () {
  let randomGuess = Math.random();

  if (randomGuess < 0.34) {
    return ROCK;
  } else if (randomGuess < 0.64) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

startGameBtn.addEventListener("click", function () {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log("Game started");
  playerSelection = getUserInput();
  console.log(playerSelection);
  computerSelection = getComputerInput();
  console.log(computerSelection);
  getwhowins(computerSelection,playerSelection);
});
