import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Field extends Component {
	render() {
		const { field, onCellClick } = this.props;
		return (
			<div className="grid grid-cols-3 gap-0">
				{field.map((cell, index) => (
					<div
						key={index}
						className="w-14 h-14 border border-gray-300 cursor-pointer"
						onClick={() => onCellClick(index)}
					>
						{cell}
					</div>
				))}
			</div>
		);
	}
}

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};

export default Field;
