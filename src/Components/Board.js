import React from 'react';
import Square from './Square';
 
const style = {
	border: '4px solid darkblue',
	borderRadius: '10px',
	width: '350px',
	height: '300px',
	margin: '0 auto',
	display: 'grid',
	gridTemplate: 'repeat(3, 1fr) / repeat(3,1fr)'
};


const Board = ({ squares, onClick }) => (
	<div style={style}>
		<Square value = "1" onClick = {() => onClick("yet")}/>
		<Square value = "2" onClick = {() => onClick("yet")}/>
		<Square value = "3" onClick = {() => onClick("yet")}/>
		<Square value = "4" onClick = {() => onClick("yet")}/>
		<Square value = "5" onClick = {() => onClick("yet")}/>
		<Square value = "6" onClick = {() => onClick("yet")}/>
		<Square value = "7" onClick = {() => onClick("yet")}/>
		<Square value = "8" onClick = {() => onClick("yet")}/>
		<Square value = "9" onClick = {() => onClick("yet")}/>
	</div>
)

export default Board;