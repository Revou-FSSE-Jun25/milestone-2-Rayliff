//atur score awal. player dan komputer
let playerScore = 0;
let computerScore = 0;

//panggil DOM element
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");

const playerChoiceText = document.getElementById("player-choice");
const computerChoiceText = document.getElementById("computer-choice");
const resultText = document.getElementById("result");

//fungsi getComputerChoice, untuk membuat botnya
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length); //length memberi tahu berapa banyak isi dalam array atau string. Bisa kasih angka acak sesuai jumlah item, tanpa kita harus tulis manual.
  return options[randomIndex];
}

//fungsi getWinner, untuk menampilkan hasil pemenangnya.
function getWinner(player, computer) {
  if (player === computer) return "Seri!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return "Kamu Menang!";
  } else {
    computerScore++;
    return "Komputer Menang!";
  }
}

//fungsi play, untuk membuat tombol onclick berjalan
function play(playerChoice) {
  //menambahkan input validation
  if (!playerChoice || !["rock", "paper", "scissors"].includes(playerChoice)) {
    console.error("Invalid player choice!");
    return;
  }

  const computerChoice = getComputerChoice();
  const result = getWinner(playerChoice, computerChoice);

  //menambahkan  null check
  if(playerChoiceText && computerChoiceText && resultText && playerScoreText && computerScoreText) {
    playerChoiceText.textContent = `🧑🏻: ${playerChoice}`;
    computerChoiceText.textContent = `🤖: ${computerChoice}`;
    resultText.textContent = `Hasil: ${result}`;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
  }
}
