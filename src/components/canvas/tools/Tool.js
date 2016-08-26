import { connect, getDiff } from 'redux-haiku';

/* abstract */ class Tool {

	constructor(context, stroke) {
		this.ctx = context;
		this.stroke = stroke;
	}

	dispatchNewState() {
		
	}

	setStroke(stroke) {
		this.ctx.lineJoin = 'round';
		this.ctx.linePath = 'round';
		this.ctx.lineWidth = stroke.size;
		this.ctx.strokeStyle = stroke.color;
	}

	paintPath(points) {
		this.setStroke(this.stroke);
		if (points.length > 0) {
			this.ctx.beginPath();
			this.ctx.moveTo(points[0].x, points[0].y);
			for (var i = 0; i < points.length; i++) {
				this.ctx.lineTo(points[i].x, points[i].y);
			}
			this.ctx.closePath();
			this.ctx.stroke();
		}
	}

	/**
	 * Abstract method. Override this.
	 */
	onMouseDown({x, y}, event) {
		throw Error('Please implement onMouseDown method.');
	}

	/**
	 * Abstract method. Override this.
	 */
	onMouseMove({x, y}, clickedButtons, event) {
		throw Error('Please implement onMouseMove method.');
	}

	/**
	 * Abstract method. Override this.
	 */
	onMouseUp(event) {
		throw Error('Please implement onMouseUp method.');
	}

	/**
	 * Abstract method. Override this.
	 */
	onMouseOut(event) {
		throw Error('Please implement onMouseOut method.');
	}

}

export default Tool;
