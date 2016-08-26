import React, {PropTypes} from 'react';
import './canvas.css';

const CanvasView = (props) => {
	const {width,
	height,
	onMount,
	onMouseDown,
	onMouseUp,
	onMouseMove,
	onMouseOut} = props;

	return (
		// React's ref attribute is executed when element gets rendered
		<canvas ref={onMount}
			width={width} height={height}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			onMouseMove={onMouseMove}
			onMouseOut={onMouseOut}
		/>
	);
};

CanvasView.propTypes = {
    width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	onMount: PropTypes.func.isRequired,
	onMouseDown: PropTypes.func.isRequired,
	onMouseUp: PropTypes.func.isRequired,
	onMouseMove: PropTypes.func.isRequired,
	onMouseOut: PropTypes.func.isRequired
};

export default CanvasView;
