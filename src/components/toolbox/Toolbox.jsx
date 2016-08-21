import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
// import './toolbox.css';

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
			<div></div>
		);
	}

}

const Toolbox = ToolboxContainer;

export default Toolbox;
