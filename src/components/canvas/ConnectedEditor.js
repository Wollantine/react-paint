import { connect, getDiff } from 'redux-haiku';
import Editor from './Editor.js';

const ConnectedEditor = ({canvas, stroke, drawStroke}) => {

};


const mapStateToProps = (state) => ({
	canvas: state.canvas,
	stroke: state.stroke
});

const mapDispatchToProps = (dispatch) => ({
	drawStroke: (canvas) => {
		dispatch(createAction('DRAW_STROKE', {canvas}))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedEditor);