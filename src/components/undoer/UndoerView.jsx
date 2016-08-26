import React, {PropTypes} from 'react';
import {Col, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';

const UndoerView = (props) => {
	const {undo, redo} = props;

	return (
		<Col md={4} mdOffset={2}>
			<ButtonGroup>
				<Button onClick={undo}><Glyphicon bsClass="fa" glyph="undo"/></Button>
				<Button onClick={redo}><Glyphicon bsClass="fa" glyph="repeat"/></Button>
			</ButtonGroup>
		</Col>
	);
};

UndoerView.propTypes = {
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired
};

export default UndoerView;
