import {stroke as reducer} from '../../src/reducers/reducers.js';
import changeStrokeProperty from '../../src/actions/ChangeStrokeProperty.js';
import chai from 'chai';
chai.should();

describe('Stroke reducer', () => {

	describe('upon CHANGE_STROKE_PROPERTY', () => {

		it('should change an existing property', () => {
			let action = changeStrokeProperty({property: 'a', value: 'b'});
			let actual = reducer({a: 'a'}, action);
			let expected = {a: 'b'};

			actual.should.deep.equal(expected);
		});

		it('should do nothing for a non existing property', () => {
			let action = changeStrokeProperty({property: 'x', value: 'b'});
			let initial = {a: 'a'};
			let actual = reducer(initial, action);

			actual.should.deep.equal(initial);
		});

	});

});