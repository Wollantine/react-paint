import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducers/reducers.js';
import Canvas from '../canvas/Canvas.jsx';

const store = createStore(reducer);

export default () => (
	<Provider store={store}>
		<Canvas width={800} height={600}/>
	</Provider>
);