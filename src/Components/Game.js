import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

const Game = () => {

	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(history[stepNumber]);


	const handleClick = (i) => {
		const timeInHistory = history.slice(0, stepNumber+1);
		const current = timeInHistory[stepNumber];
		const localboard = [...current];

		if(winner || localboard[i])
			return;	// already win or clicked

		localboard[i] = xIsNext ? 'X' : 'O';

		setHistory([...timeInHistory, localboard]);
		setXisNext(!xIsNext);
		setStepNumber(timeInHistory.length);

	}

	const jumpTo = (step) => {
		setStepNumber(step);
		setXisNext(step%2 === 0);
	}

	const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })        
    )

	const style = {
		textAlign: "center",
		padding: "5px"
	}

	return (
		<>
			<Board onClick = {handleClick} squares = {history[stepNumber]}/>
			<div style = {style}>
		      	<p>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</p>
		    	{renderMoves()}
		    </div>
		</>
	)
}

export default Game;