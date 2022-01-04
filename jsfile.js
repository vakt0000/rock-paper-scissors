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

function game() {
  let number_of_rounds_left = 5;
  let user_score = 0;
  let computer_score = 0;
  while(number_of_rounds_left>0) {
    let result = playRound(prompt("Please type 'Rock', 'Scissors' or 'Paper'."), computerPlay());
    number_of_rounds_left--;
    (result === "user") ? user_score++ : (result==="computer") ? computer_score++ : number_of_rounds_left++;
  }
  console.log(`Final user score: ${user_score} ---- FInal computer score: ${computer_score}`)
}

game();