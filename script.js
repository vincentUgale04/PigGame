'use strict';

//Selecting Elements
const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const buttonReset = document.querySelector('.btn--new');
let CurrentPlayerScore1 = document.querySelector('#current--0');
let CurrentPlayerScore2 = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Assign the text contents to 0
score1El.textContent = 0;
score2El.textContent = 0;

//To hide the dice in the start
diceEl.classList.add('hidden');

//Generate a Random number for the dice
console.log(Math.trunc(Math.random() * 6) + 1);
const randomDiceRoll = Math.trunc(Math.random() * 6) + 1;

//Current score
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
//switch players
const switchPlayers = function () {
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  document;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
buttonRoll.addEventListener('click', function () {
  console.log('button is click');
  if (playing) {
    //Genenating the Random number
    //Display the Dice
    const randomDiceRoll = Math.trunc(Math.random() * 6) + 1;
    console.log(randomDiceRoll);
    diceEl.classList.remove('hidden');

    //display the random image according to the number
    diceEl.src = `dice-${randomDiceRoll}.png`;
    //Check if the dice is not equal to 1 then add the score else switch the players
    if (randomDiceRoll !== 1) {
      //Add the dice to the current player
      currentScore += randomDiceRoll;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      // CurrentPlayerScore1.textContent = currentScore;
    } else {
      //Switch the players
      switchPlayers();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    //1.Add current score to the total
    //2.if score >=100
    //3.then current player wins
    //4.else switch the players
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log(`score--${activePlayer}.textContent = scores[activePlayer]`);
    if (scores[activePlayer] >= 20) {
      playing = false;
      console.log(`current--${activePlayer} wins`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayers();
    }
  }
});

//reseting everything
buttonReset.addEventListener('click', function () {
  console.log('reset button clicked');
  playing = true;
  score1El.textContent = 0;
  score2El.textContent = 0;
  CurrentPlayerScore1.textContent = 0;
  CurrentPlayerScore1.textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
});
