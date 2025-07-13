const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restart');
const difficultySelect = document.getElementById('difficulty');
const jumpSound = document.getElementById('jumpSound');
const failSound = document.getElementById('failSound');

let score = 0;
let scoreInterval;
let gameOver = false;

function startGame() {
  score = 0;
  gameOver = false;
  obstacle.style.left = '600px';
  scoreDisplay.innerText = 'Score: 0';

  let speed = difficultySelect.value;
  obstacle.style.animation = `obstacleMove ${speed}ms linear infinite`;

  scoreInterval = setInterval(() => {
    if (!gameOver) {
      score++;
      scoreDisplay.innerText = 'Score: ' + score;
    }
  }, 200);
}

function jump() {
  if (gameOver) return;
  if (!character.classList.contains('jump')) {
    character.classList.add('jump');
    jumpSound.currentTime = 0;
    jumpSound.play();
    setTimeout(() => character.classList.remove('jump'), 500);
  }
}

function checkCollision() {
  let charTop = parseInt(getComputedStyle(character).getPropertyValue('top'));
  let obsLeft = parseInt(getComputedStyle(obstacle).getPropertyValue('left'));

  if (obsLeft < 80 && obsLeft > 0 && charTop >= 130 && !gameOver) {
    gameOver = true;
    failSound.play();
    alert("💥 Game Over! Score: " + score);
    obstacle.style.animation = 'none';
    clearInterval(scoreInterval);
  }
}

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);
restartBtn.addEventListener('click', startGame);
difficultySelect.addEventListener('change', startGame);

setInterval(checkCollision, 10);
startGame();
