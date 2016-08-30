import createAction from '../../src/actions/ActionFactory.js';
import actionTypes from '../../src/actions/actions.json';


describe('ActionFactory', () => {

	it('should return a valid action object', () => {
		let action = createAction('CHANGE_STROKE_PROPERTY', {property: 'color', value: '#000'});
		let expected = {type: actionTypes.CHANGE_STROKE_PROPERTY.type, property: 'color', value: '#000'};

		action.should.deep.equal(expected);
	});

	it('should throw Error upon non existing type', () => {
		const action = createAction;

		action.bind(action, '', {}).should.throw(Error);
	});

	it('should throw SyntaxError upon missing property', () => {
		const action = createAction;
		const type = 'CHANGE_STROKE_PROPERTY';
		
		action.bind(action, type, 'hi!').should.throw(SyntaxError);
		action.bind(action, type, {property: 'color'}).should.throw(SyntaxError);
		action.bind(action, type, {value: '#000'}).should.throw(SyntaxError);
	});

});
