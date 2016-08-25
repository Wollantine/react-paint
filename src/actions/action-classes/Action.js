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
