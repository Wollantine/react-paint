import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import UndoerView from './UndoerView.jsx';
import createAction from '../../actions/ActionFactory.js';

export class UndoerContainer extends Component {

	static propTypes = {
		onUndo: PropTypes.func.isRequired,
		onRedo: PropTypes.func.isRequired
	};
	
	constructor(props) {
		super(props);
	}

	render() {
		const {onUndo, onRedo} = this.props;

		return (
			<UndoerView undo={onUndo} redo={onRedo}/>
		);
	}

}


const mapDispatchToProps = (dispatch) => ({
	onUndo: () => {
		dispatch(createAction('UNDO'));
	},
	onRedo: () => {
		dispatch(createAction('REDO'));
	}
});

const Undoer = connect(
	null,
	mapDispatchToProps
)(UndoerContainer);

export default Undoer;

