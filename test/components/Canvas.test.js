import React from 'react';
import {render} from 'enzyme';
import CanvasView from '../../src/components/canvas/CanvasView.jsx';

describe('<CanvasView/>', () => {

	let view = null,
		wrapper = null,
		width = 300,
		height = 382;


	it('should render a canvas', () => {
		view = <CanvasView width={width} height={height} />
		wrapper = render(view);
		wrapper.should.have.exactly(1).descendants('canvas');
	});

	it('should render a canvas of the appropriate size', () => {
		view = <CanvasView width={width} height={height} />
		wrapper = render(view);
		wrapper.find('canvas').should.have.attr('width', ''+width);
		wrapper.find('canvas').should.have.attr('height', ''+height);
	});

});
