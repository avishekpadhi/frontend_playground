import useTicTacToe from "../hooks/use-tic-tac-toe";

function TicTacToe() {
  const { board, calculateWinner, resetGame, getStatusMessage, handleClick } =
    useTicTacToe();
  return (
    <div className="game  max-w-[500px] mx-auto items-center">
      <div className="status m-5 flex justify-between">
        {getStatusMessage()}
        <button className="border rounded px-2 py-1" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board grid grid-cols-3 gap-2">
        {board.map((b, index) => (
          <button
            className="cell p-2 border rounded cursor-pointer h-40 w-40"
            key={index}
            onClick={() => handleClick(index)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
