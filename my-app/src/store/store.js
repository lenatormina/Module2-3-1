import { createStore } from 'redux';

// Начальное состояние
const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

// Редьюсер
const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'MAKE_MOVE':
			const newField = [...state.field];
			newField[action.payload.index] = state.currentPlayer;
			const isWin = checkWin(newField, state.currentPlayer);
			return {
				...state,
				field: newField,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
				isGameEnded: isWin,
				isDraw: !isWin && !newField.includes(''),
			};

		case 'RESTART_GAME':
			return initialState;

		default:
			return state;
	}
};

// Проверка победы
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

const checkWin = (field, player) => {
	return WIN_PATTERNS.some((pattern) => {
		return pattern.every((index) => field[index] === player);
	});
};

// Создание хранилища
const store = createStore(gameReducer);

export default store;
