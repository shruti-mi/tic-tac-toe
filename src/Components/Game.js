import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

const Game = () => {

	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = (i) => {
		const localboard = [...board];

		if(winner || localboard[i])
			return;	// already win or clicked

		localboard[i] = xIsNext ? 'X' : 'O';

		setBoard(localboard);
		setXisNext(!xIsNext);

	}

	const jumpTo = () => {

	}

	const style = {
		textAlign: "center",
		padding: "5px"
	}

	return (
		<>
			<Board onClick = {handleClick} squares = {board}/>
		
			<p style = {style}>
		      	{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
		    </p>
			<div style = {style}>
				<button style = {style} onClick = {() => setBoard(Array(9).fill(null))}>
					Start Game
			    </button>
			</div>
		</>
	)
}

export default Game;