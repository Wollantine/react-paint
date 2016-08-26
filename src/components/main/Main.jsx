import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducers/reducers.js';
import createLogger from 'redux-logger';
import MainView from './MainView.jsx';

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(
	logger
));

// We pass the store down the component hierarchy because non-component subscribers (Editor) need it
export default () => (
	<Provider store={store}>
		<MainView width={400} height={300} store={store}/>
	</Provider>
);
