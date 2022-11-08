const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const tabs = document.querySelectorAll(".grid");
const winner = document.querySelector(".winner");
let currentPlayer = 1;
let table;

const init = function () {
  player1.classList.add("active-player");
  table = [0, 0, 0, 0, 0, 0, 0, 0, 0];
};

tabs.forEach((tab) =>
  tab.addEventListener("click", function (e) {
    const index = e.target.classList[1].slice(-1);
    if (table[index - 1] === 0) {
      table[index - 1] = currentPlayer;
      tab.textContent = currentPlayer === 1 ? "X" : "O";
      if (check(currentPlayer)) {
        winner.textContent = `player ${currentPlayer} is the winner`;
        restart();
        return true;
      }
      changePlayer();
    }
  })
);
const changePlayer = function () {
  player1.classList.toggle("active-player");
  player2.classList.toggle("active-player");
  currentPlayer = currentPlayer === 1 ? 2 : 1;
};
const check = function (x) {
  if (table[0] === x && table[1] === x && table[2] === x) return true;
  if (table[0] === x && table[3] === x && table[4] === x) return true;
  if (table[0] === x && table[4] === x && table[8] === x) return true;
  if (table[1] === x && table[4] === x && table[7] === x) return true;
  if (table[3] === x && table[4] === x && table[5] === x) return true;
  if (table[2] === x && table[4] === x && table[6] === x) return true;
  if (table[2] === x && table[5] === x && table[8] === x) return true;
  if (table[6] === x && table[7] === x && table[8] === x) return true;
};

const restart = function () {
  player1.classList.remove("active-player");
  player2.classList.remove("active-player");
  tabs.forEach((tab) => (tab.textContent = ""));
};

init();
