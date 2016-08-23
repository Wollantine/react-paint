import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
// import './toolbox.css';
import Undoer from '../undoer/Undoer.jsx';

export class ToolboxContainer extends Component {

	propTypes:{
		width: PropTypes.integer.isRequired,
		height: PropTypes.integer.isRequired
	}
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Undoer/>
		);
	}

}

const Toolbox = ToolboxContainer;

export default Toolbox;
