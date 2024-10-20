import { createStore } from 'redux';
import reducer from './reducers';

// Начальное состояние
const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

const store = createStore(reducer, initialState);

export default store;
