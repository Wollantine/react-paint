import actionTypes from './actionTypes.js';

/**
 *	# Important Note
 *
 * This should import all the classes in ./action-classes folder.
 *
 * This is because browserify doesn't support dynamic require()s
 * (requiring modules in runtime that could not get bundled 
 * previously because static code analysis didn't see them required).
 */
import './action-classes/Action.js';
import './action-classes/ChangeStrokeProperty.js';



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

	getActionClassName(actionSpec) {
		let className = actionSpec.class;
		if (typeof className === 'undefined') {
			// base class
			className = 'Action';
		}
		return className;
	}

	// Requires the class from this folder
	getActionClass(actionSpec) {
		return require('./action-classes/'+this.getActionClassName(actionSpec)+'.js').default;
	}

	createAction(actionName, data) {
		let spec = this.getActionSpecification(actionName);

		let type = this.getActionType(actionName, spec);
		data = this.getValidatedData(actionName, spec, data);

		let Action = this.getActionClass(spec);
		let action = new Action(type, data);

		return action.getDispatchable();
	}

}

const actionFactory = new ActionFactory();

export default actionFactory.createAction.bind(actionFactory);
