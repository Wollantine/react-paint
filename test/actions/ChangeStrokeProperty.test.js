import Action from '../../src/actions/action-classes/ChangeStrokeProperty.js';
import actionTypes from '../../src/actions/actions.json';


describe('ChangeStrokeProperty', () => {

	let spec = actionTypes.CHANGE_STROKE_PROPERTY;

	it('should return a new ChangeStrokeProperty action', () => {
		let type = spec.type,
			data = {property: 'color', value: '#aaa'};

		let expected = {type, ...data};

		let action = new Action(type, data);

		action.getDispatchable().should.deep.equal(expected);
	})

	it('should throw Error upon wrong type', () => {
		let type = 'TYPE',
			data = {property: 'color', value: '#aaa'};

		let action = () => (new Action(type, data));

		action.should.throw(Error);
	})

	it('should throw Error upon wrong property', () => {
		let type = spec.type,
			// Correct property name is 'size'
			data = {property: 'width', value: 5};

		let action = () => (new Action(type, data));

		action.should.throw(Error);
	})

})
