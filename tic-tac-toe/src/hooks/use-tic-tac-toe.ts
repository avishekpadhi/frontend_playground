import { useMemo, useState } from "react";

const useTicTacToe = (size: number = 3) => {
  const initialBoard = (size: number) => Array(size * size).fill(null);
  const [board, setBoard] = useState(initialBoard(size));
  const [isXNext, setIsXNext] = useState(true);

  const generateWinningPatterns = (size: number) => {
    const patterns = [];

    for (let r = 0; r < size; r++) {
      const row = [];
      for (let c = 0; c < size; c++) {
        row.push(r * size + c);
      }
      patterns.push(row);
    }

    for (let c = 0; c < size; c++) {
      const col = [];
      for (let r = 0; r < size; r++) {
        col.push(r * size + c);
      }
      patterns.push(col);
    }

    const diag1 = [];
    const diag2 = [];
    for (let i = 0; i < size; i++) {
      diag1.push(i * size + i); // top-left to bottom-right
      diag2.push(i * size + (size - 1 - i)); // top-right to bottom-left
    }
    patterns.push(diag1);
    patterns.push(diag2);

    return patterns;
  };
  const WINNING_PATTERNS = useMemo(() => generateWinningPatterns(size), [size]);

  //rows

  const calculateWinner = (currentBoard) => {
    for (const pattern of WINNING_PATTERNS) {
      const first = currentBoard[pattern[0]];
      if (first && pattern.every((i) => currentBoard[i] === first)) {
        return first;
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    console.log(winner);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `player ${winner} wins!`;
    if (!board.includes(null)) return `It is a draw!`;
    return `Player ${isXNext ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    setBoard(initialBoard(4));
    setIsXNext(true);
  };
  return { board, handleClick, getStatusMessage, resetGame };
};

export default useTicTacToe;
