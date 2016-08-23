import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import Icon from '../icon/Icon.js';

export default (props) => {
	return (
		<ButtonGroup>
			<Button><Icon icon="undo"/></Button>
			<Button><Icon icon="repeat"/></Button>
		</ButtonGroup>
	);
}
