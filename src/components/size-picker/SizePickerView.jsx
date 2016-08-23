import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
import Icon from '../icon/Icon.js';

export default (props) => {
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
}
