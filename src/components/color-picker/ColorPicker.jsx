import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ColorPickerView from './ColorPickerView.jsx';

export class ColorPickerContainer extends Component {

	propTypes:{
	}
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ColorPickerView/>
		);
	}

}

// const mapDispatchToProps = (dispatch) => ({
	
// });

const ColorPicker = ColorPickerContainer;

export default ColorPicker;
