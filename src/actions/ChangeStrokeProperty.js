import {CHANGE_STROKE_PROPERTY} from './actionTypes.js';

export default ({property, value}) => {

	if (typeof property == 'undefined' || typeof value == 'undefined') {
		throw new SyntaxError('CHANGE_STROKE_PROPERTY must have a property and a value');
	}

	return {
		type: CHANGE_STROKE_PROPERTY,
		property,
		value
	}
};
