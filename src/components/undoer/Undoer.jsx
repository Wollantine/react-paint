import React from 'react';
import {ButtonGroup, Button, Glyphicon} from 'react-bootstrap';

export default (props) => {
	return (
		<ButtonGroup>
			<Button><Glyphicon bsClass="fa" glyph="undo"/></Button>
			<Button><Glyphicon bsClass="fa" glyph="repeat"/></Button>
		</ButtonGroup>
	);
}
