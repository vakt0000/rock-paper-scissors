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
  console.log(computerSelection);
  console.log(playerSelection);
  if(playerSelection===computerSelection) {
    console.log(`It's a tie! You and the computer selected ${computerSelection}.`);
    return "tie";
  }
  else {

    if(playerSelection==="Scissors"){
      if(computerSelection==="Paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "user";
      }
      else {
        console.log(`Computer wins... ${computerSelection} beats ${playerSelection}`);
        return "computer";
      }
    } 
    else if(playerSelection.toLowerCase==="Paper") {
      if(computerSelection=="Rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "user";
      }
      else {
        console.log(`Computer wins... ${computerSelection} beats ${playerSelection}`);
        return "computer";
      }
    }
    else {
      if(playerSelection==="Rock" && computerSelection==="Scissors") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "user";
      }
      else {
        console.log(`Computer wins... ${computerSelection} beats ${playerSelection}`);
        return "computer";
      }
    }
  }
}

function updateData() {
  scoreUserSpan.textContent = `${gameData[0]}`;
  scoreComputerSpan.textContent = `${gameData[1]}`;
  nMatchesSpan.textContent = `${gameData[2]}`;
}

function game(e) {
  if(gameData[0]>=5 || gameData[1]>=5) {
    buttons.forEach((button) => {
      button.removeEventListener('click', game);
    })
  }
  else {
    console.log(`user:${gameData[0]}--${gameData[1]}:computer`)
    let result = playRound(e.srcElement.getAttribute("class"), computerPlay());
    (result === "user") ? gameData[0]++ : (result==="computer") ? gameData[1]++ : null;
    gameData[2]++;
    updateData();
  }

}

let gameData = [0, 0, 0];

buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener('click', game);
})

scoreUserSpan = document.querySelector("#score-user");
scoreComputerSpan = document.querySelector("#score-computer");
nMatchesSpan = document.querySelector("#n-matches");
