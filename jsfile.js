function computerPlay() {
  let random_temp = Math.random();
  if(random_temp < 1/3) {
    return "Rock";
  }
  else if(random_temp < 2/3) {
    return "Paper";
  }
  return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  // The player selection will always be capitalizaed.
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  if(playerSelection===computerSelection) {
    return "tie";
  }
  else {

    if(playerSelection==="Scissors"){
      if(computerSelection==="Paper") {
        return "user";
      }
      else {
        return "computer";
      }
    } 
    else if(playerSelection.toLowerCase==="Paper") {
      if(computerSelection=="Rock") {
        return "user";
      }
      else {
        return "computer";
      }
    }
    else {
      if(playerSelection==="Rock" && computerSelection==="Scissors") {
        return "user";
      }
      else {
        return "computer";
      }
    }
  }
}

function updateData() {
  scoreUserSpan.textContent = `${gameData[0]}`;
  scoreComputerSpan.textContent = `${gameData[1]}`;
  nRoundsSpan.textContent = `${gameData[2]}`;
}

function restart_game(e) {
  console.log(e);
  this.removeEventListener('click', restart_game);
  container.removeChild(this);
  container.removeChild(div);
  createEventListenerButtons();
  gameData = [0, 0, 0];
  updateData();
}

function game(e) {
  console.log(`user:${gameData[0]}--${gameData[1]}:computer`)
  let result = playRound(e.srcElement.getAttribute("class"), computerPlay());
  (result === "user") ? gameData[0]++ : (result==="computer") ? gameData[1]++ : null;
  gameData[2]++;
  updateData();
  if(gameData[0]>=5 || gameData[1]>=5) {
    buttons.forEach((button) => {
      button.removeEventListener('click', game);
    })
    buttonReset.addEventListener('click', restart_game);
    (gameData[0] > gameData[1]) ? div.textContent = "User wins!" : div.textContent = "Computer wins...";
    container.appendChild(buttonReset);
    container.appendChild(div);
  }
}

function createEventListenerButtons() {
  buttons.forEach((button) => {
    button.addEventListener('click', game);
  })
}

let gameData = [0, 0, 0];

const buttons = document.querySelectorAll("button");
createEventListenerButtons();
const container = document.querySelector(".container");
const div = document.createElement("div");
const buttonReset = document.createElement("button");

buttonReset.textContent = "RESET GAME";
div.style.cssText = "margin-top: 10px";

scoreUserSpan = document.querySelector("#score-user");
scoreComputerSpan = document.querySelector("#score-computer");
nRoundsSpan = document.querySelector("#n-rounds");
