import { connect, getDiff } from 'redux-haiku';
import Editor from './Editor.js';

class ConnectedEditor {
	
	constructor(editor) {
		this.editor = editor;
		this.drawStroke = null;
	}
	
	listener({canvas, stroke, drawStroke}) {
		console.log("hola");
		this.drawStroke = drawStroke;
		
		
	}

	drawStroke(canvas) {
		if (this.drawStroke !== null) {
			this.drawStroke(canvas);
		}
	}
}

export default ConnectedEditor.connect.bind()

const mapStateToProps = (state) => ({
	canvas: state.canvas,
	stroke: state.stroke
});

const mapDispatchToProps = (dispatch) => ({
	drawStroke: (canvas) => {
		dispatch(createAction('DRAW_STROKE', {canvas}))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedEditor.listener.bind(ConnectedEditor));
