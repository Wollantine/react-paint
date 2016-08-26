import createAction from '../../../actions/ActionFactory.js';
import initialState from '../../../reducers/initialState.js';

import Tool from './tools/Tool.js';
import Brush from './tools/Brush.js';

class Editor {

	constructor(canvas, width, height) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.width = width;
		this.height = height;
		this.setTool(initialState.defaultOptions.defaultTool);
		this.updateCanvasPosition(canvas);
	}

	setTool(toolName) {
		let tool = Tool;
		switch (toolName) {
			case 'brush':
				tool = Brush;
		}

		this.tool = new tool(this.ctx, {color: '#0f0', size: 3});
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
		this.ctx.putImageData(image, 0, 0);
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

	onMouseDown(event) {
		this.updateCanvasPosition(this.canvas);
		return this.tool.onMouseDown(this.getCursorPosition(event), event);
	}

	onMouseMove(event) {
		return this.tool.onMouseMove(this.getCursorPosition(event), event.buttons, event);
	}

	onMouseUp(event) {
		return this.tool.onMouseUp(event);
	}

	onMouseOut(event) {
		return this.tool.onMouseOut(event);
	}

}

export default Editor;
