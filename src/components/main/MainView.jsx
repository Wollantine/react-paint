import React from 'react';
import {Col} from 'react-bootstrap';
import Canvas from '../canvas/Canvas.jsx';
import Toolbox from '../toolbox/Toolbox.jsx';
import './main.css';

export default (props) => {
	const {width, height, store} = props;

	return (
		<Col className="main" lgOffset={2} lg={8} md={12} sm={12} xs={12}>
			<Col lg={7} md={7} sm={7} xs={12}>
				<Canvas width={width} height={height} store={store}/>
			</Col>
			<Col md={5} lg={5} sm={4} xs={12}>
				<Toolbox/>
			</Col>
		</Col>
	);
};
