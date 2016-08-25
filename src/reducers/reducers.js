import {combineReducers} from 'redux';
import undoable from 'redux-undo';
import actionTypes from '../actions/actionTypes.js';
import initialState from './initialState.js';

const CHANGE_STROKE_PROPERTY = actionTypes.CHANGE_STROKE_PROPERTY.type;



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
