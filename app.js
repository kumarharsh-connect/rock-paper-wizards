let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const message = document.querySelector('#message');
let userScoreBoard = document.querySelector('#user-score');
let compScoreBoard = document.querySelector('#comp-score');

const genCompChoice = () => {
  options = ['rock', 'paper', 'scissor'];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = (userChoice, compChoice) => {
  message.innerText = `Game was draw, You both Chose ${userChoice}`;
  message.style.backgroundColor = '#081b31';
};

showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    userScore++;
    userScoreBoard.innerText = userScore;
    message.innerText = `Wohoo, You Won! your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = 'green';
  } else {
    compScore++;
    compScoreBoard.innerText = compScore;
    message.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    message.style.backgroundColor = 'red';
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame(userChoice, compChoice);
  } else {
    let userWin = true;
    if (userChoice === 'rock') {
      userWin = compChoice === 'paper' ? false : true;
    } else if (userChoice === 'paper') {
      userWin = compChoice === 'scissor' ? false : true;
    } else {
      userWin = compChoice === 'rock' ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
  });
});
