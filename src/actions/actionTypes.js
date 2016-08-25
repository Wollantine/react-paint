const actionTypes = {
	CHANGE_STROKE_PROPERTY: {
		type: 'react-paint/stroke/CHANGE_STROKE_PROPERTY',
		class: 'ChangeStrokeProperty',
		args: [
			'property',
			'value'
		]
	},
	UNDO: {
		type: 'react-paint/canvas/UNDO',
		args: []
	},
	REDO: {
		type: 'react-paint/canvas/REDO',
		args: []
	},
	DRAW_STROKE: {
		type: 'react-paint/canvas/DRAW_STROKE',
		args: []
	}
};

export default actionTypes;
