import changeStrokeProperty from '../../src/actions/ChangeStrokeProperty.js';
import {CHANGE_STROKE_PROPERTY} from '../../src/actions/actionTypes.js';
import chai from 'chai';
chai.should();


describe('ChangeStrokeProperty action', () => {

	it('should return a valid action object', () => {
		let action = changeStrokeProperty({property: 'a', value: 'b'});
		let expected = {type: CHANGE_STROKE_PROPERTY, property: 'a', value: 'b'};

		action.should.deep.equal(expected);
	});


	it('should throw upon missing property', () => {
		const action = changeStrokeProperty;
		
		action.bind(action, 'hi!').should.throw(SyntaxError);
		action.bind(action, {property: 'a'}).should.throw(SyntaxError);
		action.bind(action, {value: 'a'}).should.throw(SyntaxError);
	});

});