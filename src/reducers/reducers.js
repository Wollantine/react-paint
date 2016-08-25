import {combineReducers} from 'redux';
import undoable from 'redux-undo';
import actionTypes from '../actions/actionTypes.js';

const CHANGE_STROKE_PROPERTY = actionTypes.CHANGE_STROKE_PROPERTY.type;

const initialState = {
	canvasContext: null,
	// Current tool
	tool: {
		type: 'pencil',
	},
	// These are the only allowed stroke properties. If you need to
	// set more properties, you have to add the default value here.
	stroke: {
		color: '#000',
		size: 1
	},
	defaultOptions: {
		// Predefined colors palette
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
		// Allowed tools
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

export function defaultOptions(state = initialState.defaultOptions, action) {
	switch (action.type) {
		default:
			return state;
	}
}

const reducer = combineReducers({
	canvas: undoable(canvasContext),
	tool,
	stroke,
	defaultOptions
});

export default reducer;
