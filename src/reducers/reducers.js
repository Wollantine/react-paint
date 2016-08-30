import {combineReducers} from 'redux';
import type from './types.js';
import initialState from './initialState.js';



export function canvas(state = initialState.canvas, action) {
	switch (action.type) {
		case type('DRAW_STROKE'):
			// Update history
			return {
				past: [...state.past, state.present],
				present: {image: action.image},
				future: []
			};
		case type('EXTEND_STROKE'):
			// Replace actual present without updating history
			return {
				...state,
				present: {image: action.image}
			};
		case type('UNDO'):
			let previous = state.past[state.past.length - 1];
			let newPast = state.past.slice(0, state.past.length - 1);
			return {
				past: newPast,
				present: previous,
				future: [state.present, ...state.future]
			};
		case type('REDO'):
			let next = state.future[0];
			let newFuture = state.future.slice(1);
			return {
				past: [ ...state.past, state.present ],
				present: next,
				future: newFuture
			};
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
		case type('CHANGE_STROKE_PROPERTY'):
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
	canvas,
	tool,
	stroke,
	defaultOptions
});

export default reducer;
