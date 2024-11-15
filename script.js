let score = 0;
let timeLeft = 10;
let timerInterval;

const clickBtn = document.getElementById("click-btn");
const startBtn = document.getElementById("start-btn");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("time");
const finalScoreDisplay = document.getElementById("final-score");

function startGame() {
  score = 0;
  timeLeft = 10;
  clickBtn.disabled = false;
  finalScoreDisplay.textContent = "";
  scoreDisplay.textContent = score;
  timerDisplay.textContent = timeLeft;

  // Start the timer
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval); // Stop the timer when time is up
      endGame();
    }
  }, 1000);
}

function endGame() {
  clickBtn.disabled = true;
  finalScoreDisplay.textContent = `You clicked ${score} times! 🎉`;
}

clickBtn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

startBtn.addEventListener("click", startGame);
