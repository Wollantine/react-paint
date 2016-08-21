import React from 'react';
import {Col} from 'react-bootstrap';
import Canvas from '../canvas/Canvas.jsx';
import Toolbox from '../toolbox/Toolbox.jsx';

export default (props) => {
	const {width, height} = props;

	return (
		<Col mdOffset={2} md={8}>
			<Col md={8}>
				<Canvas width={width} height={height}/>
			</Col>
			<Col mdOffset={1} md={3}>
				<Toolbox/>
			</Col>
		</Col>
	);
};
