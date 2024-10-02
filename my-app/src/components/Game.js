import React, { useEffect, useState } from 'react';
import Field from './Field';
import Information from './Information';
import store from '../store/store';

// Переключение игрока
const Game = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	const handleCellClick = (index) => {
		if (state.isGameEnded || state.field[index] !== '') return;
		store.dispatch({ type: 'MAKE_MOVE', payload: { index } });
	};

	const handleRestart = () => {
		store.dispatch({ type: 'RESTART_GAME' });
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
			<button onClick={handleRestart}>Начать заново</button>
		</div>
	);
};

export default Game;
