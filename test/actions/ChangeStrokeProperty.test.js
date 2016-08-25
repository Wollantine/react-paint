import createAction from '../../src/actions/ActionFactory.js';
import actionTypes from '../../src/actions/actionTypes.js';
import chai from 'chai';
chai.should();


describe('ActionFactory', () => {

	it('should return a valid action object', () => {
		let action = createAction('CHANGE_STROKE_PROPERTY', {property: 'a', value: 'b'});
		let expected = {type: actionTypes.CHANGE_STROKE_PROPERTY.type, property: 'a', value: 'b'};

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
		action.bind(action, type, {property: 'a'}).should.throw(SyntaxError);
		action.bind(action, type, {value: 'a'}).should.throw(SyntaxError);
	});

});