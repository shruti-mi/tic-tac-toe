import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

const Game = () => {

	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNest, setXisNext] = useState(true);
	const winner = calculateWinner(board);


	const handleClick = (i) => {
		const localboard = [...board];

		if(winner || localboard[i])
			return;	// already win or clicked

		localboard[i] = xIsNest ? 'X' : 'O';

		setBoard(localboard);
		setXisNext(!xIsNest);

	}

	const jumpTo = () => {

	}

	const renderMoves = () => {

	}

	return (
		<Board onClick = {handleClick} squares = {board}/>
	)
}

export default Game;