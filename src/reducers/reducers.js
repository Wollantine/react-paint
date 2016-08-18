import {combineReducers} from 'redux';
import undoable from 'redux-undo';

const initialState = {
	canvas: null,
	tool: null
};

function canvas(state = initialState.canvas, action) {
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
	canvas: undoable(canvas),
	tool
});

export default reducer;
