import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export class CanvasContainer extends Component {

	propTypes:{
		width: PropTypes.integer.isRequired,
		height: PropTypes.integer.isRequired
	}

	defaultProps:{}
	
	constructor(props) {
		super(props);

		this.ctx = null;
		this.top = null;
		this.left = null;
	}


	initializeCanvasPosition(canvas) {
		const {top, left} = canvas.getBoundingClientRect();
		this.top = top;
		this.left = left;
		this.color = '#ff0000';
		this.size = 1;
	}

	initializeContext(canvas) {
		this.ctx = canvas.getContext('2d');
	}

	retrieveCanvasDetails(canvas) {
		this.initializeContext(canvas);
		this.initializeCanvasPosition(canvas);
	}

	clearCanvas() {
		if (this.ctx) {
			this.ctx.clearRect(0, 0, this.width, this.height);
		}
	}

	getCursorPosition(e) {
		return {
			x: e.clientX - this.left,
			y: e.clientY - this.top
		}
	}

	onMouseDown(e) {
		let {x,y} = this.getCursorPosition(e);
		console.log({x,y});

		let stroke = {
			x,
			y,
			color: this.color,
			size: this.size
		}
	}

	onMouseUp(e) {}

	onMouseMove(e) {}

	onMouseOut(e) {}

	render() {
		const {width, height} = this.props;

		this.clearCanvas();

		return (
			<canvas ref={this.retrieveCanvasDetails.bind(this)}
				width={width} height={height}
				onMouseDown={this.onMouseDown.bind(this)}
				onMouseUp={this.onMouseUp.bind(this)}
				onMouseMove={this.onMouseMove.bind(this)}
				onMouseOut={this.onMouseOut.bind(this)}
			/>
		);
	}
}

const mapStateToProps = (state) => ({

});

const Canvas = connect(mapStateToProps)(CanvasContainer);

export default Canvas;
