import React from 'react';
import PropTypes from 'prop-types';
import './Field.css';

const Field = ({ field, onCellClick }) => {
	return (
		<div className="field">
			{field.map((cell, index) => (
				<div key={index} className="cell" onClick={() => onCellClick(index)}>
					{cell}
				</div>
			))}
		</div>
	);
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};

export default Field;
