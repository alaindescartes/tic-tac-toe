import { useState } from "react";
import GameOver from "./components/GameOver.jsx";
import GameBoard from "./components/gameBoard";
import Log from "./components/log.jsx";
import Player from "./components/player.jsx";
import { WINNING_COMBINATIONS } from "./util.js";

function deriveActivePlayer(gameTurns) {
  return gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";
}

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [playerName, setPlayerName] = useState({
    X: "player1",
    O: "player2",
  });
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = deriveActivePlayer(gameTurns);

  const gameBoard = gameTurns.reduce((board, turn) => {
    const { square, player } = turn;
    const newBoard = board.map((row) => [...row]);
    newBoard[square.row][square.col] = player;
    return newBoard;
  }, initialGameboard);

  // Function to derive the winner from the current game board
  function deriveWinner(board) {
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquare = board[combination[0].row][combination[0].column];
      const secondSquare = board[combination[1].row][combination[1].column];
      const thirdSquare = board[combination[2].row][combination[2].column];
      if (
        firstSquare &&
        firstSquare === secondSquare &&
        firstSquare === thirdSquare
      ) {
        return firstSquare === "X" ? playerName.X : playerName.O; // Return the winner
      }
    }
    return null; // No winner found
  }

  // Determine the winner
  const winner = deriveWinner(gameBoard);
  let draw = gameTurns.length === 9 && !winner;

  function switchPlayer(rowIndex, colIndex) {
    if (!gameBoard[rowIndex][colIndex] && !winner) {
      setGameTurns((prevTurns) => [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ]);
    }
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerChange(symbol, newName) {
    setPlayerName((precPlayerName) => {
      return {
        ...precPlayerName,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={playerName.X}
            symbol="X"
            isActive={currentPlayer === "X"}
            changeName={handlePlayerChange}
          />
          <Player
            name={playerName.O}
            symbol="O"
            isActive={currentPlayer === "O"}
            changeName={handlePlayerChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard currentPlayer={switchPlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
