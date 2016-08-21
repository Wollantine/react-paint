import {combineReducers} from 'redux';
import undoable from 'redux-undo';

const initialState = {
	canvasContext: null,
	tool: {
		type: 'brush',
		properties: {
			color: '#000',
			size: 1
		}
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

const reducer = combineReducers({
	canvas: undoable(canvasContext),
	tool
});

export default reducer;
