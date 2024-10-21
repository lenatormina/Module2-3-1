import React, { Component } from 'react';
import { connect } from 'react-redux';
import Field from './Field';
import Information from './Information';
import { cellClick, handleRestart } from '../store/actions';

class Game extends Component {
	handleCellClick = (index) => {
		if (this.props.isGameEnded || this.props.field[index] !== '') return;
		this.props.cellClick(index);
	};

	restartGame = () => {
		this.props.handleRestart();
	};

	render() {
		const { currentPlayer, isGameEnded, isDraw, field } = this.props;
		const winner = isGameEnded ? (currentPlayer === 'X' ? 'O' : 'X') : '';

		return (
			<div className="p-4">
				<Information
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					isDraw={isDraw}
					winner={winner}
				/>
				<Field field={field} onCellClick={this.handleCellClick} />
				<button
					onClick={this.restartGame}
					className="mt-4 p-2 bg-blue-500 text-white rounded"
				>
					Начать заново{' '}
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
	field: state.field,
});

const mapDispatchToProps = {
	cellClick,
	handleRestart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
