import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
// import './toolbox.css';
import Undoer from '../undoer/Undoer.jsx';
import ColorPicker from '../color-picker/ColorPicker.jsx';
import SizePicker from '../size-picker/SizePicker.jsx';

export class ToolboxContainer extends Component {

	propTypes:{
		width: PropTypes.integer.isRequired,
		height: PropTypes.integer.isRequired
	}
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Undoer/>
				<ColorPicker/>
				<SizePicker/>
			</div>
		);
	}

}

const Toolbox = ToolboxContainer;

export default Toolbox;
