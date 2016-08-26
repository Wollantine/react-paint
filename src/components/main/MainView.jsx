import React from 'react';
import {Col} from 'react-bootstrap';
import Canvas from '../canvas/Canvas.jsx';
import Toolbox from '../toolbox/Toolbox.jsx';
import './main.css';

export default (props) => {
	const {width, height, store} = props;

	return (
		<Col className="main" mdOffset={2} md={8}>
			<Col md={7}>
				<Canvas width={width} height={height} store={store}/>
			</Col>
			<Col md={5}>
				<Toolbox/>
			</Col>
		</Col>
	);
};
