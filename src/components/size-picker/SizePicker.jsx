import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import SizePickerView from './SizePickerView.jsx';
import createAction from '../../actions/ActionFactory.js';

export class SizePickerContainer extends Component {

	static propTypes = {
		size: PropTypes.number.isRequired,
		onChangeSize: PropTypes.func.isRequired
	};
	
	constructor(props) {
		super(props);
	}

	changeSize(e) {
		this.props.onChangeSize(parseInt(e.target.value));
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
		dispatch(createAction('CHANGE_STROKE_PROPERTY', {property: 'size', value: size}));
	}
});

const SizePicker = connect(
	mapStateToProps,
	mapDispatchToProps
)(SizePickerContainer);

export default SizePicker;
