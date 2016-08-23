import {combineReducers} from 'redux';
import undoable from 'redux-undo';
import {CHANGE_STROKE_PROPERTY} from '../actions/actionTypes.js';

const initialState = {
	canvasContext: null,
	tool: {
		type: 'pencil',
	},
	stroke: {
		color: '#000',
		size: 1
	},
	defaultOptions: {
		defaultColors: [
			'#f00',
			'#f08',
			'#f0f',
			'#80f',
			'#008',
			'#00f',
			'#0f0',
			'#088',
			'#0ff',
			'#08f',
			'#5f0',
			'#8f0',
			'#ff0',
			'#fc0',
			'#f80',
			'#000',
			'#555',
			'#888',
			'#880',
			'#558'
		],
		defaultTools: [
			'pencil'
		]
	}
};

function canvasContext(state = initialState.canvas, action) {
	switch (action.type) {
		default:
			return state;
	}
}

function tool(state = initialState.tool, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export function stroke(state = initialState.stroke, action) {
	switch (action.type) {
		case CHANGE_STROKE_PROPERTY:
			if (state[action.property]) {
				return {...state, [action.property]: action.value};
			}
		default:
			return state;
	}
}

const reducer = combineReducers({
	canvas: undoable(canvasContext),
	tool,
	stroke
});

export default reducer;