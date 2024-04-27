'use strict';

// Initialize variables
let secNumber = Math.trunc(Math.random() * 20) + 1; // Generate random number
let score = 20; // Initial score
let highScore = 0; // Initial high score

// Event listener for checking the guess
document.querySelector('.check').addEventListener('click', function () {
  // Get the user's guess and convert it to a number
  const guess = Number(document.querySelector('.guess').value);
  

  // Check if the guess is empty
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } 
  // Check if the guess is correct
  else if (guess === secNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secNumber;
    document.querySelector('body').style.backgroundColor = '#60b345'; // Change background color
    document.querySelector('.number').style.width = '30rem'; // Adjust number width

    // Update high score if current score is higher
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore; // Update high score on UI
    }
  } 
  // Handle incorrect guess
  else if (guess !== secNumber) {
    // Check if there are remaining attempts
    if (score > 1) {
      // Provide feedback based on whether guess is too high or too low
      document.querySelector('.message').textContent = guess > secNumber ? 'too high' : 'too low';
      score = score - 1; // Decrease score
      document.querySelector('.score').textContent = score; // Update score on UI
    } else {
      // If no remaining attempts, notify user about game loss
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0; // Reset score
    }
  }
});

// Event listener for starting a new game
document.querySelector('.again').addEventListener('click', function () {
  // Reset variables and UI elements for a new game
  score = 20;
  secNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222'; // Reset background color
  document.querySelector('.number').style.width = '15rem'; // Reset number width
});

