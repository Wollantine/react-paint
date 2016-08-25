import sinon from 'sinon';
import {render, shallow, mount} from 'enzyme';
import SizePickerView from '../../src/components/size-picker/SizePickerView.jsx';

describe('<SizePickerView/>', () => {

	let view = null,
		wrapper = null,
		brushSize = 4,
		changeBrushSize = sinon.spy();

	before(() => {
		view = SizePickerView({brushSize, changeBrushSize});
		wrapper = render(view);
	})

	it('should render an input', () => {
		wrapper.should.have.exactly(1).descendants('input');
	})

	it('should have type number in input', () => {
		wrapper.find('input').should.have.attr('type', 'number');
	})

	it('should have the brushSize as value', () => {
		wrapper.find('input').should.have.value(''+brushSize);
	})

	it('should call changeBrushSize on change', () => {
		const input = mount(view).find('input');

		input.simulate('change', {target: {value: '0'}});
		changeBrushSize.should.have.been.called;
	})

})