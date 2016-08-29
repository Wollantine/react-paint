import React, {Component, PropTypes} from 'react';
import CanvasView from './CanvasView.jsx';
import Editor from './ConnectedEditor.js';

export class Canvas extends Component {

	static propTypes = {
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		store: PropTypes.any.isRequired
	};
	
	constructor(props) {
		super(props);
		this.editor = null;
	}


	initEditor(canvas) {
		this.editor = new Editor(canvas, this.props.width, this.props.height, this.props.store);
	}

	onMouseDown(e) {
		this.editor.onMouseDown(e);
	}

	onMouseUp(e) {
		this.editor.onMouseUp(e);
	}

	onMouseMove(e) {
		this.editor.onMouseMove(e);
	}

	onMouseOut(e) {
		this.editor.onMouseOut(e);
	}

	render() {
		const {width, height} = this.props;

		return (
			// React's ref attribute is executed when element gets rendered
			<CanvasView
				width={width} height={height}
				onMount={this.initEditor.bind(this)}
				onMouseDown={this.onMouseDown.bind(this)}
				onMouseUp={this.onMouseUp.bind(this)}
				onMouseMove={this.onMouseMove.bind(this)}
				onMouseOut={this.onMouseOut.bind(this)}
			/>
		);
	}
}

export default Canvas;
