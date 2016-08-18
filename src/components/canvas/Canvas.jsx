import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export class CanvasContainer extends Component {
	constructor(props) {
		super(props);
	}

	propTypes:{
		onLogIn: PropTypes.func.isRequired
	}

	defaultProps:{}

	render() {
		return (
			<div>
				<p>Hello world</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({

});

const Canvas = connect(mapStateToProps)(CanvasContainer);

export default Canvas;
