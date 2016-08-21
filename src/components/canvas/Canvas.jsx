import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './canvas.css';

export class CanvasContainer extends Component {

	propTypes:{
		width: PropTypes.integer.isRequired,
		height: PropTypes.integer.isRequired
	}
	
	constructor(props) {
		super(props);

		this.ctx = null;
		this.top = null;
		this.left = null;
		this.stroke = null;
		this.startPoint = [];
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
		let {x, y} = this.getCursorPosition(e);

		this.startPainting({
			color: this.color,
			size: this.size
		});
		this.startPoint = {x, y};
	}

	onMouseUp(e) {
		this.stopPainting();
	}

	paintMoveEvent(e) {
		if (this.shouldPaint()) {
			let {x, y} = this.getCursorPosition(e);
			this.drawLine(this.startPoint, {x, y}, this.stroke);
			this.startPoint = {x, y};
		}
	}

	drawLine(a, b, stroke) {
		let ctx = this.ctx;
		ctx.lineJoin = 'round';
		ctx.linePath = 'round';
		ctx.lineWidth = stroke.size;
		ctx.strokeStyle = stroke.color;
		ctx.beginPath();
		ctx.moveTo(a.x, a.y);
		ctx.lineTo(b.x, b.y);
		ctx.closePath();
		ctx.stroke();
	}

	shouldPaint() {
		return this.stroke !== null;
	}

	startPainting({color, size}) {
		this.stroke = {color, size};
	}

	stopPainting() {
		this.stroke = null;
	}

	onMouseMove(e) {
		if (this.outside) {
			// MouseEvent.buttons == 1 iff mouse left button is clicked during the movement
			if (e.buttons == 1) {
				this.startPoint = this.getCursorPosition(e);
			}
			else {
				this.stopPainting();
			}
			this.outside = false;
		}
		this.paintMoveEvent(e);
	}

	onMouseOut(e) {
		this.outside = true;
		this.paintMoveEvent(e);
	}

	render() {
		const {width, height} = this.props;

		this.clearCanvas();

		return (
			// React's ref attribute is executed when element gets rendered
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
