import * as fen from './fenetre.js';

export function morpion() {
    const board = document.querySelector('.board');
    let cells = [];
    let currentPlayer = 'X';
    let gameEnded = false;

    // Créer les cellules du morpion
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.index = i;
      cell.addEventListener('click', cellClick);
      board.appendChild(cell);
      cells.push(cell);
    }

    // Gérer le clic sur une cellule
    function cellClick() {
      if (gameEnded || this.textContent !== '') return;

      this.textContent = currentPlayer;
      checkWin();
      if (!gameEnded) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        computerMove();
      }
    }

    // Fonction pour que l'ordinateur joue
    function computerMove() {
      if (gameEnded) return;

      let emptyCells = cells.filter(cell => cell.textContent === '');
      if (emptyCells.length === 0) {
        endGame('Match nul !');
        return;
      }

      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const cell = emptyCells[randomIndex];
      cell.textContent = currentPlayer;
      checkWin();
      if (!gameEnded) currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    // Fonction pour vérifier si quelqu'un a gagné
    function checkWin() {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colonnes
        [0, 4, 8], [2, 4, 6]              // diagonales
      ];

      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent !== '' &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent) {
          endGame(`Le joueur ${cells[a].textContent} a gagné !`);
          return;
        }
      }
    }

    // Fonction pour terminer le jeu
    function endGame(message) {
      gameEnded = true;
      alert(message);
    }
  }