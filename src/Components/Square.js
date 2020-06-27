import React from 'react';

const style = {
	background: 'lightblue',
    border: '3px solid red',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}


const Square = ({value, onClick }) => (
	<button style={style} onClick={onClick}>
		{value}
	</button>
)

export default Square;