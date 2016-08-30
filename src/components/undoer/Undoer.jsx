import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import UndoerView from './UndoerView.jsx';
import createAction from '../../actions/ActionFactory.js';

export class UndoerContainer extends Component {

	static propTypes = {
		past: PropTypes.array.isRequired,
		future: PropTypes.array.isRequired,
		onUndo: PropTypes.func.isRequired,
		onRedo: PropTypes.func.isRequired
	};
	
	constructor(props) {
		super(props);
	}

	render() {
		const {onUndo, onRedo, past, future} = this.props;

		return (
			<UndoerView undo={onUndo} redo={onRedo} canUndo={past.length > 0} canRedo={future.length > 0}/>
		);
	}

}


const mapStateToProps = (state) => ({
	past: state.canvas.past,
	future: state.canvas.future
});

const mapDispatchToProps = (dispatch) => ({
	onUndo: () => {
		dispatch(createAction('UNDO'));
	},
	onRedo: () => {
		dispatch(createAction('REDO'));
	}
});

const Undoer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UndoerContainer);

export default Undoer;

