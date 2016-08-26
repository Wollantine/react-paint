import Tool from './Tool.js';

class Brush extends Tool {

	constructor(context, stroke) {
		super(context, stroke);

		this.outside = false;
		this.shouldPaint = false;
		this.startPoint = null;
	}

	paintMove({x, y}) {
		if (this.shouldPaint) {
			this.paintPath([this.startPoint, {x, y}]);
		}
	}

	onMouseDown({x, y}, event) {
		this.shouldPaint = true;
		this.startPoint = {x, y};
	}

	onMouseMove({x, y}, clickedButtons, event) {
		if (this.outside) {
			// MouseEvent.buttons == 1 iff mouse left button is clicked during the movement
			if (clickedButtons == 1) {
				this.startPoint = {x, y};
			}
			else {
				this.shouldPaint = false;
			}
			this.outside = false;
		}
		this.paintMove({x, y});
		this.startPoint = {x, y};
	}

	onMouseUp(event) {
		this.shouldPaint = false;
	}

	onMouseOut({x, y}, event) {
		this.paintMove({x, y});
		this.outside = true;
	}

}

export default Brush;
