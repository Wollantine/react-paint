import {stroke as reducer} from '../../src/reducers/reducers.js';
import createAction from '../../src/actions/ActionFactory.js';

describe('Stroke reducer', () => {

	describe('upon CHANGE_STROKE_PROPERTY', () => {

		it('should change an existing property', () => {
			let action = createAction('CHANGE_STROKE_PROPERTY', {property: 'color', value: '#123'});
			let actual = reducer({color: '#000'}, action);
			let expected = {color: '#123'};

			actual.should.deep.equal(expected);
		});

	});

});