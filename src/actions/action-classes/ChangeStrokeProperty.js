import actionTypes from '../actionTypes.js';
import Action from './Action.js';

const spec = actionTypes.CHANGE_STROKE_PROPERTY;

const allowedProperties = [
	'color',
	'size'
];

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

		if (!~allowedProperties.indexOf(property)) {
			throw new Error('Stroke property '+property+' not allowed.');
		}
	}
}

export default ChangeStrokeProperty;
