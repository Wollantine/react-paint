import Tool from './Tool.js';

class Brush extends Tool {

	constructor(...params) {
		super(...params);

		/**
		 * True iff the cursor is currently outside the canvas or just reentered.
		 * @type {boolean}
         */
		this.outside = false;

		/**
		 * True iff it should paint when moving or finishing the stroke (mouseUp, mouseOut).
		 * @type {boolean}
         */
		this.shouldPaint = false;

		/**
		 * The point from which next line in the path must begin.
		 * @type {object}
         */
		this.startPoint = null;

		/**
		 * True iff the cursor has been outside the canvas during this stroke. If so, next dispatches should
		 * replace the last one, until next stroke begins.
		 * @type {boolean}
         */
		this.hasBeenOutside = false;
	}

	saveImage() {
		if (this.hasBeenOutside) {
			this.replaceDispatchedState();
		}
		else {
			this.dispatchNewState();
		}
	}

	paintMove({x, y}) {
		if (this.shouldPaint) {
			let {x: xs, y: ys} = this.startPoint;
			// If we hadn't moved, draw a line of 1px
			if (xs == x && ys == y) {
				x++;
				y++;
			}
			this.paintPath([this.startPoint, {x, y}]);
		}
	}

	onMouseDown({x, y}, event) {
		this.shouldPaint = true;
		this.startPoint = {x, y};
		this.hasBeenOutside = false;
	}

	onMouseReenter({x, y}, clickedButtons, event) {
		// MouseEvent.buttons == 1 iff mouse left button is clicked during the movement
		if (clickedButtons == 1) {
			this.startPoint = {x, y};
			this.hasBeenOutside = true;
		}
		else {
			// The stroke has been finished
			this.shouldPaint = false;
		}
	}

	onMouseMove({x, y}, clickedButtons, event) {
		if (this.outside) {
			this.onMouseReenter({x, y}, clickedButtons, event);
			this.outside = false;
		}
		this.paintMove({x, y});
		this.startPoint = {x, y};
	}

	onMouseUp({x, y}, event) {
		this.paintMove({x, y});
		this.shouldPaint = false;
		this.saveImage();
		this.hasBeenOutside = false;
	}

	onMouseOut({x, y}, event) {
		this.paintMove({x, y});
		this.outside = true;
		if (this.shouldPaint) {
			this.saveImage();
		}
	}

}

export default Brush;
