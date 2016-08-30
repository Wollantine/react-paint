import React, {PropTypes} from 'react';
import {Col, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';

const UndoerView = (props) => {
	const {
		undo,
		redo,
		canUndo,
		canRedo} = props;

	return (
		<Col md={4}>
			<ButtonGroup>
				<Button onClick={undo} disabled={!canUndo}><Glyphicon bsClass="fa" glyph="undo"/></Button>
				<Button onClick={redo} disabled={!canRedo}><Glyphicon bsClass="fa" glyph="repeat"/></Button>
			</ButtonGroup>
		</Col>
	);
};

UndoerView.propTypes = {
	past: PropTypes.array.isRequired,
	future: PropTypes.array.isRequired,
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired
};

export default UndoerView;
