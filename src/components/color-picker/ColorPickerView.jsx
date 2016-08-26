import React, {PropTypes} from 'react';
import {Col, Row, ButtonToolbar, Button, Glyphicon} from 'react-bootstrap';
import './color-picker.css';

export const renderColorButton = (color, key, onClick) => (
	<Button className="color-button" key={key} onClick={(e) => {onClick(color)}} value={color}>
		<Glyphicon bsClass="fa" glyph="square" bsSize="large" style={{color: color}} />
	</Button>
);

export const renderRowOfButtons = (colors, key, onClick) => (
	<Row key={key}>
		<ButtonToolbar>
			{colors.map((color, index) => {
				return renderColorButton(color, key+'-'+index, onClick);
			})}
		</ButtonToolbar>
	</Row>
);

export const splitInChunks = (array, maxRowSize) => {
	if (!Array.isArray(array)) {
		throw new SyntaxError('Expected array as first parameter');
	}
	if (typeof maxRowSize != 'number' || isNaN(maxRowSize) || maxRowSize < 1) {
		return array;
	}
	let i = 0;
	return array.reduce((previous, item, index) => {
		if (previous[i].length < maxRowSize) {
			previous[i].push(item);
		} else {
			i++;
			previous.push([item]);
		}
		return previous;
	}, [[]]);
};



const ColorPickerView = (props) => {
	const {defaultColors, rowSize, onChangeColor} = props;

	return (
		<Col md={12}>
			{splitInChunks(defaultColors, rowSize)
				.map((rowOfColors, index) => (renderRowOfButtons(rowOfColors, index, onChangeColor)))
			}
		</Col>
	);
};

ColorPickerView.propTypes = {
	defaultColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    rowSize: PropTypes.number,
    onChangeColor: PropTypes.func.isRequired
};

ColorPickerView.defaultProps = {
	rowSize: 5
};

export default ColorPickerView;
