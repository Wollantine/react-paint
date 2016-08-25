import Action from '../../src/actions/action-classes/Action.js';

describe('Action', () => {
	it('should create an action', () => {
		let type = 'TYPE',
			data = {x: 'y', z: {a: 'a', b:'b'}};

		let expected = {type, ...data};

		let action = new Action(type, data);

		action.getDispatchable().should.deep.equal(expected);
	})
})