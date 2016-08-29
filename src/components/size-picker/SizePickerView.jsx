import React, {PropTypes} from 'react';
import {FormGroup, FormControl, Col} from 'react-bootstrap';

const SizePickerView = (props) => {
	const {brushSize, changeBrushSize} = props;

	return (
		<Col md={4}>
			<FormGroup>
				<FormControl
					type="number" 
					value={brushSize}
					placeholder="Brush size"
					onChange={changeBrushSize}
					min={1}
				/>
			</FormGroup>
		</Col>
	);
};

SizePickerView.propTypes = {
    brushSize: PropTypes.number.isRequired,
    changeBrushSize: PropTypes.func.isRequired
};

export default SizePickerView;
