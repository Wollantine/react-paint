import React, {PropTypes} from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

const SizePickerView = (props) => {
	const {brushSize, changeBrushSize} = props;

	return (
		<FormGroup>
			<FormControl
				type="number" 
				value={brushSize}
				placeholder="Brush size"
				onChange={changeBrushSize}
				min={1}
			/>
		</FormGroup>
	);
};

SizePickerView.propTypes = {
    brushSize: PropTypes.number.isRequired,
    changeBrushSize: PropTypes.func.isRequired
};

export default SizePickerView;
