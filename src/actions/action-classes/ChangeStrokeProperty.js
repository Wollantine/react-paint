import actionTypes from '../actions.json';
import Action from '../Action.js';
import initialState from '../../reducers/initialState.js';

const spec = actionTypes.CHANGE_STROKE_PROPERTY;

const allowedProperties = initialState.stroke;

class ChangeStrokeProperty extends Action {

	constructor(type, data) {
		super(type, data);

		this.validateType(type);
		this.validateData(data);
	}

	validateType(type) {
		if (type != spec.type) {
			throw new Error('Wrong type '+this.type+' for ChangeStrokeProperty action.');
		}
	}

	validateData(data) {
		let property = data.property;

		if (typeof allowedProperties[property] === 'undefined') {
			throw new Error('Stroke property '+property+' not allowed.');
		}
	}
}

export default ChangeStrokeProperty;
