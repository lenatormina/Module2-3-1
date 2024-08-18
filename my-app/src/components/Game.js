import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Field from './Field';
import Information from './Information';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleCellClick = (index) => {
		if (isGameEnded || field[index] !== '') return;

		const newField = [...field];
		newField[index] = currentPlayer;

		setField(newField);

		if (checkWin(newField, currentPlayer)) {
			setIsGameEnded(true);
		} else if (!newField.includes('')) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	const checkWin = (field, player) => {
		return WIN_PATTERNS.some((pattern) => {
			return pattern.every((index) => field[index] === player);
		});
	};

	const handleRestart = () => {
		setIsGameEnded(false);
		setIsDraw(false);
		setCurrentPlayer('X');
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return (
		<div>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field field={field} onCellClick={handleCellClick} />
			<button onClick={handleRestart}>Начать заново</button>
		</div>
	);
};

export default Game;
