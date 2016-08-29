

class Editor {

	constructor(canvas, width, height) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.width = width;
		this.height = height;
		this.updateCanvasPosition(canvas);
	}

	updateCanvasPosition(canvas) {
		const {top, left} = this.canvas.getBoundingClientRect();
		this.top = top;
		this.left = left;
	}

	clearCanvas() {
		if (this.ctx) {
			this.ctx.clearRect(0, 0, this.width, this.height);
		}
	}

	drawStateInWholeCanvas(image) {
		if (image) {
			this.ctx.putImageData(image, 0, 0);
		}
	}

	drawState(state) {
		this.clearCanvas();
		this.drawStateInWholeCanvas(state);
	}

	getCursorPosition(e) {
		return {
			x: e.clientX - this.left,
			y: e.clientY - this.top
		}
	}

	getState() {
		return this.ctx.getImageData(0, 0, this.width, this.height);
	}

}

export default Editor;
