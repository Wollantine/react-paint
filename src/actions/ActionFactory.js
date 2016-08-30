import actionTypes from './actions';
import Action from './Action';
import * as actionClasses from 'glob:action-classes/*.js';


export class ActionFactory {
	
	getActionSpecification(actionName, actionTypes) {
		let actionSpec = actionTypes[actionName];

		if (typeof actionSpec === 'undefined') {
			throw new Error('Action type '+actionName+' does not exist.')
		}
		if (typeof actionSpec.type == 'undefined') {
			throw new Error('Mandatory field "type" not specified for action '+actionName+' in actions.json.');
		}
		if (typeof actionSpec.args == 'undefined') {
			throw new Error('Mandatory field "args" not specified for action '+actionName+' in actions.json.');
		}
		if (!Array.isArray(actionSpec.args)) {
			throw new Error('Field "args" should be an array for action '+actionName+' in actions.json');
		}

		return actionSpec;
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

	getActionClass(className, actionClasses) {
		let actionClass = actionClasses[className];

		if (typeof actionClass == 'undefined') {
			actionClass = Action;
		}

		return actionClass;
	}

	getActionObject(actionName, actionData) {
		const spec = this.getActionSpecification(actionName, actionTypes);

		const ActionClass = this.getActionClass(spec.class, actionClasses);

		return new ActionClass(spec.type, this.getValidatedData(actionName, spec, actionData));
	}

	/**
	 * Returns a dispatchable object/function for this action, if data fits the specs in actions.json.
	 *
	 * @param actionName {string} The name of the action in actions.json.
	 * @param actionData {object} The named parameters that action takes.
	 * @returns {*|mixed} If no class is defined in actions.json for this actionName, a raw action object with
	 *  the actionData as params and an additional param type. If otherwise a class is defined, whatever that class's
	 *  getDispatchable() returns.
	 */
	createAction(actionName, actionData) {
		let action = this.getActionObject(actionName, actionData);
		return action.getDispatchable();
	}

	/**
	 * Always returns a synchronously dispatchable object, never a function. Warning: Intended use for testing,
	 *  do not use in production.
	 *
	 * @param actionName {string} The name of the action in actions.json.
	 * @param actionData {object} The named parameters that action takes.
	 * @return A raw action object with the actionData as params and an additional param type.
	 */
	createRawAction(actionName, actionData) {
		let action = this.getActionObject(actionName, actionData);
		return action.rawAction();
	}

}

const actionFactory = new ActionFactory();

export default actionFactory.createAction.bind(actionFactory);
