import { CELL_CLICK, HANDLE_RESTART } from './actions';

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

const reducer = (state = {}, action) => {
	switch (action.type) {
		case CELL_CLICK:
			const newField = [...state.field];
			newField[action.index] = state.currentPlayer;

			if (checkWin(newField, state.currentPlayer)) {
				return { ...state, isGameEnded: true };
			} else if (!newField.includes('')) {
				return { ...state, isDraw: true };
			} else {
				return {
					...state,
					field: newField,
					currentPlayer: state.currentPlayer === 'X' ? '0' : 'X',
				};
			}
		case HANDLE_RESTART:
			return {
				currentPlayer: 'X',
				isGameEnded: false,
				isDraw: false,
				field: ['', '', '', '', '', '', '', '', ''],
			};
		default:
			return state;
	}
};

export default reducer;
