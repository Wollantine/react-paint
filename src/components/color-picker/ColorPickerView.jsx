import React, {PropTypes} from 'react';
import {Col, Row, ButtonToolbar, Button, Glyphicon} from 'react-bootstrap';
import './color-picker.css';

const colorButton = (color, key, onClick) => (
	<Button className="color-button" key={key} onClick={(e) => {onClick(color)}} value={color}>
		<Glyphicon bsClass="fa" glyph="square" bsSize="large" style={{color: color}} />
	</Button>
);

const rowOfColors = (colors, key, onClick) => {
	return colors.map((color, index) => {
		return colorButton(color, key+'-'+index, onClick);
	});
};

const rowOfButtons = (colors, key, onClick) => (
	<Row>
		<ButtonToolbar>
			{rowOfColors(colors, key, onClick)}
		</ButtonToolbar>
	</Row>
);

const chunkColorsInRows = (colors, maxRowSize) => {
	let i = 0;
	return colors.reduce((previous, color, index) => {
		if (previous[i].length < maxRowSize) {
			previous[i].push(color);
		} else {
			i++;
			previous.push([color]);
		}
		return previous;
	}, [[]]);
};

const ColorPickerView = (props) => {
	const {defaultColors, rowSize, onChangeColor} = props;

	return (
		<Col>
			{chunkColorsInRows(defaultColors, rowSize)
				.map((rowOfColors, index) => (rowOfButtons(rowOfColors, index, onChangeColor)))
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
