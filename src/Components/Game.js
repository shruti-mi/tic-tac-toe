import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

const Game = () => {

	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNest, setXisNext] = useState(true);
	const winner = calculateWinner(board);


	const handleClick = () => {

	}

	const jumpTo = () => {

	}

	const rebderMoves = () => {

	}

	return (
		<Board onClick = {handleClick}/>
	)
}

export default Game;