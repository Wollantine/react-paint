import React from 'react';
import {render, mount} from 'enzyme';
import sinon from 'sinon';
import {UndoerContainer} from '../../src/components/undoer/Undoer.jsx';

describe('<Undoer/>', () => {

    let view = null,
        wrapper = null,
        onUndo = sinon.spy(),
        onRedo = sinon.spy();

    it('should render two buttons', () => {
        view = <UndoerContainer onUndo={onUndo} onRedo={onRedo} past={['1']} future={['2']} />;
        wrapper = render(view);
        wrapper.should.have.exactly(2).descendants('button');
    })

    it('should disable first button when past is empty', () => {
        view = <UndoerContainer onUndo={onUndo} onRedo={onRedo} past={[]} future={['2']} />;
        wrapper = render(view);
        wrapper.find('button').first().should.be.disabled();
    })

    it('should enable first button when past is not empty', () => {
        view = <UndoerContainer onUndo={onUndo} onRedo={onRedo} past={['1']} future={['2']} />;
        wrapper = render(view);
        wrapper.find('button').first().should.not.be.disabled();
    })

    it('should disable second button when future is empty', () => {
        view = <UndoerContainer onUndo={onUndo} onRedo={onRedo} past={['1']} future={[]} />;
        wrapper = render(view);
        wrapper.find('button').last().should.be.disabled();
    })

    it('should enable second button when future is not empty', () => {
        view = <UndoerContainer onUndo={onUndo} onRedo={onRedo} past={['1']} future={['2']} />;
        wrapper = render(view);
        wrapper.find('button').last().should.not.be.disabled();
    })

    it('should call onUndo when clicking the first button', () => {
        view = <UndoerContainer onUndo={onUndo} onRedo={onRedo} past={['1']} future={['2']} />;
        wrapper = mount(view);
        wrapper.find('button').first().simulate('click');
        onUndo.should.have.been.called;
    })

    it('should call onRedo when clicking the last button', () => {
        view = <UndoerContainer onUndo={onUndo} onRedo={onRedo} past={['1']} future={['2']} />;
        wrapper = mount(view);
        wrapper.find('button').last().simulate('click');
        onRedo.should.have.been.called;
    })

});
