import React from 'react';
import {Col, Row} from 'react-bootstrap';
// import './toolbox.css';
import Undoer from '../undoer/Undoer.jsx';
import ColorPicker from '../color-picker/ColorPicker.jsx';
import SizePicker from '../size-picker/SizePicker.jsx';

export default (props) => {
	return (
		<Col>
			<Row>
				<Undoer/>
			</Row>
			<Row>
				<ColorPicker/>
			</Row>
			<Row>
				<SizePicker/>
			</Row>
		</Col>
	);
}
