import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Field from './Field';
import Information from './Information';
import { cellClick, handleRestart } from '../store/actions';

const Game = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleCellClick = (index) => {
		if (state.isGameEnded || state.field[index] !== '') return;
		dispatch(cellClick(index));
	};

	const restartGame = () => {
		dispatch(handleRestart());
	};

	return (
		<div>
			<Information
				currentPlayer={state.currentPlayer}
				isGameEnded={state.isGameEnded}
				isDraw={state.isDraw}
				winner={
					state.isGameEnded ? (state.currentPlayer === 'X' ? 'O' : 'X') : ''
				}
			/>
			<Field field={state.field} onCellClick={handleCellClick} />

			<button onClick={restartGame}>Начать заново</button>
		</div>
	);
};

export default Game;
