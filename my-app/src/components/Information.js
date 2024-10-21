import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Information extends Component {
	render() {
		const { currentPlayer, isGameEnded, isDraw, winner } = this.props;

		if (isDraw) {
			return <div className="text-lg font-bold">Ничья</div>;
		}

		if (isGameEnded) {
			return <div className="text-lg font-bold">Победа: {winner}</div>;
		}

		return <div className="text-lg font-bold">Ходит: {currentPlayer}</div>;
	}
}

Information.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	winner: PropTypes.string,
};

export default Information;
