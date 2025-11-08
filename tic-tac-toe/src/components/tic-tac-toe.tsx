import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

function TicTacToe() {
  const [board, setBoard] = useState(initialBoard());
  return (
    <div className="game  max-w-[400px] mx-auto items-center">
      <div className="status m-5 flex justify-between">
        Player X Turn
        <button className="border rounded px-2 py-1">Reset Game</button>
      </div>

      <div className="board grid grid-cols-3 gap-2">
        {board.map((bd, index) => (
          <button
            className="cell p-2 border rounded cursor-pointer"
            key={index}
          >
            X
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
