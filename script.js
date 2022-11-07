const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const tabs = document.querySelectorAll(".grid");
let currentPlayer = 1;
let table = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

const init = function () {
  player1.classList.add("active-player");
};
tabs.forEach((tab) =>
  tab.addEventListener("click", function (e) {
    const index = e.target.classList[1].slice(-1);
    table[index - 1] = currentPlayer;
    if (currentPlayer === 1) {
      tab.textContent = "X";
      if (check(currentPlayer)) {
        alert("player" + currentPlayer + " win!");
        restart();
        return true;
      }
      player1.classList.remove("active-player");
      player2.classList.add("active-player");
      currentPlayer = 2;
    } else {
      tab.textContent = "O";
      if (check(currentPlayer)) {
        alert("player" + currentPlayer + " win!");
        restart();
        return true;
      }
      player2.classList.remove("active-player");
      player1.classList.add("active-player");
      currentPlayer = 1;
    }
    console.log(currentPlayer);

    console.log(currentPlayer);
  })
);

const check = function (x) {
  console.log(table);
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
  table = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
  player1.classList.add("active-player");
  player2.classList.remove("active-player");
  tabs.forEach((tab) => (tab.textContent = ""));
};

console.log(tabs);
init();
