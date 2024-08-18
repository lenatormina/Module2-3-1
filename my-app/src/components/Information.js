import React from 'react';
import PropTypes from 'prop-types';

const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	if (isDraw) {
		return <div>Ничья</div>;
	}

	if (isGameEnded) {
		return <div>Победа: {currentPlayer}</div>;
	}

	return <div>Ходит: {currentPlayer}</div>;
};

Information.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

export default Information;
