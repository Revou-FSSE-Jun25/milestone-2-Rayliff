//atur score awal. player dan komputer
let playerScore = 0;
let computerScore = 0;

// Ambil elemen HTML
const playerChoiceText = document.getElementById("player-choice");
const computerChoiceText = document.getElementById("computer-choice");
const resultText = document.getElementById("result");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");
const choiceButtons = document.querySelectorAll(".choose");

// Fungsi random pilihan komputer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Fungsi menentukan pemenang
function getWinner(player, computer) {
  if (player === computer) return "Seri!";

  switch (player) {
    case "rock":
      if (computer === "scissors") {
        playerScore++;
        return "Kamu Menang!";
      }
      break;
    case "paper":
      if (computer === "rock") {
        playerScore++;
        return "Kamu Menang!";
      }
      break;
    case "scissors":
      if (computer === "paper") {
        playerScore++;
        return "Kamu Menang!";
      }
      break;
  }

  computerScore++;
  return "Komputer Menang!";
}

// Main game
function play(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getWinner(playerChoice, computerChoice);

  playerChoiceText.textContent = `🧑🏻: ${playerChoice}`;
  computerChoiceText.textContent = `🤖: ${computerChoice}`;
  resultText.textContent = `Hasil: ${result}`;
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;

  // Reset style hasil
  resultText.classList.remove("win", "lose", "draw");

  if (result.includes("Kamu")) {
    resultText.classList.add("win");
  } else if (result.includes("Komputer")) {
    resultText.classList.add("lose");
  } else {
    resultText.classList.add("draw");
  }
}

// Event listener tombol
choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const text = button.textContent.toLowerCase();
    let choice = "";

    if (text.includes("rock")) choice = "rock";
    else if (text.includes("paper")) choice = "paper";
    else choice = "scissors";

    play(choice);
  });
});