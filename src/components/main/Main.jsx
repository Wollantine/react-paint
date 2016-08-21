import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducers/reducers.js';
import MainView from './MainView.jsx';
import './main.css';

const store = createStore(reducer);

export default () => (
	<Provider store={store}>
		<MainView width={400} height={300}/>
	</Provider>
);