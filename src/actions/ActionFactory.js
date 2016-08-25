import actionTypes from './actionTypes.js';

export class ActionFactory {
	
	getActionSpecification(actionName) {
		let actionSpec = actionTypes[actionName];

		if (typeof actionSpec === 'undefined') {
			throw new Error('Action type '+actionName+' does not exist.')
		}
		return actionSpec;
	}

	getActionType(actionName, actionSpec) {
		let type = actionSpec.type;
		if (typeof type === 'undefined') {
			throw new SyntaxError('Missing field "type" for the action '+actionName+' in actionTypes.');
		}
		return type;
	}

	getValidatedData(actionName, actionSpec, data) {
		return actionSpec.args.reduce((previous, item) => {
			let arg = data[item];
			if (typeof arg === 'undefined') {
				throw new SyntaxError('Field '+item+' missing in action '+actionName+'.');
			}
			return {...previous, [item]: arg};
		}, {});
	}

	createAction(actionName, data) {
		let spec = this.getActionSpecification(actionName);

		return {
			type: this.getActionType(actionName, spec),
			...this.getValidatedData(actionName, spec, data)
		}
	}

}

const actionFactory = new ActionFactory();

export default actionFactory.createAction.bind(actionFactory);
