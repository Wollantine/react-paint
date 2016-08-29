import { connect, getDiff } from 'redux-haiku';
import createAction from '../../../actions/ActionFactory.js';

/* abstract */ class Tool {

	constructor(context, stroke, width, height, store) {
		this.ctx = context;
		this.stroke = stroke;
		this.width = width;
		this.height = height;
		this.connectToStore(store);
	}

	connectToStore(store) {
		this.store = store;
		connect(this.mapStateToProps, this.mapDispatchToProps)(this.listener.bind(this))(store);
	}

	listener({stroke, drawStroke}) {
		this.drawStroke = drawStroke;
		this.setStroke(stroke);
	}

	mapStateToProps(state) {
		return {
			stroke: state.stroke
		};
	}

	mapDispatchToProps(dispatch) {
		return {
			drawStroke: (canvas) => dispatch(createAction('DRAW_STROKE', {canvas}))
		}
	}

	dispatchNewState() {
		this.drawStroke(this.ctx.getImageData(0, 0, this.width, this.height));
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
