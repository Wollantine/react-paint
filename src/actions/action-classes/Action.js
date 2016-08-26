/**
 *	Action
 *
 * Generic Action creator. Usage:
 *	let a = new Action(type, data);
 *	dispatch(a.getDispatchable());
 *
 * Implements a template pattern. It should only be subclassed if the action type needs 
 * additional validations or produces side effects (API calls), in which case a Thunk
 * should be returned by buildAction(). Check redux-thunk package for more info.
 */
class Action {

	constructor(type, data) {
		this.type = type;
		this.data = data;
	}

	/**
	 * Template method. Override this.
	 */
	buildAction() {
		return {
			type: this.type,
			...this.data
		};
	}

	getDispatchable() {
		return this.buildAction();
	}
}

export default Action;
