const initialState = {
	canvasContext: null,
	// Current tool
	tool: {
		type: 'pencil',
	},
	// These are the only allowed stroke properties. If you need to
	// set more properties, you have to add the default value here.
	stroke: {
		color: '#000',
		size: 1
	},
	defaultOptions: {
		// Predefined colors palette
		defaultColors: [
			'#f00',
			'#f08',
			'#f0f',
			'#80f',
			'#008',
			'#00f',
			'#0f0',
			'#088',
			'#0ff',
			'#08f',
			'#5f0',
			'#8f0',
			'#ff0',
			'#fc0',
			'#f80',
			'#000',
			'#555',
			'#888',
			'#880',
			'#558'
		],
		// Allowed tools
		defaultTools: [
			'pencil'
		]
	}
};

export default initialState;
