'use strict';

/*-------------------------------------DOM-----------------------------------------------------------------------
//Selects the element 
console.log(document.querySelector('.message'));

//on top on element selected we select the content
console.log(document.querySelector('.message').textContent);


*/

/* -------------------------------------Selecting and Manipulating Elements-----------------------------------------------------------------------

console.log(document.querySelector('.message'));

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
console.log(document.querySelector('.number').textContent);

document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.score').textContent);

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

//-------------------------------------handling click event----------------------------------------------------

//generating a random number

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// console.log(document.querySelector('.number').textContent);

// while (random !== 20) {
//   console.log('no yet');
//   random = Math.trunc(Math.random() * 20) + 1;
// }

let score = 20;
//here we want our code to be not dependent on DOM data
// application state or active state of application.

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//here addEvent Listener accepts two arguments 1 is event and other is function which tells what should occur when the event happens
// here we do not call this funtion as javascript engine which runs in browser will automatically call the
// function whenever that particular event happens.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    // console.log(`⛔ No Number!`);
    // document.querySelector('.message').textContent = `⛔ No Number!`;
    displayMessage('⛔ No Number!');
  }
  //when the player wins
  else if (guess === secretNumber) {
    // console.log(guess, typeof guess);
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');
    // console.log(document.querySelector('.guess').value);

    //Also css property is in camel case naming
    //setting up background color to green when player wins.
    document.querySelector('body').style.backgroundColor = '#60b347';
    // this color style will be inline css for selected element.

    //inline css for element having .number class
    document.querySelector('.number').style.width = '30rem';

    //display number when player wins
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when the guess if wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';

      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }

  //when guess is too high
  // else if (guess > secretNumber) {
  //   //score must be greater than 1
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //   }

  //   //whem guess is too low
  // } else if (guess < secretNumber) {
  //   //score must be greater than 1
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
});
