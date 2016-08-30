import sinon from 'sinon';
import {render, mount, shallow} from 'enzyme';
import ColorPickerView, {splitInChunks, 
	renderColorButton, 
	renderRowOfButtons} from '../../src/components/color-picker/ColorPickerView.jsx';

describe('<ColorPickerView/>', () => {

	describe('splitInChunks', () => {

		let array = [1,2,3,4];

		it('should split an array in chunks of the specified size', () => {
			let expected = [[1,2],[3,4]];
			splitInChunks(array, 2).should.deep.equal(expected);
		})

		it('should return a last chunk with the rest', () => {
			let expected = [[1,2,3],[4]];
			splitInChunks(array, 3).should.deep.equal(expected);
		})

		it('should return the same array when chunkSize is wrong', () => {
			splitInChunks(array, 0).should.deep.equal(array);
			splitInChunks(array, null).should.deep.equal(array);
			splitInChunks(array, 'string').should.deep.equal(array);
			splitInChunks(array).should.deep.equal(array);
		})

		it('should throw syntax error when type is not array', () => {
			splitInChunks.bind(0).should.throw(SyntaxError);
			splitInChunks.bind(null).should.throw(SyntaxError);
			splitInChunks.bind({}).should.throw(SyntaxError);
			splitInChunks.bind('string').should.throw(SyntaxError);
			splitInChunks.should.throw(SyntaxError);
		})
	})


	describe('renderColorButton', () => {

		let button = null,
			wrapper = null,
			color = '#123456',
			key = 'key',
			onClick = sinon.spy();

		before(() => {
			button = renderColorButton(color, key, onClick);
			wrapper = render(button);
		})

		it('should render a button', () => {
			wrapper.should.match('button');
		})

		it('should have the color as value', () => {
			wrapper.should.have.value(color);
		})

		it('should call onClick upon click', () => {
			shallow(button).simulate('click');
			onClick.should.have.been.called;
		})

		it('should call onClick with the color as value', () => {
			shallow(button).simulate('click');
			onClick.should.have.been.calledWith(color);
		})

	})

	describe('renderRowOfButtons', () => {

		let row = null,
			wrapper = null,
			colors = ['#111', '#222', '#333'],
			key = 'key',
			onClick = sinon.spy();

		before(() => {
			row = renderRowOfButtons(colors, key, onClick);
			wrapper = render(row);
		})

		it('should render all buttons', () => {
			wrapper.should.have.exactly(colors.length).descendants('button');
		})

	})

	describe('Component', () => {

		let view = null,
			wrapper = null,
			defaultColors = ['#111', '#222', '#333'],
			rowSize = 2,
			onChangeColor = sinon.spy();

		before(() => {
			view = ColorPickerView({
				defaultColors,
				rowSize,
				onChangeColor
			});
			wrapper = render(view);
		})

		it('should render all buttons', () => {
			wrapper.should.have.exactly(defaultColors.length).descendants('button');
		})

		it('should render all rows', () => {
			let numOfRows = parseInt(defaultColors.length / rowSize) + 1;
			wrapper.should.have.exactly(numOfRows).descendants('.colors-row');
		})

		it('should distinguish between clicks in two different buttons with colors', () => {
			let colorPickerButtons = mount(view).find('button');
			let firstButton = colorPickerButtons.at(0);
			let secondButton = colorPickerButtons.at(1);

			firstButton.simulate('click');
			onChangeColor.should.have.been.calledWith(defaultColors[0]);
			onChangeColor.reset();

			secondButton.simulate('click');
			onChangeColor.should.have.been.calledWith(defaultColors[1]);
			onChangeColor.reset();
		})

	})

})
