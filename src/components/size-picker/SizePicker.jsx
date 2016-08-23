import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import SizePickerView from './SizePickerView.jsx';
import changeStrokeProperty from '../../actions/ChangeStrokeProperty.js';

export class SizePickerContainer extends Component {

	propTypes:{
	}
	
	constructor(props) {
		super(props);
	}

	changeSize(e) {
		this.props.onChangeSize(e.target.value);
	}

	render() {
		const {size} = this.props;

		return (
			<SizePickerView brushSize={size} changeBrushSize={this.changeSize.bind(this)}/>
		);
	}

}

const mapStateToProps = (state) => ({
	size: state.stroke.size
});

const mapDispatchToProps = (dispatch) => ({
	onChangeSize: (size) => {
		dispatch(changeStrokeProperty({property: 'size', value: size}));
	}
});

const SizePicker = connect(
	mapStateToProps,
	mapDispatchToProps
)(SizePickerContainer);

export default SizePicker;
